/**
 * One-off, re-runnable import of articles and team profiles from the live WordPress site
 * (D-35). READ-ONLY: it only sends GET requests. Run with: npm run import
 *
 * For each of the published posts and the profile pages listed in REDIRECT-MAP.csv it:
 *  - reads the content from the WordPress content API and the title, meta description and
 *    social image from the live page (so SEO titles carry over exactly, D-17);
 *  - strips the page-builder markup down to clean headings, paragraphs, lists, links, images;
 *  - rewrites every internal link to a route token ("route:<key>") that the site resolves
 *    through the routes file, so nothing links through a redirect under either URL mode (D-25);
 *  - copies referenced uploads to public/wp-content/uploads/ at their original paths.
 *
 * Output: src/content/imported/{articles,profiles}/<slug>.json and index.json.
 */
import { writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment } from 'parse5';
import { readMap, normalisePath } from './lib/csv.mjs';

const ORIGIN = 'https://www.nolanlawyers.com.au';
const UA = 'Mozilla/5.0 (compatible; site-migration-import)';
const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = `${root}src/content/imported`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, as = 'text', tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA } });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`${res.status}`);
      return as === 'json' ? await res.json() : as === 'buffer' ? Buffer.from(await res.arrayBuffer()) : await res.text();
    } catch (e) {
      if (i === tries - 1) throw new Error(`GET ${url} failed: ${e.message}`);
      await sleep(1500 * (i + 1));
    }
  }
}

// ── Today's URLs → route keys ────────────────────────────────────────────────────────────
// Static routes are matched on their option A path (today's URL). Old URLs that already
// redirect are followed through the option A column of the map.
const { routes } = await import('../src/config/routes.ts');
const mapA = readMap('A');
const redirectA = Object.fromEntries(mapA.filter((r) => r.action === '301').map((r) => [r.path, r.target]));
const keyByTodayPath = new Map(Object.entries(routes).map(([key, def]) => [def.a, key]));

const unresolved = [];
function tokenFor(href, fromSlug) {
  let u;
  try { u = new URL(href, ORIGIN + '/'); } catch { return null; }
  if (!/^(www\.)?nolanlawyers\.com\.au$/.test(u.hostname)) return null;         // external
  if (u.pathname.startsWith('/wp-content/')) return u.pathname;                  // a file: keep the path
  let path = normalisePath(decodeURI(u.pathname));
  path = redirectA[path] ?? path;
  const key = keyByTodayPath.get(path) ?? pendingKeys.get(path);
  if (!key) { unresolved.push({ from: fromSlug, href }); return undefined; }
  return `route:${key}${u.hash || ''}`;
}

