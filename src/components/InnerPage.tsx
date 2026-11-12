/**
 * Building blocks of the generic inner-page template (DESIGN.md §8): page hero, breadcrumb
 * row and a single-column body. Used by the article and profile templates and by any page
 * that launches before it has its own design (D-22).
 */
import type { ReactNode } from 'react';
import { url, route, type RouteKey } from '@/config/routes';

const wrap = { maxWidth: '1240px', margin: '0 auto', padding: '0 24px' } as const;

export function PageHero({ eyebrow, title, lede, children, aside }: { eyebrow: string; title: string; lede?: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section data-screen-label="Hero" style={{ background: '#F8F6F2' }}>
      <div data-hero-grid="true" style={{ ...wrap, padding: '88px 24px 64px', display: 'grid', gridTemplateColumns: aside ? 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))' : 'minmax(0, 1fr)', gap: '64px', alignItems: 'center' }}>
        <div style={{ minWidth: 0 }}>
          <div data-reveal="true" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '26px' }}>{eyebrow}</div>
          <h1 data-reveal="true" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: aside ? 'clamp(40px, 5.4vw, 72px)' : 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#1A2E40', margin: '0 0 24px', maxWidth: aside ? '16ch' : '24ch', textWrap: 'pretty' }}>{title}</h1>
          {lede && <p data-reveal="true" style={{ fontSize: '19px', lineHeight: 1.65, color: '#3F5060', maxWidth: '52ch', margin: 0, textWrap: 'pretty' }}>{lede}</p>}
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}

export interface CrumbItem { key: RouteKey; name?: string }
export function Breadcrumb({ trail, meta }: { trail: CrumbItem[]; meta?: ReactNode }) {
  return (
    <div style={{ background: '#F8F6F2', borderTop: '1px solid #E8E4DC', borderBottom: '1px solid #E8E4DC' }}>
      <div style={{ ...wrap, padding: '14px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px 32px', fontSize: '14px', color: '#4A5A66' }}>
        <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          {trail.map((c, i) => {
            const name = c.name ?? route(c.key).label;
            const last = i === trail.length - 1;
            return (
              <span key={c.key} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {last ? <span aria-current="page" style={{ color: '#1A2E40' }}>{name}</span> : <a href={url(c.key)} style={{ color: '#4A5A66' }}>{name}</a>}
              </span>
            );
          })}
        </nav>
        {meta && <div>{meta}</div>}
      </div>
    </div>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return (
    <section data-section="true" style={{ background: '#FEFDFB' }}>
      <div style={{ ...wrap, padding: '88px 24px 104px' }}>{children}</div>
    </section>
  );
}
