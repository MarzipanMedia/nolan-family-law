/**
 * Guards the rules that are already decided. Runs before every build (npm run check).
 *
 * Fails when the site's own code contains:
 *  - a phone number or tel: link outside the office config and PhoneLink
 *    (000 and 1800RESPECT on the safety panels are allowed: they are not office numbers);
 *  - an internal URL written by hand instead of url('<routeKey>') (D-25);
 *  - "specialist" (D-05), a dollar figure (D-02), a quick exit (D-07), an em dash,
 *    or a leftover review note;
 *  - placeholder artwork, when building for production.
 * Imported WordPress content is existing copy, not new copy, so it is reported separately.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { routes } from '../src/config/routes.ts';

const root = new URL('..', import.meta.url).pathname;
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { if (!/generated|content\/imported/.test(p)) walk(p); }
    else if (/\.(ts|tsx|css)$/.test(f)) files.push(p);
  }
})(join(root, 'src'));

const ALLOW_PHONE = new Set(['src/config/offices.ts']);
const ALLOW_URL = new Set(['src/config/routes.ts', 'src/proxy.ts']);
const errors = [], placeholders = [];
const isComment = (line) => /^\s*(\*|\/\/|\/\*|\{\/\*)/.test(line);

for (const file of files) {
  const rel = relative(root, file);
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (/data-placeholder="true"/.test(line)) placeholders.push(at);
    if (isComment(line)) return;
    if (!ALLOW_PHONE.has(rel)) {
      if (/\(0[2378]\)\s?\d{4}\s?\d{4}|\+61\s?\d|\b0[23]\s?\d{4}\s?\d{4}\b/.test(line)) errors.push(`${at}: phone number written outside the office config`);
      if (/tel:(?!000\b|1800737732\b|\$\{)/.test(line) && !/telHref|\/\^\(tel/.test(line)) errors.push(`${at}: tel: link outside PhoneLink and the office config`);
      if (/Level 2[23]|Level 33|Suite 3/.test(line)) errors.push(`${at}: office address written outside the office config`);
    }
    if (!ALLOW_URL.has(rel)) {
      for (const m of line.matchAll(/href=(?:"|\{"|\{')(\/[^"'}]*)/g)) {
        if (!/^\/(images|api|wp-content)\//.test(m[1])) errors.push(`${at}: internal URL "${m[1]}" written by hand; use url('<routeKey>')`);
      }
      if (/nolanlawyers\.com\.au\/[a-z]/.test(line)) errors.push(`${at}: absolute site URL written by hand; use abs('<routeKey>')`);
    }
    if (/specialist/i.test(line)) errors.push(`${at}: "specialist" (D-05)`);
    if (/quick exit/i.test(line)) errors.push(`${at}: quick exit (D-07)`);
    if (/—/.test(line)) errors.push(`${at}: em dash`);
    if (/\$\d/.test(line) && !/\$\{|\\\$/.test(line)) errors.push(`${at}: dollar figure (D-02)`);
    if (/#FFF4D6|data-review-note/.test(line)) errors.push(`${at}: review note left in`);
  });
}

// Links to pages that do not exist yet.
const planned = new Map();
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(/(?:url|abs)\(\s*["']([^"']+)["']/g)) {
    const def = routes[m[1]];
    if (!def) errors.push(`${relative(root, file)}: unknown route key "${m[1]}"`);
    else if (def.status !== 'live') planned.set(m[1], (planned.get(m[1]) ?? new Set()).add(relative(root, file)));
  }
}

if (placeholders.length) {
  console.warn(`\n${placeholders.length} placeholder image(s) from the prototypes still to be replaced with final photography:`);
  for (const p of placeholders) console.warn('  ' + p);
  if (process.env.SITE_ENV === 'production') errors.push('placeholder artwork must be replaced before a production build');
}
if (errors.length) {
  console.error(`\nRULE CHECK FAILED (${errors.length}):`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(`rule check: ok (${files.length} files; no hand-written phone numbers, URLs, "specialist", fees, quick exit or review notes)`);
