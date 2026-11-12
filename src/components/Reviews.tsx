/**
 * Google reviews section. Everything in it is loaded live from the office's Google Business
 * Profile: the rating, the count and the reviews themselves (D-37). Nothing is written by us.
 *
 * With no live data (no API key yet, or Google unavailable) the section is left out entirely
 * rather than showing a placeholder. Melbourne pages prefer Melbourne reviews and fall back to
 * the firm's Sydney profile, saying so.
 *
 * Still to confirm before launch: Law Society of NSW advertising sign-off on showing stars
 * and reviews (BUILD-NOTES, child custody open item 4).
 */
import type { ReactNode } from 'react';
import { getProfileFor } from '@/lib/google-reviews';
import { offices, type OfficeKey } from '@/config/offices';
import { ratingText } from './GoogleRating';

interface Props { office: OfficeKey; eyebrow?: string; heading: ReactNode; background?: string }

const clip = (text: string, max = 340) => (text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max)).replace(/[,.;:]$/, '') + '…');

export async function Reviews({ office, eyebrow = 'Google reviews', heading, background = '#FEFDFB' }: Props) {
  const profile = await getProfileFor(office);
  if (!profile || profile.reviews.length === 0) return null;
  const fallback = profile.office !== office;
  return (
    <section data-screen-label="Reviews" data-section="true" style={{ background, borderTop: '1px solid #E8E4DC' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 24px' }}>
        <div data-reveal="true" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: '24px 64px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3A6D8C', marginBottom: '18px' }}>{eyebrow}</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.2, color: '#1A2E40', margin: 0, maxWidth: '24ch' }}>{heading}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span aria-hidden="true" style={{ color: '#B7791F', fontSize: '20px', letterSpacing: '2px' }}>★★★★★</span>
              <span data-google-rating="true" style={{ fontSize: '15px', fontWeight: 600, color: '#1A2E40' }}>{ratingText(profile)}</span>
            </div>
            {fallback && <span style={{ fontSize: '14px', color: '#4A5A66' }}>Reviews of our {offices[profile.office].city} office</span>}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
          {profile.reviews.slice(0, 3).map((r, i) => (
            <figure key={i} data-reveal="true" style={{ margin: 0, minHeight: '180px', padding: '30px', background: '#F8F6F2', border: '1px solid #E8E4DC', borderRadius: '3px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span aria-label={`${r.rating} out of 5 stars`} style={{ color: '#B7791F', fontSize: '15px', letterSpacing: '2px' }}>{'★'.repeat(Math.round(r.rating))}</span>
              <blockquote style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#2C3E50' }}>{clip(r.text)}</blockquote>
              <figcaption style={{ marginTop: 'auto', fontSize: '14px', color: '#4A5A66' }}>{r.author}{r.when ? ` · ${r.when}` : ''} · Google review</figcaption>
            </figure>
          ))}
        </div>
        {profile.url && (
          <p data-reveal="true" style={{ margin: '32px 0 0', fontSize: '15px' }}>
            <a href={profile.url} rel="noopener" style={{ fontWeight: 600 }}>Read all our reviews on Google <span data-arrow="true" aria-hidden="true">→</span></a>
          </p>
        )}
      </div>
    </section>
  );
}
