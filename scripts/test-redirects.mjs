/**
 * THE GO/NO-GO TEST (BUILD-NOTES, "Redirects and URL safety"; D-18, D-23, D-36).
 *
 *   node scripts/test-redirects.mjs --base https://staging.example [--auth user:pass]
 *                                   [--mode B] [--old-sitemap] [--production]
 *
 * For every row of export/REDIRECT-MAP.csv (columns chosen by --mode or URL_MODE):
 *   KEEP            → 200, a self-referencing canonical, no noindex
 *   KEEP (noindex)  → 200 and noindex
 *   301             → exactly one 301, to the target, and the target returns 200
 *   410             → 410
 *   NEW             → 200 if the page is built; otherwise it must not be linked from any page
 * And:
 *   - each 301 also works without its trailing slash, in one hop
 *   - query strings survive a redirect
 *   - every URL in the new sitemap returns 200 and none redirects
 *   - with --old-sitemap: every URL in the live WordPress sitemap returns 200 or one 301
 *   - with --production: host and protocol variants reach https://www in one hop,
 *     and nothing carries a noindex header
 *   - /wp-content/uploads/ files referenced by imported content are served
 *
 * Exit code 0 only if every check passes.
 */
import { readFileSync } from 'node:fs';
import { readMap } from './lib/csv.mjs';

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i === -1 ? fallback : args[i + 1]; };
const flag = (name) => args.includes(`--${name}`);

const base = (opt('base', 'http://localhost:3000')).replace(/\/$/, '');
const mode = opt('mode', process.env.URL_MODE === 'A' ? 'A' : 'B');
const auth = opt('auth', process.env.STAGING_USER && process.env.STAGING_PASSWORD ? `${process.env.STAGING_USER}:${process.env.STAGING_PASSWORD}` : '');
const ORIGIN = 'https://www.nolanlawyers.com.au';
const headers = { 'user-agent': 'nolan-redirect-test', ...(auth ? { authorization: 'Basic ' + Buffer.from(auth).toString('base64') } : {}) };

const fails = [];
let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) fails.push(msg); return cond; };

async function hit(pathOrUrl, extraHeaders = {}) {
  const u = pathOrUrl.startsWith('http') ? pathOrUrl : base + pathOrUrl;
  for (let i = 0; ; i++) {
    try {
      const res = await fetch(u, { redirect: 'manual', headers: { ...headers, ...extraHeaders } });
      const body = res.status === 200 && (res.headers.get('content-type') ?? '').includes('html') ? await res.text() : '';
      if (!body) await res.arrayBuffer().catch(() => {});
      return { status: res.status, location: res.headers.get('location') ?? '', robotsHeader: res.headers.get('x-robots-tag') ?? '', body };
    } catch (e) {
      if (i >= 2) return { status: 0, location: '', robotsHeader: '', body: '', error: e.message };
    }
  }
}
/** Where a Location header points, as path+query on the site under test. */
const local = (loc) => { const u = new URL(loc, base); return { path: u.pathname + u.search, host: u.host, proto: u.protocol, external: loc.startsWith('http') && u.origin !== new URL(base).origin }; };

const canonicalOf = (html) => html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/)?.[1] ?? html.match(/<link[^>]+href="([^"]+)"[^>]*rel="canonical"/)?.[1] ?? '';
const metaNoindex = (html) => /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
const linksIn = (html) => [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);

const rows = readMap(mode);
console.log(`Testing ${rows.length} rows of REDIRECT-MAP.csv against ${base} (URL_MODE=${mode})\n`);

// Launch-critical rows that must always be in the map (each is then tested like every other
// 301 below: one hop, with and without the slash, query string kept, target returns 200).
const MUST_REDIRECT = {
  B: [
    ['/family-lawyer/', '/sydney/family-law/'],        // Sydney hub (D-24)
    ['/family-law-services/', '/sydney/family-law/'],  // Sydney hub (D-24)
    ['/melbourne-family-law/', '/melbourne/family-law/'], // Melbourne hub (D-23)
  ],
  A: [],
};
for (const [from, to] of MUST_REDIRECT[mode] ?? []) {
  const row = rows.find((r) => r.path === from);
  ok(row?.action === '301' && row.target === to, `REDIRECT-MAP.csv must 301 ${from} → ${to} (found ${row ? `${row.action} ${row.target}` : 'no row'})`);
}