// ── HTML cleaning ────────────────────────────────────────────────────────────────────────
const KEEP = new Set(['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'a', 'strong', 'b', 'em', 'i', 'blockquote', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'figure', 'figcaption', 'sup', 'sub']);
const DROP = new Set(['script', 'style', 'noscript', 'svg', 'form', 'iframe', 'button', 'input', 'select', 'textarea', 'nav', 'template']);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;

function clean(html, slug, uploads) {
  const out = [];
  const walk = (node) => {
    if (node.nodeName === '#text') { out.push(esc(node.value)); return; }
    if (!node.tagName) { (node.childNodes ?? []).forEach(walk); return; }
    let tag = node.tagName;
    if (DROP.has(tag)) return;
    const cls = attr(node, 'class') ?? '';
    if (/elementor-hidden-desktop|elementor-widget-(form|shortcode|wp-widget|posts|button|social|share|icon-list|stm|vc_|sidebar)|wpcf7|wpforms|sharedaddy|jp-relatedposts/.test(cls) && !/vc_custom_heading/.test(cls)) return;
    if (tag === 'h1') tag = 'h2';               // the template supplies the page's one H1
    if (tag === 'h5' || tag === 'h6') tag = 'h4';
    if (!KEEP.has(tag)) { (node.childNodes ?? []).forEach(walk); return; }

    if (tag === 'img') {
      let src = attr(node, 'data-src') || attr(node, 'src') || '';
      if (!src || src.startsWith('data:')) return;
      const u = new URL(src, ORIGIN);
      if (/nolanlawyers\.com\.au$/.test(u.hostname) && u.pathname.startsWith('/wp-content/uploads/')) { uploads.add(u.pathname); src = u.pathname; }
      const w = attr(node, 'width'), h = attr(node, 'height');
      out.push(`<img src="${escAttr(src)}" alt="${escAttr(attr(node, 'alt') ?? '')}"${w && h ? ` width="${w}" height="${h}"` : ''} loading="lazy" decoding="async">`);
      return;
    }
    if (tag === 'a') {
      const href = attr(node, 'href') ?? '';
      const inner = () => (node.childNodes ?? []).forEach(walk);
      if (!href || href.startsWith('#') || href.startsWith('javascript')) { inner(); return; }
      if (/^(tel|mailto):/.test(href)) { out.push(`<a href="${escAttr(href)}">`); inner(); out.push('</a>'); return; }
      const token = tokenFor(href, slug);
      if (token === undefined) { inner(); return; }                 // internal link we cannot resolve: keep the words, drop the link
      if (token === null) { out.push(`<a href="${escAttr(href)}" rel="noopener">`); inner(); out.push('</a>'); return; }
      if (token.startsWith('/wp-content/')) uploads.add(token);
      out.push(`<a href="${escAttr(token)}">`); inner(); out.push('</a>');
      return;
    }
    out.push(`<${tag}>`);
    (node.childNodes ?? []).forEach(walk);
    if (tag !== 'br') out.push(`</${tag}>`);
  };
  walk(parseFragment(html));
  return out.join('')
    .replace(/<(p|h2|h3|h4|li|strong|em|b|i|figure|blockquote)>(\s|&nbsp;|<br>)*<\/\1>/g, '')
    .replace(/<(ul|ol)>\s*<\/\1>/g, '')
    .replace(/ /g, ' ')
    .replace(/[ \t]+\n/g, '\n').replace(/\n{2,}/g, '\n').trim();
}

function headMeta(html) {
  const doc = parse(html);
  const meta = { title: '', description: '', image: '', ld: [] };
  const walk = (n) => {
    if (n.tagName === 'title' && !meta.title) meta.title = n.childNodes?.[0]?.value?.trim() ?? '';
    if (n.tagName === 'meta') {
      const name = attr(n, 'name') || attr(n, 'property');
      if (name === 'description') meta.description = attr(n, 'content') ?? '';
      if (name === 'og:image' && !meta.image) meta.image = attr(n, 'content') ?? '';
    }
    if (n.tagName === 'script' && attr(n, 'type') === 'application/ld+json') {
      try { const d = JSON.parse(n.childNodes?.[0]?.value ?? ''); meta.ld.push(...(d['@graph'] ?? [d])); } catch {}
    }
    (n.childNodes ?? []).forEach(walk);
  };
  walk(doc);
  return meta;
}

const decode = (s) => parseFragment(s).childNodes.map((n) => n.value ?? '').join('').trim() || s;

// ── What to import ───────────────────────────────────────────────────────────────────────
const mapB = readMap('B');
const profilePaths = mapB.filter((r) => r.type === 'profile' && r.action === 'KEEP' && r.path !== '/our-team/').map((r) => r.path);
const articlePaths = new Set(mapB.filter((r) => r.type === 'article' && r.action === 'KEEP').map((r) => r.path));

console.log('Reading posts and pages from the WordPress content API (read-only)…');
const posts = [];
for (let p = 1; ; p++) {
  const batch = await get(`${ORIGIN}/wp-json/wp/v2/posts?per_page=50&page=${p}&_fields=id,slug,link,date,modified,title,content,excerpt`, 'json');
  if (!batch?.length) break; posts.push(...batch); if (batch.length < 50) break;
}
const pages = await get(`${ORIGIN}/wp-json/wp/v2/pages?per_page=100&_fields=id,slug,link,date,modified,title,content`, 'json');

const pathOf = (item) => normalisePath(new URL(item.link).pathname);
const pendingKeys = new Map();   // today's path → route key for everything being imported in this run
const jobs = [];
for (const post of posts) {
  const path = pathOf(post);
  if (!articlePaths.has(path)) { console.warn(`  skipped post not marked KEEP in the map: ${path}`); continue; }
  articlePaths.delete(path);
  pendingKeys.set(path, `article:${post.slug}`);
  jobs.push({ kind: 'articles', item: post, path });
}
for (const path of profilePaths) {
  const item = pages.find((pg) => pathOf(pg) === path);
  if (!item) { console.error(`  MISSING on WordPress: profile ${path}`); process.exitCode = 1; continue; }
  pendingKeys.set(path, `profile:${item.slug}`);
  jobs.push({ kind: 'profiles', item, path });
}
for (const path of articlePaths) { console.error(`  MISSING on WordPress: article ${path}`); process.exitCode = 1; }

for (const kind of ['articles', 'profiles']) { rmSync(`${outDir}/${kind}`, { recursive: true, force: true }); mkdirSync(`${outDir}/${kind}`, { recursive: true }); }

const uploads = new Set();
const titleFixes = [];
const index = { articles: [], profiles: [] };
for (const { kind, item, path } of jobs) {
  const live = await get(ORIGIN + path);
  const meta = headMeta(live ?? '');
  let html = clean(item.content.rendered, item.slug, uploads);
  const title = decode(item.title.rendered);
  const text = (h) => decode(h.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim().toLowerCase();
  // Page-builder leftovers: the section banner, and the page's own name repeated as a heading.
  html = html.replace(/<h2>\s*our (family lawyers|team|people)\s*<\/h2>\s*/i, '');
  html = html.replace(/^\s*<h[234]>([\s\S]*?)<\/h[234]>\s*/, (m, inner) => (text(inner) === title.toLowerCase() ? '' : m));
  let jobTitle = '';
  if (kind === 'profiles') {
    // The role sits in a small heading straight after the name.
    html = html.replace(/^\s*<h[34]>([\s\S]*?)<\/h[34]>\s*/, (m, inner) => { jobTitle = decode(inner.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim(); return ''; });
    // The portrait is rendered by the template from `image`.
    html = html.replace(/<img src="\/wp-content\/uploads\/elementor\/thumbs\/[^>]+>\s*/g, '');
  }
  // D-17: a profile's title must carry the person's name. Where the live title does not, add it.
  let seoTitle = meta.title;
  const titleFixed = kind === 'profiles' && !seoTitle.toLowerCase().includes(title.split(' ')[0].toLowerCase());
  if (titleFixed) { seoTitle = `${title} | Nolan Family Law & Mediation`; titleFixes.push({ slug: item.slug, live: meta.title, now: seoTitle }); }
  let image = '';
  if (meta.image) { const u = new URL(meta.image, ORIGIN); if (u.pathname.startsWith('/wp-content/uploads/')) { uploads.add(u.pathname); image = u.pathname; } }
  const record = {
    slug: item.slug,
    path,
    wpId: item.id,
    title,
    seoTitle,
    description: meta.description,
    image,
    date: item.date,
    modified: item.modified,
    ...(kind === 'profiles' ? { jobTitle } : {}),
    html,
  };
  writeFileSync(`${outDir}/${kind}/${item.slug}.json`, JSON.stringify(record, null, 2) + '\n');
  index[kind].push({ slug: item.slug, path, title: record.title });
  process.stdout.write('.');
  await sleep(150);
}
console.log();
index.articles.sort((a, b) => a.slug.localeCompare(b.slug));
index.profiles.sort((a, b) => a.slug.localeCompare(b.slug));
writeFileSync(`${outDir}/index.json`, JSON.stringify(index, null, 2) + '\n');

console.log(`Copying ${uploads.size} referenced uploads…`);
let copied = 0, missing = [];
for (const p of uploads) {
  const dest = `${root}public${decodeURI(p)}`;
  if (existsSync(dest)) continue;
  const buf = await get(ORIGIN + p, 'buffer');
  if (!buf) { missing.push(p); continue; }
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buf); copied++;
}

console.log(`\nImported ${index.articles.length} articles and ${index.profiles.length} profiles. ${copied} uploads copied.`);
if (missing.length) console.warn(`Uploads that 404 on the live site (${missing.length}):\n  ` + missing.join('\n  '));
if (unresolved.length) {
  console.warn(`\nInternal links with no route (${unresolved.length}). The words were kept and the link removed:`);
  for (const u of unresolved) console.warn(`  ${u.from}: ${u.href}`);
}
if (titleFixes.length) { console.warn(`\nProfile titles that lacked the person's name (D-17), now "Name | Nolan Family Law & Mediation":`); for (const t of titleFixes) console.warn(`  ${t.slug}: was "${t.live}"`); }
writeFileSync(`${outDir}/import-report.json`, JSON.stringify({ importedAt: new Date().toISOString(), articles: index.articles.length, profiles: index.profiles.length, unresolvedLinks: unresolved, profileTitlesChanged: titleFixes, missingUploads: missing }, null, 2) + '\n');
