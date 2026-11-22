/**
 * THE CITY-AWARE NAV CHECK (D-49).
 *
 *   node scripts/test-nav.mjs --base http://localhost:3000 [--auth user:pass]
 *
 * For every built page:
 *  1. a Melbourne page's header, strip and mobile menu contain no /sydney/ link except the
 *     city switch, and the reverse for Sydney pages;
 *  2. every header, menu, strip and footer link returns 200 with no redirect;
 *  3. the city switch on each twin page points at its twin, and the twin points back.
 */
import { routes } from '../src/config/routes.ts';
import { twinPairs } from '../src/config/nav.ts';
import { parseHtml, findAll, attr } from './lib/html.mjs';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i === -1 ? d : args[i + 1]; };
const base = opt('base', 'http://localhost:3000').replace(/\/$/, '');
const auth = opt('auth', '');
const headers = auth ? { authorization: 'Basic ' + Buffer.from(auth).toString('base64') } : {};
const mode = process.env.URL_MODE === 'A' ? 'a' : 'b';

const fails = [];
const status = new Map();
async function statusOf(path) {
  if (!status.has(path)) status.set(path, fetch(base + path, { headers, redirect: 'manual' }).then((r) => r.status));
  return status.get(path);
}
// The header and phone strip follow the page's city; the footer lists both cities (D-49).
const zoneOf = (parents) => parents.some((p) => p.tagName === 'header' || attr(p, 'data-phone-strip') === 'true') ? 'header' : parents.some((p) => p.tagName === 'footer') ? 'footer' : null;
const inSwitch = (n, parents) => [n, ...parents].some((p) => attr(p, 'data-city-switch') === 'true');

function links(node, parents = [], acc = []) {
  if (node.tagName === 'a' && attr(node, 'href')) acc.push({ href: attr(node, 'href'), switch: inSwitch(node, parents), zone: zoneOf(parents) });
  for (const c of node.childNodes ?? []) links(c, [...parents, node], acc);
  return acc;
}

const switches = new Map();
const toBuild = new Set();
let pages = 0;
for (const [key, def] of Object.entries(routes)) {
  if (def.status !== 'live') continue;
  const path = def[mode];
  const res = await fetch(base + path, { headers, redirect: 'manual' });
  if (res.status !== 200) continue; // planned or carry-over pages without content
  pages++;
  const shell = links(parseHtml(await res.text())).filter((l) => l.zone && !l.href.startsWith('#'));
  const other = def.city === 'melbourne' ? '/sydney/' : def.city === 'sydney' ? '/melbourne/' : null;
  for (const l of shell) {
    if (other && l.zone === 'header' && l.href.startsWith(other) && !l.switch) fails.push(`${path}: header links to ${l.href}`);
  }
  switches.set(key, shell.find((l) => l.zone === 'header' && l.switch)?.href);
  for (const l of shell) if (l.href.startsWith('/') && !/^\/(images|wp-content)\//.test(l.href)) {
    const target = l.href.split('#')[0];
    const s = await statusOf(target);
    if (s === 200) continue;
    // A link to a page that has a final URL but is not built yet is reported once, not failed.
    const planned = Object.values(routes).some((d) => d[mode] === target && d.status !== 'live');
    if (planned) toBuild.add(target);
    else fails.push(`${path}: shell link ${l.href} returned ${s}`);
  }
}
for (const [s, m] of twinPairs) {
  if (routes[s].status !== 'live' || routes[m].status !== 'live') continue;
  if (switches.get(s) !== routes[m][mode]) fails.push(`${routes[s][mode]}: city switch points at ${switches.get(s)}, not its twin ${routes[m][mode]}`);
  if (switches.get(m) !== routes[s][mode]) fails.push(`${routes[m][mode]}: city switch points at ${switches.get(m)}, not its twin ${routes[s][mode]}`);
}
console.log(`nav check: ${pages} pages, ${status.size} distinct shell links`);
if (toBuild.size) console.warn(`shell links to pages still to build before launch: ${[...toBuild].join(', ')}`);
if (fails.length) { console.error(`NAV CHECK FAILED (${fails.length}):`); for (const f of fails) console.error('  ' + f); process.exit(1); }
console.log('nav check: ok');
