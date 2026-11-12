/**
 * The one page route. Which URLs exist, and what each serves, comes from the routes file
 * (D-25), so switching URL_MODE moves every page with no file renamed.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allRoutes, routeForPath, abs, type RouteKey } from '@/config/routes';
import { pages } from '@/site/registry';
import { PageShell } from '@/components/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { getArticle, getProfile, getCarryOver } from '@/site/imported';
import { CarryOverTemplate, carryOverMeta, carryOverSchema } from '@/site/templates/CarryOverTemplate';
import { ArticleTemplate, articleMeta, articleSchema } from '@/site/templates/ArticleTemplate';
import { ProfileTemplate, profileMeta, profileSchema } from '@/site/templates/ProfileTemplate';

export const dynamicParams = false;
// Pages are static; the Google rating is refreshed once a day.
export const revalidate = 86400;

type Params = { slug?: string[] };
const pathOf = (p: Params) => '/' + (p.slug?.length ? p.slug.join('/') + '/' : '');

function resolve(path: string) {
  const hit = routeForPath(path);
  if (!hit || hit.def.status !== 'live') return null;
  const key = hit.key as RouteKey;
  if (key.startsWith('article:')) { const a = getArticle(key.slice(8)); return a ? { ...hit, article: a } : null; }
  if (key.startsWith('profile:')) { const p = getProfile(key.slice(8)); return p ? { ...hit, profile: p } : null; }
  const page = pages[key as keyof typeof pages];
  if (page) return { ...hit, page };
  // No design yet: serve the page carried over from WordPress (D-22).
  const carry = getCarryOver(key);
  return carry ? { ...hit, carry } : null;
}

export function generateStaticParams(): Params[] {
  return allRoutes().filter((r) => resolve(r.path)).map((r) => ({ slug: r.path.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const hit = resolve(pathOf(await params));
  if (!hit) return {};
  const meta = 'page' in hit ? { title: hit.page.title, description: hit.page.description } : 'carry' in hit ? carryOverMeta(hit.carry) : 'article' in hit ? articleMeta(hit.article) : profileMeta(hit.profile);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: abs(hit.key) },
    robots: hit.def.indexable ? undefined : { index: false, follow: true },
    openGraph: { title: meta.title, description: meta.description, url: abs(hit.key), siteName: 'Nolan Family Law & Mediation', locale: 'en_AU', type: 'website' },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const path = pathOf(await params);
  const hit = resolve(path);
  if (!hit) notFound();
  const key = hit.key as RouteKey;
  if ('page' in hit) {
    const { Content, schema, menuCta } = hit.page;
    return (
      <PageShell city={hit.def.city} currentPath={path} menuCta={menuCta}>
        <JsonLd data={schema(key)} />
        <Content />
      </PageShell>
    );
  }
  if ('carry' in hit) {
    return (
      <PageShell city={hit.def.city} currentPath={path}>
        <JsonLd data={carryOverSchema(key, hit.carry, hit.def.city)} />
        <CarryOverTemplate routeKey={key} page={hit.carry} city={hit.def.city} />
      </PageShell>
    );
  }
  if ('article' in hit) {
    return (
      <PageShell city={hit.def.city} currentPath={path}>
        <JsonLd data={articleSchema(key, hit.article)} />
        <ArticleTemplate routeKey={key} article={hit.article} city={hit.def.city} />
      </PageShell>
    );
  }
  return (
    <PageShell city={hit.def.city} currentPath={path}>
      <JsonLd data={profileSchema(key, hit.profile)} />
      <ProfileTemplate routeKey={key} profile={hit.profile} city={hit.def.city} />
    </PageShell>
  );
}
