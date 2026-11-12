/**
 * Reads the articles and profiles imported from WordPress (D-35) and resolves their
 * "route:<key>" link tokens through the routes file, so imported content never links
 * through a redirect under either URL mode (D-25).
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { routes, url, type RouteKey } from '@/config/routes';

export interface Imported {
  slug: string; path: string; title: string; seoTitle: string; description: string;
  image: string; date: string; modified: string; jobTitle?: string; html: string;
}

const dir = join(process.cwd(), 'src/content/imported');

function read(kind: 'articles' | 'profiles', slug: string): Imported | null {
  const file = join(dir, kind, `${slug}.json`);
  if (!/^[a-z0-9-]+$/.test(slug) || !existsSync(file)) return null;
  const rec = JSON.parse(readFileSync(file, 'utf8')) as Imported;
  rec.html = rec.html.replace(/href="route:([^"#]+)(#[^"]*)?"/g, (_, key: string, hash = '') => {
    // A link to a page that is not built yet stays as text-only rather than a 404.
    if (!routes[key]) return 'data-missing-route=""';
    return `href="${url(key as RouteKey)}${hash}"`;
  });
  return rec;
}

export const getArticle = (slug: string) => read('articles', slug);
export const getProfile = (slug: string) => read('profiles', slug);
