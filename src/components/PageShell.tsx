/**
 * The site shell every page is rendered inside: phone strip and header (D-30), the page,
 * trust ribbon, footer (identical everywhere), back to top.
 */
import type { ReactNode } from 'react';
import type { City } from '@/config/routes';
import { Header } from './Header';
import { Footer, TrustRibbon } from './Footer';

interface Props { city: City; currentPath: string; menuCta?: string; footerNote?: string; children: ReactNode }

const NOTES: Record<string, string> = {
  sydney: 'This page is general information about family law in NSW. It is not legal advice, and it does not take account of your circumstances.',
  melbourne: 'This page is general information about family law in Victoria. It is not legal advice, and it does not take account of your circumstances.',
  none: 'This website is general information about family law. It is not legal advice, and it does not take account of your circumstances.',
};

export function PageShell({ city, currentPath, menuCta, footerNote, children }: Props) {
  return (
    <div data-root="true" style={{ background: '#F8F6F2', minWidth: '320px', overflowX: 'clip', fontFamily: 'var(--font-sans)', color: '#2C3E50' }}>
      <a href="#main" style={{ position: 'absolute', left: '-9999px' }} className="skip-link">Skip to content</a>
      <div data-show-top="" hidden>
        <button type="button" data-press="true" data-action="backToTop" aria-label="Back to top" style={{ position: 'fixed', zIndex: 89, right: '16px', bottom: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '44px', padding: '0 16px', border: '1px solid #BFC8D2', borderRadius: '2px', background: 'rgba(254,253,251,0.94)', backdropFilter: 'blur(10px)', color: '#1A2E40', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          <span aria-hidden="true">↑</span>Back to top
        </button>
      </div>
      <Header city={city} currentPath={currentPath} menuCta={menuCta} />
      <main id="main">{children}</main>
      <TrustRibbon office={city ?? 'sydney'} />
      <Footer note={footerNote ?? NOTES[city ?? 'none']} />
    </div>
  );
}
