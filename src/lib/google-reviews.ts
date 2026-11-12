/**
 * Live Google rating and reviews from each office's Google Business Profile (D-37).
 *
 * Nothing about the rating is ever written in the build: not the number, not the count, not a
 * quote. If Google is unavailable, or no API key is set, this returns null and the page shows
 * no rating at all. Results are cached for a day.
 *
 * TODO (Ben): GOOGLE_PLACES_API_KEY and the two place IDs.
 */
import type { OfficeKey } from '@/config/offices';

export interface GoogleReview { author: string; text: string; rating: number; when: string }
export interface GoogleProfile { office: OfficeKey; rating: number; count: number; reviews: GoogleReview[]; url: string }

const placeIds: Record<OfficeKey, string | undefined> = {
  sydney: process.env.GOOGLE_PLACE_ID_SYDNEY,
  melbourne: process.env.GOOGLE_PLACE_ID_MELBOURNE,
};

export async function getGoogleProfile(office: OfficeKey): Promise<GoogleProfile | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = placeIds[office];
  if (!key || !placeId) return null;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=en-AU`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri' },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const d = await res.json();
    if (typeof d.rating !== 'number' || typeof d.userRatingCount !== 'number') return null;
    const reviews: GoogleReview[] = (d.reviews ?? [])
      .filter((r: any) => r.rating >= 4 && r.text?.text)
      .map((r: any) => ({ author: r.authorAttribution?.displayName ?? 'Google reviewer', text: r.text.text, rating: r.rating, when: r.relativePublishTimeDescription ?? '' }));
    return { office, rating: d.rating, count: d.userRatingCount, reviews, url: d.googleMapsUri ?? '' };
  } catch {
    return null;
  }
}

/** The profile to show on a page: the local office first, then the other, and say which. */
export async function getProfileFor(office: OfficeKey): Promise<GoogleProfile | null> {
  return (await getGoogleProfile(office)) ?? (await getGoogleProfile(office === 'sydney' ? 'melbourne' : 'sydney'));
}
