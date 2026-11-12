/**
 * Site header, identical on every page. Reference: export/melbourne-family-law.html.
 *
 * Header phone (D-30): the local office leads, from the office config.
 *   ≥1321px   a 36px strip above the sticky header (local office first, other city second)
 *   901–1320  a phone link beside "Talk to us"
 *   ≤900      a Call button beside Menu (icon only under 381px)
 * The breakpoints live in globals.css. Keep "Talk to us" short: the bar overflows at 1440px
 * if the button grows or the phone moves inline.
 */
import { url, type City } from '@/config/routes';
import { leadOffice, otherOffice } from '@/config/offices';
import { mainNav } from '@/config/nav';
import { PhoneLink } from './PhoneLink';
import { PhoneIcon } from './icons';

interface Props {
  city: City;
  currentPath: string;
  /** Label for the button at the foot of the mobile menu. */
  menuCta?: string;
}

const navLink = { color: '#2C3E50', fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' } as const;
const menuLink = { display: 'flex', alignItems: 'center', minHeight: '56px', fontSize: '17px', fontWeight: 500, color: '#2C3E50', borderBottom: '1px solid #E8E4DC' } as const;

export function Header({ city, currentPath, menuCta = 'Talk to us' }: Props) {
  const lead = leadOffice(city);
  const other = otherOffice(lead);
  return (
    <>
      <div data-phone-strip="true" style={{ background: '#F8F6F2', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '28px', fontSize: '14px', color: '#4A5A66' }}>
          <span>{lead.city} office · {lead.streetShort}</span>
          <PhoneLink office={lead.key} location="header" position="strip" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1A2E40', fontWeight: 600 }}>
            <PhoneIcon />{lead.phoneDisplay}
          </PhoneLink>
          <PhoneLink office={other.key} location="header" position="strip" style={{ color: '#4A5A66' }}>
            {other.city} {other.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
      <header data-screen-label="Navigation" data-nav="true" style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(248,246,242,0.92)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid #E8E4DC' }}>
        <div data-navbar="true" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', height: '82px', transition: 'height 240ms cubic-bezier(0.23,1,0.32,1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '28px' }}>
          <a href={url('home')} aria-label="Nolan Family Law and Mediation, home" style={{ display: 'flex', alignItems: 'center', flex: 'none', textDecoration: 'none' }}>
            <img data-logo="true" src="/images/nolan-logo.webp" alt="Nolan Family Law & Mediation" width={449} height={166} style={{ display: 'block', height: '54px', width: 'auto', transition: 'height 240ms cubic-bezier(0.23,1,0.32,1)' }} />
          </a>
          <nav data-nav-links="true" aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {mainNav.map((item) => (
              <a key={item.to} href={url(item.to)} data-navlink="true" aria-current={url(item.to) === currentPath ? 'page' : undefined} style={navLink}>{item.label}</a>
            ))}
          </nav>
          <PhoneLink office={lead.key} location="header" position="nav" data-nav-phone="true" style={{ alignItems: 'center', gap: '8px', color: '#1A2E40', fontSize: '15px', fontWeight: 600, whiteSpace: 'nowrap', textDecoration: 'none', flex: 'none' }}>
            <PhoneIcon />{lead.phoneDisplay}
          </PhoneLink>
          <a href="#book" data-nav-cta="true" data-press="true" data-cta-position="header" style={{ background: '#B4552F', color: '#FFFFFF', fontSize: '15px', fontWeight: 600, letterSpacing: '0.02em', padding: '15px 26px', borderRadius: '2px', whiteSpace: 'nowrap', textDecoration: 'none' }}>Talk to us</a>
          <div data-nav-mobile-actions="true" style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 'none' }}>
            <PhoneLink office={lead.key} location="header" position="call-button" data-nav-call="true" data-press="true" style={{ alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '52px', padding: '0 16px', borderRadius: '2px', background: '#B4552F', color: '#FFFFFF', fontSize: '15px', fontWeight: 600, textDecoration: 'none', flex: 'none' }}>
              <PhoneIcon /><span data-call-label="true">Call</span>
            </PhoneLink>
            <button type="button" data-nav-toggle="true" data-press="true" data-action="toggleMenu" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu" style={{ alignItems: 'center', justifyContent: 'center', gap: '10px', minHeight: '52px', minWidth: '52px', padding: '0 18px', border: '1px solid #BFC8D2', borderRadius: '2px', background: 'transparent', color: '#1A2E40', fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '20px' }}>
                <span style={{ display: 'block', height: '2px', background: '#1A2E40' }} />
                <span style={{ display: 'block', height: '2px', background: '#1A2E40' }} />
                <span style={{ display: 'block', height: '2px', background: '#1A2E40' }} />
              </span>
              Menu
            </button>
          </div>
        </div>
        <div data-menu-wrap="" id="site-menu" hidden>
          <div data-mobile-menu="true" style={{ borderTop: '1px solid #E8E4DC', background: '#F8F6F2', maxHeight: 'calc(100vh - 82px)', overflowY: 'auto' }}>
            <nav aria-label="Main menu" style={{ display: 'flex', flexDirection: 'column', padding: '8px 24px 24px' }}>
              {mainNav.map((item) => (
                <a key={item.to} href={url(item.to)} aria-current={url(item.to) === currentPath ? 'page' : undefined} style={menuLink}>{item.label}</a>
              ))}
              <a href="#book" data-action="closeMenu" data-press="true" data-cta-position="menu" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '56px', marginTop: '18px', background: '#B4552F', color: '#FFFFFF', fontSize: '16px', fontWeight: 600, borderRadius: '2px', textDecoration: 'none' }}>{menuCta}</a>
              <PhoneLink office={lead.key} location="header" position="menu" style={{ display: 'flex', alignItems: 'center', minHeight: '52px', fontSize: '16px', fontWeight: 600, color: '#1A2E40' }}>
                Call {lead.city} {lead.phoneDisplay}
              </PhoneLink>
              <PhoneLink office={other.key} location="header" position="menu" style={{ display: 'flex', alignItems: 'center', minHeight: '48px', fontSize: '15px', color: '#4A5A66' }}>
                {other.city} {other.phoneDisplay}
              </PhoneLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
