/**
 * Contact: /contact/. A generic version until the designed page arrives (LAUNCH-PLAN week 5):
 * both offices from the office config, then the enquiry form. Keeps the live title and meta
 * description. No fees (D-02).
 */
import type { PageModule } from '@/site/types';
import { officeList } from '@/config/offices';
import { graph, webPageNode, breadcrumbNode, officeNode } from '@/lib/schema';
import { PageHero, Breadcrumb } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import { PhoneLink } from '@/components/PhoneLink';
import { getCarryOver } from '@/site/imported';

const live = getCarryOver('contact');
const title = live?.seoTitle || 'Contact | Nolan Family Law & Mediation';
const description = live?.description ?? '';

function Content() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us" lede="Call the office nearest you, or send a confidential enquiry and we will come back to you within one business day." />
      <Breadcrumb trail={[{ key: 'home' }, { key: 'contact' }]} />
      <section data-section="true" style={{ background: '#FEFDFB' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '88px 24px 104px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
          {officeList.map((o) => (
            <div key={o.key} data-reveal="true" style={{ background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '34px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C' }}>{o.city} office</div>
              <PhoneLink office={o.key} location="body" position="contact-card" style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', color: '#1A2E40' }} />
              <address style={{ fontStyle: 'normal', fontSize: '16px', lineHeight: 1.65, color: '#2C3E50' }}>{o.street}<br />{o.suburb} {o.state} {o.postcode}</address>
              <a href={o.mapUrl} rel="noopener" style={{ fontSize: '15px', fontWeight: 600 }}>Open in Google Maps <span data-arrow="true" aria-hidden="true">→</span></a>
            </div>
          ))}
        </div>
      </section>
      <CtaBand office="sydney" />
    </>
  );
}

export const contact: PageModule = {
  title,
  description,
  schema: (key) => graph(webPageNode(key, { title, description, type: 'ContactPage' }), breadcrumbNode(key, ['home', key]), officeNode('sydney'), officeNode('melbourne')),
  Content,
};
