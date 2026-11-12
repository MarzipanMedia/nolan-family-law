/**
 * Converts an approved HTML prototype (export/*.html) into page components.
 *
 *   node tools/convert-prototype.mjs <prototype.html> <page-folder> --office sydney|melbourne
 *
 * It writes src/site/pages/<page-folder>/content.tsx (the page's sections) and faq.ts
 * (the FAQ as data, for the FAQPage schema), and saves inlined images as WebP in public/images/.
 *
 * What it changes on the way through, so the build rules hold:
 *  - every internal link becomes url('<routeKey>') from the routes file (D-25);
 *  - every office phone link becomes <PhoneLink>, and office numbers and addresses in the
 *    copy come from the office config;
 *  - review notes, the notes toggle and scripts are dropped (they never ship);
 *  - cards that link to an article that is not live yet are hidden until it is (D-28);
 *  - the header, trust ribbon and footer are left out: the shared shell supplies them.
 *
 * For prototypes exported as a bundle (homepage, child custody) pass the browser-rendered
 * HTML instead: see tools/render-bundled-prototype.cjs.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';
import sharp from 'sharp';
import { routes } from '../src/config/routes.ts';
import { readMap, normalisePath } from '../scripts/lib/csv.mjs';

const [input, pageDir, ...rest] = process.argv.slice(2);
const opt = (n, d) => { const i = rest.indexOf(`--${n}`); return i === -1 ? d : rest[i + 1]; };
const officeKey = opt('office', 'sydney');
if (!input || !pageDir) { console.error('usage: convert-prototype.mjs <html> <page-folder> --office sydney|melbourne'); process.exit(1); }

const root = new URL('..', import.meta.url).pathname;
const outDir = `${root}src/site/pages/${pageDir}`;
const imgDir = `${root}public/images`;
mkdirSync(outDir, { recursive: true }); mkdirSync(imgDir, { recursive: true });

// ── Links → route keys ───────────────────────────────────────────────────────────────────
const byB = new Map(Object.entries(routes).map(([k, d]) => [d.b, k]));
const byA = new Map(Object.entries(routes).map(([k, d]) => [d.a, k]));
const redirB = Object.fromEntries(readMap('B').filter((r) => r.action === '301').map((r) => [r.path, r.target]));
// Paths the prototypes use that are not real URLs (BUILD-NOTES gotchas; plan item 7).
const ALIASES = { '/our-people/': 'team', '/collaborative-family-law/': 'sydneyCollaborative', '/disclaimer/': 'disclaimer' };
const usedRoutes = new Set();
const warnings = [];
function routeKeyFor(href) {
  const [rawPath, hash] = href.split('#');
  const path = normalisePath(rawPath.split('?')[0]);
  const key = ALIASES[path] ?? byB.get(path) ?? byB.get(redirB[path]) ?? byA.get(path);
  if (!key) { warnings.push(`no route for internal link ${href}`); return null; }
  usedRoutes.add(key);
  return { key, hash };
}

// ── Office details in copy ───────────────────────────────────────────────────────────────
const PHONES = { '(02) 8014 5885': 'sydney', '(03) 9088 8889': 'melbourne' };
const TEL = { 'tel:0280145885': 'sydney', 'tel:+61280145885': 'sydney', 'tel:0390888889': 'melbourne', 'tel:+61390888889': 'melbourne' };
const COPY_TOKENS = [
  ['Suite 3, Level 22, 25 Bligh Street, Sydney NSW 2000', 'offices.sydney.addressDisplay'],
  ['385 Bourke Street, Melbourne VIC 3000', 'offices.melbourne.addressDisplay'],
  ['25 Bligh Street', 'offices.sydney.streetShort'],
  ['385 Bourke Street', 'offices.melbourne.streetShort'],
  ...Object.entries(PHONES).map(([n, o]) => [n, `offices.${o}.phoneDisplay`]),
];
let usesOffices = false;
/** Splits text into literal parts and office-config expressions. */
function tokenise(text) {
  let parts = [text];
  for (const [needle, expr] of COPY_TOKENS) {
    parts = parts.flatMap((p) => {
      if (typeof p !== 'string' || !p.includes(needle)) return [p];
      usesOffices = true;
      return p.split(needle).flatMap((seg, i) => (i === 0 ? [seg] : [{ expr }, seg]));
    });
  }
  return parts.filter((p) => p !== '');
}
const lit = (s) => JSON.stringify(s);
/** A JS expression for a string that may contain office details. */
function stringExpr(text) {
  const parts = tokenise(text);
  if (parts.every((p) => typeof p === 'string')) return null;
  return '`' + parts.map((p) => (typeof p === 'string' ? p.replace(/[`\\$]/g, '\\$&') : '${' + p.expr + '}')).join('') + '`';
}

// ── Images ───────────────────────────────────────────────────────────────────────────────
const slug = (s) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'image';
const imageJobs = [];
function saveImage(dataUri, alt) {
  const m = dataUri.match(/^data:([^;]+);base64,(.+)$/s);
  if (!m) return null;
  const buf = Buffer.from(m[2], 'base64');
  const hash = createHash('sha1').update(buf).digest('hex').slice(0, 8);
  const svg = m[1].includes('svg');
  // One file per image, however many pages or alt texts use it.
  const existing = imageJobs.find((j) => j.hash === hash)?.name ?? readdirSync(imgDir).find((f) => f.endsWith(`-${hash}.webp`) || f.endsWith(`-${hash}.svg`));
  const name = existing ?? `${slug(alt || pageDir)}-${hash}.${svg ? 'svg' : 'webp'}`;
  const job = { name, hash, buf, svg, width: 0, height: 0 };
  imageJobs.push(job);
  return job;
}
async function flushImages() {
  for (const job of imageJobs) {
    const dest = `${imgDir}/${job.name}`;
    if (job.svg) { if (!existsSync(dest)) writeFileSync(dest, job.buf); continue; }
    const img = sharp(job.buf);
    const meta = await img.metadata();
    const width = Math.min(meta.width, 1600);
    const out = await img.resize({ width }).webp({ quality: 80 }).toBuffer({ resolveWithObject: true });
    job.width = out.info.width; job.height = out.info.height;
    writeFileSync(dest, out.data);
  }
}

// ── HTML → JSX ───────────────────────────────────────────────────────────────────────────
const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;
const has = (n, name) => n.attrs?.some((a) => a.name === name);
const textOf = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(textOf).join(''));
const BLOCK = new Set('div p section article header footer nav ul ol li h1 h2 h3 h4 h5 h6 table thead tbody tr td th form fieldset legend details summary figure figcaption blockquote aside main option select textarea br hr dl dt dd'.split(' '));
const VOID = new Set('img input br hr meta link source area col embed track wbr'.split(' '));
const ATTR = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete', srcset: 'srcSet', maxlength: 'maxLength', colspan: 'colSpan', rowspan: 'rowSpan', datetime: 'dateTime', fetchpriority: 'fetchPriority', inputmode: 'inputMode', readonly: 'readOnly', novalidate: 'noValidate', crossorigin: 'crossOrigin', 'xlink:href': 'xlinkHref' };
const BOOL = new Set(['hidden', 'required', 'disabled', 'open', 'multiple', 'readOnly', 'noValidate', 'autoFocus']);
const DROP_ATTR = /^(data-in|data-settled|data-scrolled|data-dc-.*|data-sc-.*|data-props|data-resource-id|on[a-z]+|xmlns:.*|contenteditable|data-notes-toggle)$/;

function styleObject(css) {
  const decls = [];
  let depth = 0, quote = '', cur = '';
  for (const ch of css) {
    if (quote) { if (ch === quote) quote = ''; cur += ch; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === '(') depth++; if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { decls.push(cur); cur = ''; } else cur += ch;
  }
  decls.push(cur);
  const props = [];
  for (const d of decls) {
    const i = d.indexOf(':'); if (i === -1) continue;
    let prop = d.slice(0, i).trim(); let value = d.slice(i + 1).trim();
    if (!prop || !value) continue;
    if (prop === 'transition-delay') continue; // left behind by the reveal script
    value = value.replace(/'Playfair Display',\s*serif/g, 'var(--font-serif)').replace(/'Open Sans',\s*sans-serif/g, 'var(--font-sans)').replace(/"Playfair Display",\s*serif/g, 'var(--font-serif)').replace(/"Open Sans",\s*sans-serif/g, 'var(--font-sans)');
    // Browser-rendered prototypes report colours as rgb(); keep the design tokens' hex form.
    value = value.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, (_, r, g, b) => '#' + [r, g, b].map((n) => (+n).toString(16).padStart(2, '0')).join('').toUpperCase());
    const key = prop.startsWith('--') ? lit(prop) : prop.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    props.push(`${key}: ${lit(value)}`);
  }
  return props.length ? `{{ ${props.join(', ')} }}` : null;
}

let section = '';
let inHiddenCard = 0;
const out = [];
const pad = (d) => '  '.repeat(d);

function emitText(node, depth, siblings, index) {
  const raw = node.value;
  const prev = siblings[index - 1], next = siblings[index + 1];
  const inlineSide = (s) => s && !(s.tagName && BLOCK.has(s.tagName));
  const collapsed = raw.replace(/\s+/g, ' ');
  if (collapsed.trim() === '') { if (inlineSide(prev) && inlineSide(next)) out.push(`${pad(depth)}{" "}`); return; }
  let text = collapsed.trim();
  const lead = /^\s/.test(collapsed) && inlineSide(prev), trail = /\s$/.test(collapsed) && inlineSide(next);
  for (const part of tokenise((lead ? ' ' : '') + text + (trail ? ' ' : ''))) {
    out.push(pad(depth) + (typeof part === 'string' ? `{${lit(part)}}` : `{${part.expr}}`));
  }
}

function emit(node, depth, siblings = [], index = 0) {
  if (node.nodeName === '#text') return emitText(node, depth, siblings, index);
  if (node.nodeName === '#comment' || !node.tagName) return;
  let tag = node.tagName;
  if (tag === 'script' || tag === 'style' || tag === 'template' || tag === 'x-dc' || tag === 'helmet') return;
  if (has(node, 'data-review-note') || has(node, 'data-notes-toggle')) return;
  if (attr(node, 'role') === 'group' && attr(node, 'aria-label') === 'Review options') return; // design-tool controls
  if (/quick.?exit|quickly leave/i.test(attr(node, 'aria-label') ?? '') || (tag === 'a' || tag === 'button') && /quick exit/i.test(textOf(node)) || /quick.?exit/i.test(attr(node, 'aria-label') ?? '') || /quick.?exit/i.test(attr(node, 'data-action') ?? '') || (tag === 'a' || tag === 'button') && /^\s*quick exit/i.test(textOf(node))) { warnings.push('dropped a quick exit control (D-07)'); return; }

  // Yellow review notes are for us and never ship. Some prototypes mark them only by style.
  const isNote = (n) => has(n, 'data-review-note') || /#FFF4D6|rgb\(255, 244, 214\)/i.test(attr(n, 'style') ?? '');
  if (isNote(node)) return;
  const elKids = (node.childNodes ?? []).filter((c) => c.tagName);
  if (elKids.length && elKids.every(isNote) && textOf(node).trim() === elKids.map(textOf).join('').trim()) return; // a wrapper holding only notes

  const label = attr(node, 'data-screen-label');
  if (label) { section = label; out.push('', `${pad(depth)}{/* ── ${label} ── */}`); }

  const props = [];
  let open = tag, close = tag, wrapStart = '', wrapEnd = '';
  const href = attr(node, 'href');

  // Links
  if (tag === 'a' && href) {
    if (TEL[href]) {
      open = close = 'PhoneLink';
      const position = attr(node, 'data-cta-position') ?? (section === 'Hero' ? 'hero' : section === 'Consultation CTA' ? 'contact' : 'body');
      props.push(`office="${TEL[href]}"`, 'location="body"', `position="${position}"`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      const r = routeKeyFor(href);
      if (r) {
        props.push(`href={url(${lit(r.key)}${r.hash ? `, ${lit(r.hash)}` : ''})}`);
        const def = routes[r.key];
        if (def.kind === 'article' && def.status !== 'live' && has(node, 'data-card')) { wrapStart = `{isLive(${lit(r.key)}) && (`; wrapEnd = ')}'; usedIsLive = true; }
      } else props.push(`href=${lit(href)}`);
    } else if (/^\.\//.test(href)) {
      warnings.push(`relative demo link ${href}`); props.push('href="#"');
    } else {
      props.push(`href=${lit(href)}`);
      if (/^https?:/.test(href) && !has(node, 'rel')) props.push('rel="noopener"');
    }
  }
  if (tag === 'form') { open = close = 'EnquiryForm'; props.push(`office="${officeKey}"`); usesForm = true; }

  let imgJob = null;
  for (const a of node.attrs ?? []) {
    let { name, value } = a;
    if (DROP_ATTR.test(name)) continue;
    if (name === 'href' && tag === 'a') continue;
    if (name === 'aria-label' && open === 'PhoneLink') continue; // PhoneLink writes its own from the config
    if (name === 'data-office-phone') continue;
    if (name === 'class' && /^(sc-|dc-|scp\d+$)/.test(value)) continue; // design-tool classes
    if (name === 'style') { const s = styleObject(value); if (s) props.push(`style=${s}`); continue; }
    if (name === 'src' && tag === 'img' && value.startsWith('data:')) {
      imgJob = saveImage(value, attr(node, 'alt')); props.push(`src="/images/${imgJob.name}"`, `__SIZE_${imageJobs.length - 1}__`); continue;
    }
    if (name === 'checked') { props.push('defaultChecked'); continue; }
    if (name === 'selected') continue;
    if (name === 'value' && tag === 'input' && !['radio', 'checkbox', 'hidden', 'submit'].includes(attr(node, 'type'))) { props.push(`defaultValue=${lit(value)}`); continue; }
    if (name === 'data-enquiry-form') continue;
    // "pickFees" and friends pre-select a topic in the enquiry form (SiteBehaviour).
    if (name === 'data-action' && /^pick[A-Z]/.test(value)) { props.push(`data-pick-topic="${value.slice(4).toLowerCase()}"`); continue; }
    let jsx = ATTR[name] ?? name;
    if (!/^(data-|aria-)/.test(jsx) && jsx.includes('-')) jsx = jsx.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (BOOL.has(jsx)) { props.push(jsx); continue; }
    if (['rows', 'cols', 'colSpan', 'rowSpan', 'tabIndex', 'maxLength', 'size'].includes(jsx) && /^-?\d+$/.test(value)) { props.push(`${jsx}={${value}}`); continue; }
    if (tag === 'img' && imgJob && (name === 'width' || name === 'height')) continue;
    const expr = stringExpr(value);
    props.push(expr ? `${jsx}={${expr}}` : `${jsx}=${lit(value)}`);
  }
  // Form fields need names so the enquiry can be delivered.
  if (['input', 'textarea'].includes(tag) && !has(node, 'name')) {
    const type = attr(node, 'type');
    props.push(`name="${tag === 'textarea' ? 'message' : type === 'tel' ? 'phone' : type === 'email' ? 'email' : 'name'}"`);
  }
  if (tag === 'img') {
    if (!has(node, 'alt')) props.push('alt=""');
    const hero = has(node, 'data-hero-img') || section === 'Hero';
    if (!has(node, 'loading')) props.push(hero ? 'fetchPriority="high"' : 'loading="lazy"');
    if (!has(node, 'decoding')) props.push('decoding="async"');
  }

  const kids = (node.childNodes ?? []);
  const head = `${pad(depth)}${wrapStart}<${open}${props.length ? ' ' + props.join(' ') : ''}`;
  if (VOID.has(tag) || kids.length === 0) { out.push(`${head} />${wrapEnd}`); return; }
  out.push(`${head}>`);
  kids.forEach((k, i) => emit(k, depth + 1, kids, i));
  out.push(`${pad(depth)}</${close}>${wrapEnd}`);
}

let usedIsLive = false, usesForm = false;

// ── Find the page body ───────────────────────────────────────────────────────────────────
const doc = parse(readFileSync(input, 'utf8'));
const find = (n, test) => { if (test(n)) return n; for (const c of n.childNodes ?? []) { const r = find(c, test); if (r) return r; } return null; };
const findAll = (n, test, acc = []) => { if (test(n)) acc.push(n); (n.childNodes ?? []).forEach((c) => findAll(c, test, acc)); return acc; };
const rootEl = find(doc, (n) => has(n, 'data-root'));
if (!rootEl) { console.error('No [data-root] element found'); process.exit(1); }

const SKIP_LABELS = new Set(['Navigation', 'Trust ribbon footer', 'Footer']);
const isShell = (n) => SKIP_LABELS.has(attr(n, 'data-screen-label')) || has(n, 'data-phone-strip') || has(n, 'data-show-top') || has(n, 'data-nav') || n.tagName === 'footer' || n.tagName === 'header' && has(n, 'data-nav');
// The body is the labelled sections' common parent; walk down while there is a single wrapper.
let container = rootEl;
for (;;) {
  const els = container.childNodes.filter((c) => c.tagName);
  if (els.some((c) => has(c, 'data-screen-label'))) break;
  const next = els.find((c) => find(c, (n) => has(n, 'data-screen-label')));
  if (!next) break; container = next;
}
const bodyNodes = container.childNodes.filter((c) => c.tagName && !isShell(c));
bodyNodes.forEach((n, i) => emit(n, 2, bodyNodes, i));

// ── FAQ as data ──────────────────────────────────────────────────────────────────────────
const faqSection = find(rootEl, (n) => attr(n, 'data-screen-label') === 'FAQ');
const faq = [];
if (faqSection) {
  for (const d of findAll(faqSection, (n) => n.tagName === 'details')) {
    const summary = d.childNodes.find((c) => c.tagName === 'summary');
    const strip = (n) => (has(n, 'data-faq-plus') || has(n, 'data-review-note') || attr(n, 'aria-hidden') === 'true' ? '' : n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(strip).join(n.tagName && BLOCK.has(n.tagName) ? ' ' : ''));
    const q = strip(summary).replace(/\s+/g, ' ').trim();
    const a = d.childNodes.filter((c) => c !== summary).map(strip).join(' ').replace(/\s+/g, ' ').trim();
    faq.push({ q, a });
  }
}

await flushImages();
let jsx = out.join('\n').replace(/__SIZE_(\d+)__/g, (_, i) => { const j = imageJobs[+i]; return j.width ? `width={${j.width}} height={${j.height}}` : ''; });

const imports = [
  `import { url${usedIsLive ? ', isLive' : ''} } from '@/config/routes';`,
  usesOffices || /offices\./.test(jsx) ? `import { offices } from '@/config/offices';` : '',
  /<PhoneLink/.test(jsx) ? `import { PhoneLink } from '@/components/PhoneLink';` : '',
  usesForm ? `import { EnquiryForm } from '@/components/EnquiryForm';` : '',
].filter(Boolean).join('\n');

writeFileSync(`${outDir}/content.tsx`, `/**
 * Page sections for "${pageDir}", converted from export/${input.split('/').pop().replace('.rendered', '')}
 * by tools/convert-prototype.mjs and then maintained by hand. The copy is the approved copy:
 * change wording only with Ben's sign-off. URLs come from the routes file and office details
 * from the office config, never from this file.
 */
${imports}

export function Content() {
  return (
    <>
${jsx}
    </>
  );
}
`);

const faqExpr = (s) => stringExpr(s) ?? lit(s);
writeFileSync(`${outDir}/faq.ts`, `/** The page's FAQ as data, read off the visible FAQ so the FAQPage schema always matches it. */
${faq.some((f) => stringExpr(f.q) || stringExpr(f.a)) ? `import { offices } from '@/config/offices';\n` : ''}
export const faq: Array<{ q: string; a: string }> = [
${faq.map((f) => `  { q: ${faqExpr(f.q)}, a: ${faqExpr(f.a)} },`).join('\n')}
];
`);

console.log(`${pageDir}: ${bodyNodes.length} top-level blocks, ${imageJobs.length} images, ${faq.length} FAQs, routes used: ${[...usedRoutes].join(', ')}`);
for (const w of new Set(warnings)) console.warn('  ! ' + w);