const pageBodies = new Map();
const newUnbuilt = [];

for (const r of rows) {
  const id = `${r.rawPath} [${r.action}]`;
  if (r.action === '301') {
    if (r.path === r.target) {                       // e.g. /contact → /contact/: pure slash handling
      const res = await hit(r.rawPath);
      ok(res.status === 301 && local(res.location).path === r.target, `${id}: expected one 301 to ${r.target}, got ${res.status} ${res.location}`);
      continue;
    }
    for (const variant of new Set([r.rawPath, r.path, /\.[a-z0-9]{2,5}$/i.test(r.path) ? r.path : r.path.replace(/\/$/, '')])) {
      const res = await hit(variant);
      if (!ok(res.status === 301, `${variant} [301]: expected 301, got ${res.status}${res.error ? ' ' + res.error : ''}`)) continue;
      ok(local(res.location).path === r.target, `${variant} [301]: expected → ${r.target}, got → ${res.location}`);
    }
    const q = await hit(r.path + '?utm_source=gbp&utm_medium=organic&gclid=TeSt123');
    ok(q.status === 301 && local(q.location).path === r.target + '?utm_source=gbp&utm_medium=organic&gclid=TeSt123', `${id}: query string lost (→ ${q.location})`);
    const target = await hit(r.target);
    ok(target.status === 200, `${id}: target ${r.target} returned ${target.status}, expected 200 (a redirect to a missing page or a chain)`);
  } else if (r.action === '410') {
    const res = await hit(r.path);
    ok(res.status === 410, `${id}: expected 410, got ${res.status}`);
  } else if (r.action.startsWith('KEEP') || r.action.startsWith('NEW')) {
    const path = r.action.startsWith('NEW') && r.target ? r.target : r.path;
    const res = await hit(path);
    if (r.action.startsWith('NEW') && res.status === 404) { newUnbuilt.push(path); continue; }
    if (!ok(res.status === 200, `${id}: expected 200, got ${res.status}${res.location ? ' → ' + res.location : ''}`)) continue;
    pageBodies.set(path, res.body);
    const noindex = /noindex/.test(r.action);
    ok(metaNoindex(res.body) === noindex, `${id}: ${noindex ? 'must be noindex' : 'must not be noindex'}`);
    if (!noindex) ok(canonicalOf(res.body) === ORIGIN + path, `${id}: canonical is "${canonicalOf(res.body)}", expected ${ORIGIN + path}`);
    if (!path.endsWith('/')) continue;
    const bare = await hit(path.replace(/\/$/, '') || '/');
    if (path !== '/') ok(bare.status === 301 && local(bare.location).path === path, `${id}: without the trailing slash expected one 301 to ${path}, got ${bare.status} ${bare.location}`);
  } else {
    ok(false, `${id}: unknown action`);
  }
}

// NEW pages that are not built yet must not be linked from anywhere.
for (const path of newUnbuilt) {
  const linkers = [...pageBodies].filter(([, html]) => linksIn(html).includes(path)).map(([p]) => p);
  ok(linkers.length === 0, `${path} [NEW]: not built, but linked from ${linkers.join(', ')}`);
}

// No page links to a URL that redirects, is gone or is missing (D-25).
const redirecting = new Set(rows.filter((r) => r.action === '301' && r.path !== r.target).map((r) => r.path));
const goneSet = new Set(rows.filter((r) => r.action === '410').map((r) => r.path));
const known = new Set(pageBodies.keys());
const linkStatus = new Map();
for (const [page, html] of pageBodies) {
  for (const href of new Set(linksIn(html))) {
    if (href.startsWith('/_next/') || /\.(css|js|ico|png|jpg|jpeg|webp|avif|svg|woff2|xml|txt|pdf)$/i.test(href)) continue;
    const norm = href.endsWith('/') ? href : href + '/';
    if (redirecting.has(norm) || goneSet.has(norm) || href !== norm) { ok(false, `${page}: links to ${href}, which ${goneSet.has(norm) ? 'is gone' : 'redirects'}`); continue; }
    if (known.has(href)) { checks++; continue; }
    if (!linkStatus.has(href)) linkStatus.set(href, (await hit(href)).status);
    ok(linkStatus.get(href) === 200, `${page}: links to ${href}, which returns ${linkStatus.get(href)}`);
  }
}

