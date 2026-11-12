/** The XML sitemap: only live, indexable pages, straight from the routes file (D-25). */
import type { MetadataRoute } from 'next';
import { allRoutes, SITE_ORIGIN } from '@/config/routes';
import { pages } from '@/site/registry';
import { getCarryOver } from '@/site/imported';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes()
    .filter(({ key, def }) => def.indexable && def.status === 'live' && (def.kind !== 'page' || key in pages || getCarryOver(key) !== null))
    .map(({ path }) => ({ url: SITE_ORIGIN + path }));
}
