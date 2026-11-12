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
  image: string; date: string; modified: string; jobTitle?: string; h1?: string; key?: string; html: string;
}

const dir = join(process.cwd(), 'src/content/imported');

function read(kind: 'articles' | 'profiles' | 'pages', slug: string): Imported | null {
  const file = join(dir, kind, `${slug}.json`);
  if (!/^[a-zA-Z0-9-]+$/.test(slug) || !existsSync(file)) return null;
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
/** A page carried over from WordPress, by route key (D-22). */
export const getCarryOver = (key: string) => read('pages', key);

import index from '@/content/imported/index.json';
export interface ArticleSummary { slug: string; title: string; date?: string; description?: string }
export interface ProfileSummary { slug: string; title: string; jobTitle?: string; image?: string }
export const articleList = (): ArticleSummary[] => [...(index.articles as ArticleSummary[])].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
/** Profiles in the order the live team page shows them; anyone not on it follows alphabetically. */
export function profileList(): ProfileSummary[] {
  const order = ((index as { teamOrder?: string[] }).teamOrder ?? []);
  const rank = (slug: string) => { const i = order.indexOf(slug); return i === -1 ? 999 : i; };
  return [...(index.profiles as ProfileSummary[])].sort((a, b) => rank(a.slug) - rank(b.slug) || a.title.localeCompare(b.title));
}
