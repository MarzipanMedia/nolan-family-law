/**
 * Our people: /our-team/. Generated from the imported profiles, in the live page's order.
 * A generic version until the designed team grid arrives (LAUNCH-PLAN week 4). It keeps the
 * live title and meta description: this URL earns about 300 Google clicks a year (D-17).
 */
import type { PageModule } from '@/site/types';
import { url, profileKey } from '@/config/routes';
import { graph, webPageNode, breadcrumbNode } from '@/lib/schema';
import { PageHero, Breadcrumb } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import { getCarryOver, profileList } from '@/site/imported';
import { personBySlug } from '@/config/people';

const live = getCarryOver('team');
const title = live?.seoTitle || 'Our People | Nolan Family Law & Mediation';
const description = live?.description ?? '';

function Content() {
  const people = profileList();
  return (
    <>
      <PageHero eyebrow="Our people" title="Our people" lede="Experienced family lawyers and mediators in Sydney and Melbourne, and the team who support them." />
      <Breadcrumb trail={[{ key: 'home' }, { key: 'team' }]} />
      <section data-section="true" style={{ background: '#FEFDFB' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '88px 24px 104px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {people.map((p) => {
              const role = personBySlug(p.slug)?.jobTitle ?? p.jobTitle;
              return (
                <a key={p.slug} href={url(profileKey(p.slug))} data-card="true" data-reveal="true" style={{ display: 'flex', flexDirection: 'column', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', overflow: 'hidden', color: '#1A2E40' }}>
                  <div style={{ aspectRatio: '4 / 4.4', background: 'linear-gradient(180deg, #DCE9F0 0%, #E8E4DC 100%)', overflow: 'hidden' }}>
                    {p.image && <img src={p.image} alt={`${p.title}${role ? `, ${role}` : ''}`} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />}
                  </div>
                  <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '22px', lineHeight: 1.25 }}>{p.title}</span>
                    {role && <span style={{ fontSize: '14px', color: '#4A5A66' }}>{role}</span>}
                    <span data-arrow="true" aria-hidden="true" style={{ marginTop: '10px' }}>→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand office="sydney" />
    </>
  );
}

export const team: PageModule = {
  title,
  description,
  schema: (key) => graph(webPageNode(key, { title, description, type: 'CollectionPage' }), breadcrumbNode(key, ['home', key])),
  Content,
};
