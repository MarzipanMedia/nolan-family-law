/**
 * Carry-over template (D-22). A page that has no new design yet launches here: its existing
 * WordPress copy, title tag and meta description, at its final URL, in the generic inner-page
 * layout (DESIGN.md §8). It is replaced in place when its design is built: add the page to
 * src/site/registry.ts and the designed version takes over at the same URL.
 */
import { abs, type City, type RouteKey } from '@/config/routes';
import { graph, webPageNode, breadcrumbNode, officeNode, officeId } from '@/lib/schema';
import { PageHero, Breadcrumb, Body, type CrumbItem } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import type { Imported } from '@/site/imported';

const trailFor = (key: RouteKey, city: City, name: string): CrumbItem[] => [
  { key: 'home' },
  ...(city && key !== 'sydneyHub' && key !== 'melbourneHub' ? [{ key: (city === 'melbourne' ? 'melbourneHub' : 'sydneyHub') as RouteKey, name: city === 'melbourne' ? 'Melbourne' : 'Sydney' }] : []),
  { key, name },
];

// WordPress set some headings in capitals. Same words, calmer case (DESIGN.md §1).
const calm = (t: string) => (t === t.toUpperCase() ? t.toLowerCase().replace(/(^|[\s(&-])([a-z])/g, (_, a, b) => a + b.toUpperCase()).replace(/\b(And|Of|In|The|For|To|A)\b/g, (w, _1, i) => (i === 0 ? w : w.toLowerCase())) : t);
const norm = (t: string) => t.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().toLowerCase();

export const carryOverMeta = (p: Imported) => ({ title: p.seoTitle || `${p.title} | Nolan Family Law & Mediation`, description: p.description });

export function carryOverSchema(key: RouteKey, p: Imported, city: City) {
  const title = carryOverMeta(p).title;
  return graph(
    webPageNode(key, { title, description: p.description, dateModified: p.modified.slice(0, 10), ...(city ? { about: officeId(city) } : {}) }),
    breadcrumbNode(key, trailFor(key, city, p.title).map((c) => (c.name ? { key: c.key, name: c.name } : c.key))),
    ...(city ? [officeNode(city)] : []),
  );
}

export function CarryOverTemplate({ routeKey, page, city }: { routeKey: RouteKey; page: Imported; city: City }) {
  const eyebrow = city === 'melbourne' ? 'Melbourne · Family law' : city === 'sydney' ? 'Sydney · Family law' : 'Nolan Family Law & Mediation';
  const heading = calm(page.h1 || page.title);
  // The page's own heading is the H1 above, so it is not repeated at the top of the body.
  const html = page.html.replace(/^\s*<h2>([\s\S]*?)<\/h2>\s*/, (m, inner) => (norm(inner) === heading.toLowerCase() ? '' : m));
  return (
    <>
      <PageHero eyebrow={eyebrow} title={heading} />
      <Breadcrumb trail={trailFor(routeKey, city, page.title)} />
      <Body>
        <div className="prose" data-carry-over={abs(routeKey)} dangerouslySetInnerHTML={{ __html: html }} />
      </Body>
      <CtaBand office={city ?? 'sydney'} />
    </>
  );
}
