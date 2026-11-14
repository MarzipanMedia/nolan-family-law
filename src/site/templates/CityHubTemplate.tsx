/**
 * THE CITY HUB TEMPLATE (BUILD-NOTES "City hub template"; D-30, D-31).
 *
 * One layout for every city hub. Melbourne set it; Sydney is the second entry. A city's
 * content and config live in src/site/city-hubs/<city>.tsx: never fork this file for a city.
 * Markup and styles follow the approved hub prototypes (export/melbourne-family-law.html and
 * export/sydney-family-law.html). The header, trust ribbon and footer come from the shell.
 */
import type { CSSProperties, ReactNode } from 'react';
import { url, route, type RouteKey } from '@/config/routes';
import { offices } from '@/config/offices';
import { PhoneLink } from '@/components/PhoneLink';
import { Reviews } from '@/components/Reviews';
import { LiveLink } from '@/components/LiveLink';
import { CtaBand } from '@/components/CtaBand';
import { Picture } from '@/components/Picture';
import type { CityHubConfig, Destination } from '@/site/city-hubs/types';

// ── Shared styles (DESIGN.md v2.0) ───────────────────────────────────────────────────────
const S = {
  eyebrow: { fontSize: '13px', fontWeight: '600', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '18px' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.18', color: '#1A2E40', margin: '0', maxWidth: '24ch', textWrap: 'pretty' },
  h2Small: { fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: '1.2', color: '#1A2E40', margin: '0', maxWidth: '24ch', textWrap: 'pretty' },
  guideH2: { fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: '1.18', color: '#1A2E40', margin: '0 0 24px', maxWidth: '26ch', textWrap: 'pretty' },
  guideP: { fontSize: '18px', lineHeight: '1.7', color: '#2C3E50', maxWidth: '62ch', margin: '0 0 18px', textWrap: 'pretty' },
  inShort: { marginTop: '32px', padding: '24px 26px', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', maxWidth: '64ch' },
  inShortLabel: { fontSize: '12px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A2E40', marginBottom: '10px' },
  inShortP: { fontSize: '17px', lineHeight: '1.65', color: '#2C3E50', margin: '0', textWrap: 'pretty' },
  card: { display: 'flex', flexDirection: 'column', gap: '12px', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '34px', color: '#1A2E40', textDecoration: 'none' },
  cardArrow: { marginTop: 'auto', paddingTop: '8px', fontSize: '18px', color: '#3A6D8C' },
  cardText: { fontSize: '16px', lineHeight: '1.6', color: '#4A5A66' },
  container: { maxWidth: '1240px', margin: '0 auto', padding: '120px 24px' },
  primary: { background: '#B4552F', color: '#FFFFFF', fontSize: '16px', fontWeight: '600', letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', textDecoration: 'none' },
  personP: { fontSize: '17px', lineHeight: '1.7', color: '#2C3E50', margin: '0 0 14px', maxWidth: '58ch' },
} satisfies Record<string, CSSProperties>;

const bold = { fontWeight: '600' } as const;

/** An inline link to a page in the routes file, for copy in a city entry. */
export const L = ({ to, hash, children }: { to: RouteKey; hash?: string; children: ReactNode }) => <a href={url(to, hash)} style={bold}>{children}</a>;
/** The same, for a page that may not exist yet: plain words until it does (D-28). */
export const LL = ({ to, children }: { to: RouteKey; children: ReactNode }) => <LiveLink to={to} style={bold}>{children}</LiveLink>;
/** "Talk to us about costs": opens the form with the fees topic chosen. */
export const CostsLink = () => <a href="#book" style={bold} data-pick-topic="fees">Talk to us about costs</a>;

const href = (to: Destination) => (to.startsWith('#') ? to : url(to as RouteKey));

export function CityHubTemplate({ hub }: { hub: CityHubConfig }) {
  const o = offices[hub.office];
  const toc = [...hub.sections.map((s) => ({ id: s.id, label: s.toc })), { id: 'faq', label: 'Questions' }];
  const { hero, lawyer } = hub;

  return (
    <>
      {/* ── Hero ── */}
      <section data-screen-label="Hero" style={{ background: '#F8F6F2' }}>
        <div data-hero-grid="true" style={{ maxWidth: '1240px', margin: '0 auto', padding: '88px 24px 72px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '64px', alignItems: 'start' }}>
          <div style={{ minWidth: '0' }}>
            <div data-reveal="true" style={{ ...S.eyebrow, marginBottom: '26px' }}>{hero.eyebrow}</div>
            <h1 data-reveal="true" style={{ fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: '1.06', letterSpacing: '-0.015em', color: '#1A2E40', margin: '0 0 26px', maxWidth: '16ch', textWrap: 'pretty' }}>{hero.h1}</h1>
            <p data-reveal="true" style={{ fontSize: '19px', lineHeight: '1.65', color: '#3F5060', maxWidth: '52ch', margin: '0 0 20px', textWrap: 'pretty' }}>{hero.lede}</p>
            <div data-reveal="true" style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '0 0 38px', maxWidth: '56ch' }}>
              {hero.paragraphs.map((p, i) => <p key={i} style={{ fontSize: '16px', lineHeight: '1.65', color: '#4A5A66', margin: '0', textWrap: 'pretty' }}>{p}</p>)}
            </div>
            <div data-reveal="true" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#book" data-press="true" data-cta-position="hero" style={S.primary}>{hub.cta}</a>{' '}
              <PhoneLink office={hub.office} location="body" position="hero" data-press="true" style={{ border: '1px solid #BFC8D2', color: '#1A2E40', fontSize: '16px', fontWeight: '600', letterSpacing: '0.02em', padding: '18px 34px', borderRadius: '2px', background: 'rgba(248,246,242,0.6)', textDecoration: 'none' }}>
                {'Call '}{o.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
          <div style={{ minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div data-clip="true" style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', aspectRatio: '4 / 4.2', maxHeight: '560px', background: 'linear-gradient(180deg, #DCE9F0 0%, #E8E4DC 100%)' }}>
              <Picture img={hero.portrait.img} alt={hero.portrait.alt} priority data-hero-img="true" sizes={`(max-width: 900px) 92vw, ${hero.portrait.maxWidth}`}
                style={{ position: 'absolute', left: '50%', bottom: '0', transformOrigin: '50% 100%', width: hero.portrait.width, maxWidth: hero.portrait.maxWidth, height: 'auto', translate: '-50% 0', ...(hero.portrait.blend ? { mixBlendMode: 'multiply' } : {}) }} />
              <div style={{ position: 'absolute', left: '18px', bottom: '18px', background: 'rgba(254,253,251,0.94)', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '12px 16px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', color: '#1A2E40' }}>{hero.nameCard.name}</div>
                <div style={{ fontSize: '14px', color: '#4A5A66' }}>{hero.nameCard.role}</div>
              </div>
            </div>
            <div data-reveal="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 100px), 1fr))', gap: '1px', background: '#E8E4DC', border: '1px solid #E8E4DC', borderRadius: '3px', overflow: 'hidden' }}>
              {hero.facts.map((f, i) => (
                <div key={i} style={{ background: '#FEFDFB', padding: '16px 18px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1A2E40' }}>{f.title}</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#4A5A66' }}>{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 72px' }}>
          <nav aria-label="Breadcrumb" data-reveal="true" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4A5A66', paddingBottom: '28px', marginBottom: '40px', borderBottom: '1px solid #E8E4DC' }}>
            <a href={url('home')} style={{ color: '#4A5A66' }}>{route('home').label}</a>
            <span aria-hidden="true">/</span>{' '}
            {/* The label is set once, in the routes file (Q-15). */}
            <span aria-current="page" style={{ color: '#1A2E40' }}>{route(hub.route).label}</span>{' '}
            <span style={{ flex: '1 1 auto' }} />{' '}
            <span style={{ color: '#4A5A66' }}>
              {hub.byline.prefix}{' '}
              <a href={url(hub.byline.person)} style={{ color: '#1A2E40', fontWeight: '600' }}>{hub.byline.name}</a>
              {`, ${hub.byline.role} · Updated ${hub.byline.updated}`}
            </span>
          </nav>
          <h2 data-reveal="true" style={{ fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: 'clamp(26px, 3.2vw, 36px)', lineHeight: '1.2', color: '#1A2E40', margin: '0 0 40px', maxWidth: '30ch', textWrap: 'pretty' }}>{hub.subheading}</h2>
          <aside aria-labelledby="quick-answer" data-reveal="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px 56px', padding: '40px', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '3px' }}>
            <div>
              <div style={{ ...S.eyebrow, marginBottom: '14px' }}>Quick answer</div>
              <h3 id="quick-answer" style={{ fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: '28px', lineHeight: '1.25', color: '#1A2E40', margin: '0', textWrap: 'pretty' }}>{hub.quickAnswer.question}</h3>
            </div>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#2C3E50', margin: '0', maxWidth: '62ch', textWrap: 'pretty' }}>{hub.quickAnswer.answer}</p>
          </aside>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section data-screen-label="Accreditations" style={{ background: '#FEFDFB', borderTop: '1px solid #E8E4DC', borderBottom: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '56px 24px' }}>
          <div data-reveal="true" style={{ textAlign: 'center', fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '32px' }}>Recognised and accredited</div>
          {/* Columns follow the number of badges; 3 at ≤1100px and 2 at ≤520px (globals.css). */}
          <div data-badge-grid="true" style={{ display: 'grid', gridTemplateColumns: `repeat(${hub.badges.length}, minmax(0,1fr))`, alignItems: 'center', gap: '32px 32px', maxWidth: hub.badgeRowWidth, margin: '0 auto' }}>
            {hub.badges.map((b) => (
              <div key={b.alt} data-reveal="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px', minWidth: '0' }}>
                <Picture img={b.img} alt={b.alt} style={{ display: 'block', height: `${b.height}px`, width: 'auto', maxWidth: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How can we help you ── */}
      <section id="help" data-screen-label="How can we help you" data-section="true" style={{ background: '#F8F6F2' }}>
        <div style={S.container}>
          <div data-reveal="true" style={{ marginBottom: '48px', maxWidth: '760px' }}>
            <div style={S.eyebrow}>How can we help you?</div>
            <h2 style={{ ...S.h2, margin: '0 0 20px' }}>Whatever brought you here, start with what matters most.</h2>
            <p style={{ fontSize: '19px', lineHeight: '1.65', color: '#3F5060', maxWidth: '52ch', margin: '0', textWrap: 'pretty' }}>{hub.helpLede}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
            {hub.routingCards.map((c) => (
              <a key={c.title} href={href(c.to)} data-card="true" data-reveal="true" style={S.card}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', lineHeight: '1.3', color: '#1A2E40' }}>{c.title}</span>
                <span style={S.cardText}>{c.text}</span>
                <span data-arrow="true" aria-hidden="true" style={S.cardArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide ── */}
      <div data-screen-label="Guide" style={{ background: '#FEFDFB', borderTop: '1px solid #CFE0EA', borderBottom: '1px solid #CFE0EA' }}>
        <div data-article-grid="true" style={{ maxWidth: '1240px', margin: '0 auto', padding: '48px 24px 72px', display: 'grid', gap: '64px', alignItems: 'start' }}>
          <aside data-toc-aside="true" aria-label="On this page" style={{ position: 'sticky', top: '112px', flexDirection: 'column', gap: '18px', paddingTop: '72px' }}>
            <div style={{ ...S.eyebrow, marginBottom: '0' }}>On this page</div>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {toc.map((t) => <a key={t.id} href={`#${t.id}`} data-toc-link={t.id} style={{ padding: '7px 0 7px 14px', fontSize: '14.5px', lineHeight: '1.4', color: '#4A5A66' }}>{t.label}</a>)}
            </nav>
          </aside>
          <div style={{ minWidth: '0' }}>
            <details data-toc-inline="true" data-reveal="true" style={{ margin: '24px 0 0', border: '1px solid #E8E4DC', borderRadius: '3px', background: '#F8F6F2' }}>
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 22px', fontSize: '15px', fontWeight: '600', color: '#1A2E40' }}>
                On this page
                <span data-faq-plus="true" aria-hidden="true" style={{ fontSize: '20px', color: '#3A6D8C', transition: 'transform 200ms cubic-bezier(0.23,1,0.32,1)' }}>+</span>
              </summary>
              <nav style={{ display: 'flex', flexDirection: 'column', padding: '0 22px 18px' }}>
                {toc.map((t) => <a key={t.id} href={`#${t.id}`} style={{ padding: '9px 0', fontSize: '15px', color: '#4A5A66', borderTop: '1px solid #E8E4DC' }}>{t.label}</a>)}
              </nav>
            </details>

            {hub.sections.map((s, i) => (
              <GuideBlock key={s.id} hub={hub} section={s} first={i === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Your city lawyer ── */}
      <section data-screen-label={`Your ${o.city} lawyer`} data-section="true" style={{ background: '#F8F6F2' }}>
        <div style={S.container}>
          <div data-reveal="true" style={{ marginBottom: '48px', maxWidth: '760px' }}>
            <div style={S.eyebrow}>Who you would be working with</div>
            <h2 style={S.h2}>{lawyer.h2}</h2>
          </div>
          <div data-person="true" data-reveal="true" style={{ display: 'grid', gridTemplateColumns: '148px minmax(0,1fr)', gap: '32px', alignItems: 'start', maxWidth: '860px', padding: '34px', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '3px' }}>
            <Picture img={lawyer.lead.img} alt={lawyer.lead.alt} sizes="148px" style={{ display: 'block', width: '148px', height: '148px', borderRadius: '3px', objectFit: 'cover', objectPosition: '50% 15%', background: '#DCE9F0' }} />
            <div style={{ minWidth: '0' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: '500', fontSize: '28px', lineHeight: '1.25', color: '#1A2E40', margin: '0 0 6px' }}>{lawyer.lead.name}</h3>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#3A6D8C', marginBottom: '18px' }}>{lawyer.lead.role}</div>
              {lawyer.lead.body.map((b, i) => {
                const last = i === lawyer.lead.body.length - 1;
                if (b && typeof b === 'object' && 'list' in b) {
                  return (
                    <ul key={i} style={{ margin: '0 0 18px', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', borderTop: '1px solid #E8E4DC', maxWidth: '58ch' }}>
                      {b.list.map((item) => <li key={item} style={{ padding: '10px 0', borderBottom: '1px solid #E8E4DC', fontSize: '16px', lineHeight: '1.5', color: '#1A2E40' }}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={i} style={last ? { fontSize: '17px', lineHeight: '1.7', color: '#2C3E50', margin: '0' } : S.personP}>{b as ReactNode}</p>;
              })}
            </div>
          </div>
          <div data-reveal="true" style={{ display: 'grid', gridTemplateColumns: '72px minmax(0,1fr)', gap: '22px', alignItems: 'center', maxWidth: '860px', marginTop: '20px', padding: '24px 34px', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '3px' }}>
            <Picture img={lawyer.second.img} alt={lawyer.second.alt} sizes="72px" style={{ display: 'block', width: '72px', height: '72px', borderRadius: '3px', objectFit: 'cover', objectPosition: '50% 15%', background: '#DCE9F0' }} />
            <p style={{ fontSize: '16px', lineHeight: '1.65', color: '#2C3E50', margin: '0' }}>{lawyer.second.body}</p>
          </div>
        </div>
      </section>

      {/* ── Reviews ── loaded live from the office's Google Business Profile; never written (D-37) */}
      <Reviews office={hub.office} heading={hub.reviewsHeading} />

      {/* ── Location toggle and city guides ── */}
      <section data-screen-label={hub.guides.label} data-section="true" style={{ background: '#F8F6F2', borderTop: '1px solid #E8E4DC' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px' }}>
          <a href={url(hub.toggle.to)} data-card="true" data-reveal="true" data-location-toggle="true" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '18px 32px', background: '#FEFDFB', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '30px 34px', color: '#1A2E40', textDecoration: 'none', marginBottom: '56px' }}>
            <span style={{ minWidth: '0' }}>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '8px' }}>{hub.toggle.eyebrow}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '24px', lineHeight: '1.3', color: '#1A2E40' }}>{hub.toggle.title}</span>
              <span style={{ display: 'block', fontSize: '16px', lineHeight: '1.6', color: '#4A5A66', marginTop: '6px' }}>{hub.toggle.text}</span>
            </span>
            <span data-arrow="true" aria-hidden="true" style={{ fontSize: '20px', color: '#3A6D8C' }}>→</span>
          </a>
          <div data-reveal="true" style={{ marginBottom: '32px', maxWidth: '760px' }}>
            <div style={S.eyebrow}>{hub.guides.eyebrow}</div>
            <h2 style={S.h2Small}>{hub.guides.h2}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
            {hub.guides.cards.filter((c) => !c.liveOnly || route(c.to).status === 'live').map((c) => (
              <a key={c.title} href={url(c.to)} data-card="true" data-reveal="true" style={{ ...S.card, padding: '30px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', lineHeight: '1.3', color: '#1A2E40' }}>{c.title}</span>
                <span style={S.cardText}>{c.text}</span>
                <span data-arrow="true" aria-hidden="true" style={S.cardArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── (every question is in the FAQPage schema, read from this same list) */}
      <section id="faq" data-screen-label="FAQ" data-section="true" data-toc-section="true" style={{ background: '#FEFDFB', borderTop: '1px solid #E8E4DC' }}>
        <div style={S.container}>
          <div data-reveal="true" style={{ marginBottom: '40px', maxWidth: '760px' }}>
            <div style={S.eyebrow}>Questions people ask us</div>
            <h2 style={S.h2}>{hub.faqHeading}</h2>
          </div>
          <div style={{ maxWidth: '860px', borderTop: '1px solid #E8E4DC' }}>
            {hub.faq.map((f) => (
              <details key={f.q} data-reveal="true" style={{ borderBottom: '1px solid #E8E4DC' }}>
                <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '24px 0', fontSize: '18px', fontWeight: '600', color: '#1A2E40' }}>
                  {f.q}
                  <span data-faq-plus="true" aria-hidden="true" style={{ flex: 'none', fontSize: '22px', color: '#3A6D8C', transition: 'transform 200ms cubic-bezier(0.23,1,0.32,1)' }}>+</span>
                </summary>
                <p data-faq-answer="true" style={{ fontSize: '17px', lineHeight: '1.7', color: '#2C3E50', margin: '0 0 24px', maxWidth: '62ch' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── (the one --deep section; its phone link carries data-cta-position="contact") */}
      <CtaBand office={hub.office} lede={hub.contact.lede} address={hub.contact.address} askStage />
    </>
  );
}

function GuideBlock({ hub, section: s, first }: { hub: CityHubConfig; section: CityHubConfig['sections'][number]; first: boolean }) {
  return (
    <>
      <section id={s.id} data-screen-label={s.label} data-toc-section="true" style={first ? { padding: '72px 0' } : { padding: '72px 0', borderTop: '1px solid #E8E4DC' }}>
        <h2 data-reveal="true" style={S.guideH2}>{s.h2}</h2>
        {s.body.map((p, i) => <p key={i} data-reveal="true" style={S.guideP}>{p}</p>)}
        <div data-reveal="true" style={S.inShort}>
          <div style={S.inShortLabel}>In short</div>
          <p style={S.inShortP}>{s.inShort}</p>
        </div>
      </section>
      {s.id === hub.midAfter && <MidPrompt hub={hub} />}
    </>
  );
}

/** The one mid-page prompt (D-31). Its links carry data-cta-position="mid". */
function MidPrompt({ hub }: { hub: CityHubConfig }) {
  const o = offices[hub.office];
  return (
    <aside aria-labelledby="mid-cta-title" data-mid-cta="true" data-reveal="true" style={{ margin: '8px 0 0', padding: '40px', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '22px', maxWidth: '760px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <Picture img={hub.mid.img} alt="" sizes="64px" style={{ flex: 'none', width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition: hub.mid.objectPosition, background: '#DCE9F0' }} />
        <div style={{ minWidth: '0' }}>
          <div style={{ ...S.eyebrow, marginBottom: '6px' }}>Every situation is different</div>
          <h2 id="mid-cta-title" style={{ fontFamily: 'var(--font-serif)', fontWeight: '400', fontSize: '28px', lineHeight: '1.25', color: '#1A2E40', margin: '0', textWrap: 'pretty' }}>Not sure how this applies to you?</h2>
        </div>
      </div>
      <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#2C3E50', margin: '0', maxWidth: '58ch', textWrap: 'pretty' }}>{hub.mid.text}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 28px' }}>
        <a href="#book" data-press="true" data-cta-position="mid" style={S.primary}>{hub.cta}</a>{' '}
        <PhoneLink office={hub.office} location="body" position="mid" style={{ fontSize: '16px', fontWeight: '600', color: '#1A2E40' }}>
          {'or call '}{o.phoneDisplay}
        </PhoneLink>
      </div>
    </aside>
  );
}
