/**
 * A link to a page that may not exist yet. Until the route is live it renders its words
 * without the link, so copy can mention a coming article without linking to a 404 (D-28).
 */
import type { CSSProperties, ReactNode } from 'react';
import { url, isLive, type RouteKey } from '@/config/routes';

export function LiveLink({ to, hash, style, children }: { to: RouteKey; hash?: string; style?: CSSProperties; children: ReactNode }) {
  return isLive(to) ? <a href={url(to, hash)} style={style}>{children}</a> : <span style={style}>{children}</span>;
}
