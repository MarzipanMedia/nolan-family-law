/**
 * The Google rating, loaded live (D-37). With no live data it shows words only, never a number.
 */
import type { CSSProperties } from 'react';
import { getProfileFor, type GoogleProfile } from '@/lib/google-reviews';
import type { OfficeKey } from '@/config/offices';

export const ratingText = (p: GoogleProfile) => `Google rating ${p.rating.toFixed(1)} from ${p.count} reviews`;

export async function GoogleRatingLine({ office = 'sydney', style }: { office?: OfficeKey; style?: CSSProperties }) {
  const profile = await getProfileFor(office);
  return <span data-google-rating="true" style={style}>{profile ? ratingText(profile) : 'Reviewed on Google'}</span>;
}

export function Stars({ size = 18 }: { size?: number }) {
  return (
    <span data-stars="true" aria-hidden="true" style={{ display: 'inline-flex', gap: '3px', color: '#B7791F', fontSize: `${size}px`, lineHeight: 1 }}>
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </span>
  );
}
