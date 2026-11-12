/**
 * The article template: every imported post, at its original URL, in the inner-page layout
 * (LAUNCH-PLAN 1c; DESIGN.md §8). The title tag and meta description are the live ones.
 */
import { abs, type City, type RouteKey } from '@/config/routes';
import { offices } from '@/config/offices';
import { graph, breadcrumbNode } from '@/lib/schema';
import { PageHero, Breadcrumb, Body } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import type { Imported } from '@/site/imported';

const monthYear = (iso: string) => new Date(iso).toLocaleDateString('en-AU', { month: 'long', year: 'numeric', timeZone: 'Australia/Sydney' });

export const articleMeta = (a: Imported) => ({ title: a.seoTitle || `${a.title} | Nolan Family Law & Mediation`, description: a.description });

export function articleSchema(key: RouteKey, a: Imported) {
  return graph(
    {
      '@type': 'Article',
      '@id': abs(key, 'article'),
      headline: a.title,
      ...(a.description ? { description: a.description } : {}),
      url: abs(key),
      mainEntityOfPage: abs(key),
      inLanguage: 'en-AU',
      datePublished: a.date.slice(0, 10),
      dateModified: a.modified.slice(0, 10),
      ...(a.image ? { image: abs('home').replace(/\/$/, '') + a.image } : {}),
      author: { '@type': 'Organization', name: 'Nolan Family Law & Mediation', url: abs('home') },
      publisher: { '@type': 'Organization', name: 'Nolan Family Law & Mediation', url: abs('home') },
      breadcrumb: { '@id': abs(key, 'breadcrumb') },
    },
    breadcrumbNode(key, ['home', { key: 'resources', name: 'Resources' }, { key, name: a.title }]),
  );
}

export function ArticleTemplate({ routeKey, article, city }: { routeKey: RouteKey; article: Imported; city: City }) {
  const office = offices[city ?? 'sydney'];
  return (
    <>
      <PageHero eyebrow={city === 'melbourne' ? 'Melbourne · Family law guide' : 'Family law guide'} title={article.title} />
      <Breadcrumb trail={[{ key: 'home' }, { key: routeKey, name: article.title }]} meta={<span>Updated {monthYear(article.modified)}</span>} />
      <Body>
        <article className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />
      </Body>
      <CtaBand office={office.key} />
    </>
  );
}
