/**
 * THE TWIN TEST (D-51). No Melbourne page launches as a city-name swap of its Sydney twin.
 *
 *   node scripts/test-twins.mjs --base http://localhost:3000 [--auth user:pass]
 *
 * For each twin pair in src/config/nav.ts that is built in both cities:
 *  1. take the text of <main> only (the header, footer and nav are outside it; scripts,
 *     styles and staging review notes are removed);
 *  2. lower-case it and replace Sydney, Melbourne, NSW, New South Wales, Victoria and
 *     Victorian with one token;
 *  3. build each page's set of five-word shingles and report the Jaccard overlap.
 * Limits: service pages 30%, city hubs 50%. Prints a table; exit 1 if a pair is over.
 */
import { routes } from '../src/config/routes.ts';
import { twinPairs } from '../src/config/nav.ts';
import { parseHtml, find, attr, textOf } from './lib/html.mjs';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i === -1 ? d : args[i + 1]; };
const base = opt('base', 'http://localhost:3000').replace(/\/$/, '');
const auth = opt('auth', '');
const headers = auth ? { authorization: 'Basic ' + Buffer.from(auth).toString('base64') } : {};
const mode = process.env.URL_MODE === 'A' ? 'a' : 'b';
const HUBS = new Set(['sydneyHub', 'melbourneHub']);

export function shingles(text, n = 5) {
  const words = text.toLowerCase()
    .replace(/new south wales|sydney|melbourne|nsw|victorian|victoria/g, ' cityname ')
    .replace(/[^a-z0-9'\s]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(' '));
  return set;
}
export const jaccard = (a, b) => { let shared = 0; for (const s of a) if (b.has(s)) shared++; return shared / (a.size + b.size - shared || 1); };

async function mainText(path) {
  const res = await fetch(base + path, { headers, redirect: 'manual' });
  if (res.status !== 200) throw new Error(`${path} returned ${res.status}`);
  const main = find(parseHtml(await res.text()), (n) => n.tagName === 'main');
  return textOf(main, (n) => attr(n, 'data-staging-note') === 'true');
}

const rows = [];
let failed = false;
for (const [syd, mel] of twinPairs) {
  const s = routes[syd], m = routes[mel];
  if (s.status !== 'live' || m.status !== 'live') { rows.push([syd, mel, '-', '-', 'not built in both cities']); continue; }
  const overlap = jaccard(shingles(await mainText(s[mode])), shingles(await mainText(m[mode])));
  const limit = HUBS.has(syd) ? 0.5 : 0.3;
  const over = overlap > limit;
  if (over) failed = true;
  rows.push([syd, mel, `${(overlap * 100).toFixed(1)}%`, `${limit * 100}%`, over ? 'OVER' : 'ok']);
}
const w = [22, 24, 9, 7];
console.log(['Sydney', 'Melbourne', 'Overlap', 'Limit', 'Result'].map((h, i) => h.padEnd(w[i] ?? 0)).join(' '));
for (const r of rows) console.log(r.map((c, i) => String(c).padEnd(w[i] ?? 0)).join(' '));
process.exit(failed ? 1 : 0);
