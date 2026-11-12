/**
 * The homepage "Review proof" section, as designed, with every figure and quote loaded live
 * from the Google Business Profile (D-37). The prototype's "Rated 4.9 out of 5 from 155
 * Google reviews" was a stand-in: the rating, count and reviews here are whatever Google
 * reports today. With no live data the section is left out.
 */
import { getProfileFor } from '@/lib/google-reviews';
import type { OfficeKey } from '@/config/offices';

const STAR = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
const clip = (text: string, max = 230) => (text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max)).replace(/[,.;:]$/, '') + '…');

export async function ReviewProof({ office = 'sydney' }: { office?: OfficeKey }) {
  const profile = await getProfileFor(office);
  if (!profile || profile.reviews.length === 0) return null;
  const rating = profile.rating.toFixed(1);
  const reviews = profile.reviews.slice(0, 3);
  return (
    <section data-screen-label="Review proof" data-section="true" style={{ background: '#FEFDFB', borderBottom: '1px solid #E8E4DC' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '64px', alignItems: 'center', minWidth: 0 }}>
        <div data-reveal="true" style={{ minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px' }}>Client experiences</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '10px' }}>
            <span data-counter="true" data-count-to={rating} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(56px, 8vw, 94px)', lineHeight: 0.92, color: '#1A2E40', fontVariantNumeric: 'tabular-nums' }}>{rating}</span>
            <span role="img" aria-label={`${rating} out of 5 stars`} data-stars="true" style={{ display: 'inline-flex', gap: '6px' }}>
              {[1, 2, 3, 4, 5].map((n) => {
                const fill = Math.max(0, Math.min(1, profile.rating - (n - 1)));
                const pct = Math.round(fill * 100);
                return <span key={n} style={{ width: '21px', height: '21px', background: pct >= 100 ? 'var(--star)' : `linear-gradient(90deg, var(--star) 0 ${pct}%, var(--soft) ${pct}% 100%)`, clipPath: STAR }} />;
              })}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(26px, 3.2vw, 36px)', lineHeight: 1.2, color: '#1A2E40', margin: '0 0 18px', maxWidth: '24ch', textWrap: 'pretty' }}>
            Rated {rating} out of 5 from <span style={{ fontVariantNumeric: 'tabular-nums' }}>{profile.count}</span> Google reviews.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4A5A66', maxWidth: '46ch', margin: '0 0 30px', textWrap: 'pretty' }}>Every review here is a verified Google review, shown as it was written.</p>
          {profile.url && (
            <a href={profile.url} rel="noopener" style={{ fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Read all Google reviews <span data-arrow="true" aria-hidden="true">→</span>
            </a>
          )}
        </div>
        <div data-reveal="true" style={{ minWidth: 0 }}>
          <div data-slider="true" style={{ position: 'relative', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', padding: '44px 40px 36px', minHeight: '330px', display: 'grid' }}>
            {reviews.map((r, i) => (
              <div key={i} data-slide={i} data-active={i === 0 ? 'true' : undefined} style={{ gridArea: '1 / 1' }}>
                <blockquote style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(21px, 2.3vw, 27px)', lineHeight: 1.42, color: '#1A2E40', margin: '0 0 24px', textWrap: 'pretty' }}>“{clip(r.text)}”</blockquote>
                <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>{r.author} · Google review</div>
              </div>
            ))}
            {reviews.length > 1 && (
              <div style={{ gridArea: '1 / 1', alignSelf: 'end', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', pointerEvents: 'none' }}>
                <div data-dots="true" style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
                  {reviews.map((_, i) => (
                    <button key={i} type="button" data-dot={i} data-action="goToSlide" data-slide-index={i} aria-label={`Show review ${i + 1}`} style={{ width: '28px', height: '28px', padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span data-dot-mark="true" style={{ display: 'block', width: '22px', height: '2px', background: '#1A2E40' }} />
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
                  <button type="button" data-press="true" data-action="prevSlide" aria-label="Previous review" style={{ width: '48px', height: '48px', border: '1px solid #BFC8D2', borderRadius: '2px', background: 'transparent', color: '#1A2E40', fontSize: '17px', cursor: 'pointer' }}>←</button>
                  <button type="button" data-press="true" data-action="nextSlide" aria-label="Next review" style={{ width: '48px', height: '48px', border: '1px solid #BFC8D2', borderRadius: '2px', background: 'transparent', color: '#1A2E40', fontSize: '17px', cursor: 'pointer' }}>→</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
