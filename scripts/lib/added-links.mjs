/**
 * Links added to imported articles during the import (D-12 pattern), so they survive a
 * re-import. Applied by scripts/import-wordpress.mjs after each article is cleaned.
 *
 * Each entry either wraps words already in the article (`wrap`), or inserts one new paragraph
 * after the paragraph that starts with `after` (`insert`, for articles without the words).
 * Links use route tokens ("route:<key>"), resolved through the routes file (D-25).
 * Applying an entry twice changes nothing. If an entry can no longer be placed (the article
 * changed in WordPress), it is reported, never guessed.
 */

export const ADDED_LINKS = {
  // D-58: each divorce article links to /sydney/divorce-lawyer/ with the anchor "divorce lawyers in Sydney".
  'your-essential-checklist-when-getting-a-divorce': [
    { to: 'sydneyDivorce', anchor: 'divorce lawyers in Sydney', wrap: 'Nolan Lawyers are experienced divorce lawyers in Sydney, NSW' },
  ],
  'the-divorce-process-explained': [
    {
      to: 'sydneyDivorce', anchor: 'divorce lawyers in Sydney',
      after: 'If you want to apply for maintenance for yourself or a division of property',
      insert: 'Our page for {link} explains how we help with the application and with everything a divorce leaves open.',
    },
  ],
  '11-questions-to-ask-your-divorce-lawyer-at-your-first-meeting': [
    {
      to: 'sydneyDivorce', anchor: 'divorce lawyers in Sydney',
      after: 'You deserve a genuinely caring and empathetic divorce law team',
      insert: 'Our page for {link} explains how we help with the application and with everything a divorce leaves open.',
    },
  ],
};

/** Returns { html, missed }: the article with its added links, and any entries that could not be placed. */
export function addLinks(slug, html) {
  const missed = [];
  for (const e of ADDED_LINKS[slug] ?? []) {
    const link = `<a href="route:${e.to}">${e.anchor}</a>`;
    if (html.includes(link)) continue;
    if (e.wrap) {
      const i = html.indexOf(e.wrap);
      const j = i === -1 ? -1 : e.wrap.indexOf(e.anchor);
      if (j === -1) { missed.push({ slug, ...e }); continue; }
      html = html.slice(0, i + j) + link + html.slice(i + j + e.anchor.length);
    } else {
      const start = html.indexOf(`<p>${e.after}`);
      const end = start === -1 ? -1 : html.indexOf('</p>', start);
      if (end === -1) { missed.push({ slug, ...e }); continue; }
      const at = end + '</p>'.length;
      html = html.slice(0, at) + `\n<p>${e.insert.replace('{link}', link)}</p>` + html.slice(at);
    }
  }
  return { html, missed };
}