// The new sitemap.
const sm = await hit('/sitemap.xml');
if (ok(sm.status === 200, `/sitemap.xml returned ${sm.status}`)) {
  const xml = await (await fetch(base + '/sitemap.xml', { headers })).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  ok(locs.length > 0, 'the new sitemap is empty');
  const noindexPaths = new Set(rows.filter((r) => /noindex/.test(r.action)).map((r) => r.path));
  for (const loc of locs) {
    ok(loc.startsWith(ORIGIN + '/'), `sitemap: ${loc} is not on ${ORIGIN}`);
    const path = new URL(loc).pathname;
    ok(!noindexPaths.has(path), `sitemap: ${path} is noindex and must not be listed`);
    const status = known.has(path) ? 200 : (await hit(path)).status;
    ok(status === 200, `sitemap: ${path} returns ${status}, expected 200`);
  }
  console.log(`New sitemap: ${locs.length} URLs`);
}

// The old live sitemap: every URL must be a 200 or a single 301 to a 200.
if (flag('old-sitemap')) {
  const index = await (await fetch(`${ORIGIN}/sitemap_index.xml`, { headers: { 'user-agent': headers['user-agent'] } })).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  let n = 0;
  for (const m of maps) {
    const xml = await (await fetch(m, { headers: { 'user-agent': headers['user-agent'] } })).text();
    for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const path = new URL(loc).pathname;
      if (path.startsWith('/wp-content/')) continue;
      n++;
      const res = await hit(path);
      if (res.status === 200 || res.status === 410 && goneSet.has(path)) { checks++; continue; }
      if (!ok(res.status === 301, `old sitemap: ${path} returned ${res.status}`)) continue;
      const next = await hit(local(res.location).path);
      ok(next.status === 200, `old sitemap: ${path} → ${res.location} returned ${next.status} (chain or missing page)`);
    }
  }
  console.log(`Old live sitemap: ${n} URLs checked`);
}

// Uploads referenced by imported content are served at their original paths.
try {
  const used = new Set();
  const { readdirSync } = await import('node:fs');
  for (const kind of ['articles', 'profiles']) {
    const dir = new URL(`../src/content/imported/${kind}/`, import.meta.url);
    for (const f of readdirSync(dir)) {
      const rec = JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
      for (const [, p] of (rec.html + ` "${rec.image}"`).matchAll(/"(\/wp-content\/uploads\/[^"]+)"/g)) used.add(p);
    }
  }
  let bad = 0;
  for (const p of used) { const res = await hit(p); if (!ok(res.status === 200, `upload ${p} returned ${res.status}`)) bad++; }
  console.log(`Uploads: ${used.size} referenced files checked${bad ? `, ${bad} missing` : ''}`);
} catch (e) { ok(false, `could not check uploads: ${e.message}`); }

// Host and protocol (launch morning, against the real domain).
if (flag('production')) {
  const sample = rows.find((r) => r.action === '301' && r.path !== r.target);
  for (const origin of ['https://nolanlawyers.com.au', 'http://www.nolanlawyers.com.au', 'http://nolanlawyers.com.au']) {
    for (const [from, to] of [['/', '/'], ['/our-team', '/our-team/'], [sample.path, sample.target]]) {
      const res = await hit(origin + from);
      ok([301, 308].includes(res.status) && res.location === ORIGIN + to, `${origin}${from}: expected one hop to ${ORIGIN}${to}, got ${res.status} → ${res.location}`);
    }
  }
  const home = await hit('/');
  ok(!/noindex/.test(home.robotsHeader), 'production is still sending X-Robots-Tag: noindex');
  const robots = await (await fetch(base + '/robots.txt', { headers })).text();
  ok(!/Disallow: \/\s*$/m.test(robots), 'production robots.txt still disallows everything');
}

console.log(`\n${checks} checks, ${fails.length} failed.`);
if (fails.length) {
  console.log('\nFAILED:');
  for (const f of fails) console.log('  ✗ ' + f);
  console.log('\nRESULT: FAIL. Do not launch with URL_MODE=' + mode + ' until this is 100%.');
  process.exit(1);
}
console.log('RESULT: PASS (100%).');
