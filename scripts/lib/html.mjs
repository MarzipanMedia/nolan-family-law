/** Small HTML helpers for the page checks (parse5, no browser needed). */
import { parse } from 'parse5';

export const parseHtml = (html) => parse(html);
export const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;
export function findAll(n, test, acc = []) { if (test(n)) acc.push(n); (n.childNodes ?? []).forEach((c) => findAll(c, test, acc)); if (n.content) findAll(n.content, test, acc); return acc; }
export const find = (n, test) => findAll(n, test)[0] ?? null;
const SKIP = new Set(['script', 'style', 'noscript', 'template', 'svg']);
const BLOCK = /^(div|p|section|article|aside|header|footer|nav|ul|ol|li|h[1-6]|table|tr|td|th|details|summary|figure|figcaption|blockquote|main|br|dd|dt)$/;
/** Visible-ish text of a node, skipping scripts, styles and anything matching `skip`. */
export function textOf(n, skip = () => false) {
  if (n.nodeName === '#text') return n.value;
  if (SKIP.has(n.tagName) || skip(n)) return '';
  const inner = (n.childNodes ?? []).map((c) => textOf(c, skip)).join('');
  return n.tagName && BLOCK.test(n.tagName) ? ` ${inner} ` : inner;
}
