import { url } from '@/config/routes';
import { PageShell } from '@/components/PageShell';
import { CtaBand } from '@/components/CtaBand';

export const metadata = { title: 'Page not found | Nolan Family Law & Mediation', robots: { index: false } };

export default function NotFound() {
  return (
    <PageShell city={null} currentPath="">
      <section style={{ background: '#F8F6F2' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '22px' }}>Page not found</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: 1.06, letterSpacing: '-0.015em', color: '#1A2E40', margin: '0 0 24px', maxWidth: '18ch' }}>We could not find that page.</h1>
          <p style={{ fontSize: '19px', lineHeight: 1.65, color: '#3F5060', maxWidth: '52ch', margin: '0 0 34px' }}>It may have moved. You can start again from the homepage, or tell us what you are looking for and we will point you in the right direction.</p>
          <a href={url('home')} data-press="true" style={{ display: 'inline-block', background: '#B4552F', color: '#FFFFFF', fontSize: '16px', fontWeight: 600, letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', textDecoration: 'none' }}>Go to the homepage</a>
        </div>
      </section>
      <CtaBand office="sydney" />
    </PageShell>
  );
}
