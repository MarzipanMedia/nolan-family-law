/**
 * Site footer, identical on every page (DESIGN.md §5): Sydney, Melbourne, The firm, Offices.
 * No suburb links. Office details come from the office config, links from the routes file.
 */
import { url } from '@/config/routes';
import { officeList, type OfficeKey } from '@/config/offices';
import { footerColumns, legalLinks } from '@/config/nav';
import { PhoneLink } from './PhoneLink';
import { GoogleRatingLine } from './GoogleRating';

const heading = { fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C3D0DC' } as const;
const legal = { fontSize: '13px', color: '#B6C2CE' } as const;

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
    <footer data-screen-label="Footer" data-deep="true" style={{ background: '#1C2F40' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '76px 24px 44px', display: 'flex', flexWrap: 'wrap', gap: '44px 80px' }}>
        <div style={{ flex: '2 1 280px' }}>
          <img src="/images/nolan-logo.webp" alt="Nolan Family Law & Mediation" width={449} height={166} loading="lazy" decoding="async" style={{ display: 'block', height: '58px', width: 'auto', marginBottom: '22px', filter: 'brightness(0) invert(1)', opacity: 0.94 }} />
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#D2DAE2', maxWidth: '36ch', margin: 0 }}>Family law and mediation, with offices in Sydney and Melbourne.</p>
        </div>
        {footerColumns.map((col, i) => (
          <div key={col.heading} style={{ flex: i === 2 ? '1 1 160px' : '1 1 200px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ ...heading, marginBottom: '6px' }}>{col.heading}</div>
            {col.links.map((l) => (
              <a key={l.to} href={url(l.to)} style={{ color: '#E3E9EE', fontSize: '15px' }}>{l.label}</a>
            ))}
          </div>
        ))}
        <div style={{ flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {officeList.map((o) => (
            <div key={o.key}>
              <div style={{ ...heading, marginBottom: '8px' }}>{o.city} office</div>
              <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#D2DAE2' }}>
                {o.street}<br />{o.suburb} {o.state} {o.postcode}<br />
                <PhoneLink office={o.key} location="footer" position="footer" style={{ color: '#FFFFFF' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '22px 24px', borderTop: '1px solid rgba(195,208,220,0.22)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={legal}>© Nolan Family Law &amp; Mediation. All rights reserved.</span>
          <span style={legal}>Liability limited by a scheme approved under Professional Standards Legislation.</span>
          <span style={{ ...legal, maxWidth: '70ch' }}>{note}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 24px' }}>
          {legalLinks.map((l) => (
            <a key={l.to} href={url(l.to)} style={legal}>{l.label}</a>
          ))}
          <a href="https://www.marzipan.com.au" rel="nofollow" style={legal}>Website by Marzipan</a>
        </div>
      </div>
    </footer>
  );
}
