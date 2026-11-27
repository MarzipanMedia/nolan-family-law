/**
 * Site footer, identical on every page (DESIGN.md §5): a sign-off and both offices, then
 * Sydney, Melbourne and The firm, then the legal row. No suburb links. Office details come
 * from the office config, links from the routes file.
 *
 * The footer sits beneath the page, which lifts off it like a curtain (DESIGN.md §6). The
 * sticky pin and the content drift are set up by SiteBehaviour; without scripts the footer
 * is an ordinary block at the end of the page.
 */
import { url } from '@/config/routes';
import { officeList, type OfficeKey } from '@/config/offices';
import { footerColumns, legalLinks } from '@/config/nav';
import { PhoneLink } from './PhoneLink';
import { GoogleRatingLine } from './GoogleRating';

const heading = { fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C3D0DC' } as const;
const legal = { fontSize: '13px' } as const;

export function TrustRibbon({ office }: { office: OfficeKey }) {
  return (
    <section data-screen-label="Trust ribbon footer" style={{ background: '#F8F6F2', borderTop: '1px solid #E8E4DC' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '26px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px 44px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A6D8C', textAlign: 'center' }}>Doyle&apos;s Guide recognised</span>
        <GoogleRatingLine office={office} style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A2E40', textAlign: 'center' }} />
      </div>
    </section>
  );
}

export function Footer({ note }: { note: string }) {
  return (
    <footer data-screen-label="Footer" data-deep="true" data-site-footer="">
      <div data-footer-inner="">
        {/* Sign-off and offices */}
        <div data-footer-top="" style={{ maxWidth: '1240px', margin: '0 auto', padding: '88px 24px 60px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.08, letterSpacing: '-0.01em', color: '#F3F0EA', margin: 0, maxWidth: '13ch', textWrap: 'balance' }}>
              When you&rsquo;re ready, we&rsquo;re here.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#C9D4DE', maxWidth: '38ch', margin: '22px 0 0' }}>Family law and mediation, with offices in Sydney and Melbourne.</p>
          </div>
          <div data-footer-offices="">
            {officeList.map((o) => (
              <div key={o.key}>
                <div style={{ ...heading, marginBottom: '12px' }}>{o.city} office</div>
                <PhoneLink office={o.key} location="footer" position="footer" data-flink="" style={{ display: 'inline-block', fontFamily: 'var(--font-serif)', fontSize: '24px', lineHeight: 1.2, color: '#FFFFFF' }} />
                <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#D2DAE2', marginTop: '10px' }}>
                  {o.street}<br />{o.suburb} {o.state} {o.postcode}
                </div>
                <a href={o.mapUrl} rel="noopener" data-flink="" style={{ display: 'inline-block', marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>
                  Get directions <span data-arrow="true" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Logo and links */}
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div data-footer-links="" style={{ borderTop: '1px solid rgba(195,208,220,0.18)', padding: '56px 0 52px' }}>
            <div>
              <img src="/images/nolan-logo.webp" alt="Nolan Family Law & Mediation" width={449} height={166} loading="lazy" decoding="async" style={{ display: 'block', height: '52px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
            </div>
            {footerColumns.map((col) => (
              <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ ...heading, marginBottom: '6px' }}>{col.heading}</div>
                {col.links.map((l) => (
                  <a key={l.to} href={url(l.to)} data-flink="" style={{ fontSize: '15px' }}>{l.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div data-footer-legal="" style={{ borderTop: '1px solid rgba(195,208,220,0.18)', padding: '24px 0 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px 40px', color: '#B6C2CE' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={legal}>© Nolan Family Law &amp; Mediation. All rights reserved.</span>
              <span style={legal}>Liability limited by a scheme approved under Professional Standards Legislation.</span>
              <span style={{ ...legal, maxWidth: '70ch' }}>{note}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '8px 24px' }}>
              {legalLinks.map((l) => (
                <a key={l.to} href={url(l.to)} data-flink="" data-quiet="" style={legal}>{l.label}</a>
              ))}
              <a href="https://www.marzipan.com.au" rel="nofollow" data-flink="" data-quiet="" style={legal}>Website by Marzipan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
