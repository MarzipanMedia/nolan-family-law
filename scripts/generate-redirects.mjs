/**
 * Builds src/generated/redirects.json from export/REDIRECT-MAP.csv (D-18, D-36) and checks
 * the map against the routes file. Runs before every build and dev start.
 *
 * It fails the build when:
 *  - a redirect points at a path that is not a route (it would 404 or chain);
 *  - a redirect target is itself redirected (a chain);
 *  - the map says KEEP or NEW for a path that the routes file does not serve;
 *  - the routes file serves a path the map does not list, or lists as a redirect.
 *
 * Both URL modes are generated and checked, so switching URL_MODE is one setting.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { readMap } from './lib/csv.mjs';
import { routes } from '../src/config/routes.ts';

const errors = [];
const warnings = [];
const out = {};

for (const mode of ['A', 'B']) {
  const rows = readMap(mode);
  const pathOf = (def) => (mode === 'A' ? def.a : def.b);
  const routeByPath = new Map(Object.entries(routes).map(([key, def]) => [pathOf(def), { key, def }]));

  const redirects = {};
  const gone = [];
  const listed = new Map();

  for (const r of rows) {
    if (r.action === '301') {
      if (r.path === r.target) continue; // e.g. /contact → /contact/ is plain slash handling
      redirects[r.path] = r.target;
    } else if (r.action === '410') {
      gone.push(r.path);
    } else if (/^(KEEP|NEW)/.test(r.action)) {
      // NEW rows name the page by its target (the option A path can differ from old_path).
      listed.set(r.action.startsWith("NEW") && r.target ? r.target : r.path, r);
    } else {
      errors.push(`[${mode}] ${r.rawPath}: unknown action "${r.action}"`);
    }
  }

  for (const [from, to] of Object.entries(redirects)) {
    const hit = routeByPath.get(to);
    if (redirects[to]) errors.push(`[${mode}] chain: ${from} → ${to} → ${redirects[to]}`);
    if (!hit) errors.push(`[${mode}] ${from} redirects to ${to}, which is not in the routes file`);
    else if (hit.def.status !== 'live') warnings.push(`[${mode}] ${from} → ${to}: target page is not built yet (${hit.key})`);
    if (routeByPath.has(from)) errors.push(`[${mode}] ${from} is both a route (${routeByPath.get(from).key}) and a redirect`);
  }

  for (const [path, r] of listed) {
    const hit = routeByPath.get(path);
    if (!hit) { errors.push(`[${mode}] the map says ${r.action} for ${path} (${r.type}) but no route serves it`); continue; }
    const wantNoindex = /noindex/.test(r.action);
    if (wantNoindex === hit.def.indexable) errors.push(`[${mode}] ${path}: map says "${r.action}" but route "${hit.key}" has indexable=${hit.def.indexable}`);
    if (hit.def.status !== 'live' && !r.action.startsWith('NEW')) warnings.push(`[${mode}] ${path} must return 200 at launch but is not built yet (${hit.key})`);
  }

  for (const [path, { key }] of routeByPath) {
    if (!listed.has(path)) errors.push(`[${mode}] route "${key}" (${path}) has no KEEP or NEW row in REDIRECT-MAP.csv`);
  }

  out[mode] = { redirects, gone };
  console.log(`redirects [${mode}]: ${Object.keys(redirects).length} redirects, ${gone.length} gone, ${listed.size} kept or new`);
}

const quiet = process.argv.includes('--quiet');
if (warnings.length && !quiet) {
  const current = process.env.URL_MODE === 'A' ? 'A' : 'B';
  const mine = warnings.filter((w) => w.startsWith(`[${current}]`));
  console.warn(`\n${mine.length} page(s) still to build before launch (URL_MODE=${current}):`);
  for (const w of mine) console.warn('  ' + w);
}
if (errors.length) {
  console.error(`\nREDIRECT MAP ERRORS (${errors.length}):`);
  for (const e of errors) console.error('  ' + e);
  if (!process.env.ALLOW_MAP_ERRORS) process.exit(1);
}

mkdirSync(new URL('../src/generated/', import.meta.url), { recursive: true });
writeFileSync(new URL('../src/generated/redirects.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
