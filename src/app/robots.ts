import type { MetadataRoute } from 'next';
import { SITE_ORIGIN } from '@/config/routes';

export default function robots(): MetadataRoute.Robots {
  // Staging is closed to crawlers. Only SITE_ENV=production opens the site.
  if (process.env.SITE_ENV !== 'production') return { rules: [{ userAgent: '*', disallow: '/' }] };
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }], sitemap: `${SITE_ORIGIN}/sitemap.xml` };
}
