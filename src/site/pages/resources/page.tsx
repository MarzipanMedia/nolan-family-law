/**
 * Resources: /resources/. The article index (LAUNCH-PLAN section 4), generated from the
 * imported articles, newest first. Keeps the live title and meta description.
 */
import type { PageModule } from '@/site/types';
import { url, articleKey } from '@/config/routes';
import { graph, webPageNode, breadcrumbNode } from '@/lib/schema';
import { PageHero, Breadcrumb } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import { getCarryOver, articleList } from '@/site/imported';

const live = getCarryOver('resources');
const title = live?.seoTitle || 'Family Law Resources | Nolan Family Law & Mediation';
const description = live?.description ?? '';

function Content() {
  return (
    <>
      <PageHero eyebrow="Resources" title={live?.h1 || 'Family law guides and articles'} lede="Plain-English guides to separation, parenting, property and mediation, written by our family lawyers." />
      <Breadcrumb trail={[{ key: 'home' }, { key: 'resources' }]} />
      <section data-section="true" style={{ background: '#FEFDFB' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '88px 24px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
            {articleList().map((a) => (
              <a key={a.slug} href={url(articleKey(a.slug))} data-card="true" data-reveal="true" style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '34px', color: '#1A2E40' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '22px', lineHeight: 1.3, textWrap: 'pretty' }}>{a.title}</span>
                {a.description && <span style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A5A66' }}>{a.description}</span>}
                <span data-arrow="true" aria-hidden="true" style={{ marginTop: 'auto', paddingTop: '8px' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand office="sydney" />
    </>
  );
}

export const resources: PageModule = {
  title,
  description,
  schema: (key) => graph(webPageNode(key, { title, description, type: 'CollectionPage' }), breadcrumbNode(key, ['home', key])),
  Content,
};
