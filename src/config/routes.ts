/**
 * THE ROUTES FILE (D-25).
 *
 * This is the only place a URL is written. Nav, footer, internal links, breadcrumbs,
 * canonicals, schema @ids, the sitemap and the redirect checks all read from here.
 *
 * URL_MODE=B is the launch setting (D-23): service pages live under /sydney/ and /melbourne/.
 * URL_MODE=A is the fallback (today's URLs) if the redirect test is not at 100% at go/no-go.
 *
 * `a` is the path under option A, `b` under option B. They match REDIRECT-MAP.csv, and
 * scripts/generate-redirects.mjs fails the build if the two ever disagree.
 *
 * This file must stay importable by plain Node (the scripts use it), so: no path aliases,
 * no enums, and nothing from Next.
 */
import imported from '../content/imported/index.json' with { type: 'json' };

export type UrlMode = 'A' | 'B';
export const URL_MODE: UrlMode = process.env.URL_MODE === 'A' ? 'A' : 'B';

/** The public origin. Canonicals and schema always use it, on staging too. */
export const SITE_ORIGIN = 'https://www.nolanlawyers.com.au';

export type City = 'sydney' | 'melbourne' | null;
export type RouteKind = 'page' | 'article' | 'profile';

export interface RouteDef {
  a: string;
  b: string;
  /** Which office leads in the header on this page (D-30). null = no city, Sydney first. */
  city: City;
  kind: RouteKind;
  /** false = the page exists but carries noindex and stays out of the sitemap. */
  indexable: boolean;
  /**
   * 'live' = built and served. 'planned' = has a final URL but no page yet. Links to planned
   * routes are reported by `npm run check`, and optional cards that point at them are hidden.
   */
  status: 'live' | 'planned';
  /** Short label for breadcrumbs and reports. */
  label: string;
}

const page = (
  label: string,
  a: string,
  b: string = a,
  opts: Partial<Pick<RouteDef, 'city' | 'indexable' | 'status'>> = {},
): RouteDef => ({ label, a, b, kind: 'page', city: null, indexable: true, status: 'planned', ...opts });

const SYD = { city: 'sydney' } as const;
const MEL = { city: 'melbourne' } as const;
const LIVE = { status: 'live' } as const;

const staticRoutes = {
  home: page('Home', '/', '/', LIVE),

  // Sydney
  sydneyHub: page('Sydney family law', '/family-lawyer/', '/sydney/family-law/', SYD),
  sydneyChildCustody: page('Child custody lawyer', '/child-custody-lawyer-sydney/', '/sydney/child-custody-lawyer/', { ...SYD, ...LIVE }),
  sydneyProperty: page('Property settlement', '/property-settlement/', '/sydney/property-settlement/', { ...SYD, ...LIVE }),
  sydneyMediation: page('Family law mediation', '/sydney-family-law-mediation/', '/sydney/mediation/', { ...SYD, ...LIVE }),
  sydneyPrenups: page('Prenuptial agreements', '/prenuptial-agreement-sydney/', '/sydney/prenuptial-agreements/', SYD),
  sydneyDivorce: page('Divorce lawyer', '/divorce-lawyer/', '/sydney/divorce-lawyer/', SYD),
  sydneyDeFacto: page('De facto relationships', '/de-facto-relationship-lawyer/', '/sydney/de-facto-relationship-lawyer/', SYD),
  sydneyDomesticViolence: page('Domestic violence', '/domestic-violence/', '/sydney/domestic-violence/', SYD),
  sydneyCollaborative: page('Collaborative family law', '/collaborative-family-lawyer-sydney/', '/sydney/collaborative-family-law/', SYD),
  sydneyConsentOrders: page('Consent orders', '/consent-orders/', '/sydney/consent-orders/', SYD),

  // Melbourne
  melbourneHub: page('Melbourne family law', '/melbourne-family-law/', '/melbourne/family-law/', { ...MEL, ...LIVE }),
  melbourneChildCustody: page('Child custody lawyer', '/melbourne-family-law/child-custody-lawyer-melbourne/', '/melbourne/child-custody-lawyer/', MEL),
  melbourneProperty: page('Property settlement', '/melbourne-family-law/property-settlement-melbourne/', '/melbourne/property-settlement/', MEL),
  melbournePrenups: page('Prenuptial agreements', '/melbourne-family-law/prenuptial-agreement-melbourne/', '/melbourne/prenuptial-agreements/', MEL),
  melbourneMediation: page('Family law mediation', '/melbourne-mediation/', '/melbourne/mediation/', MEL),

  // The firm (same URL under both options, D-21 and D-23)
  team: page('Our people', '/our-team/'),
  about: page('About us', '/about-us/'),
  doyles: page("Doyle's recommended", '/about-us/doyles-recommended/'),
  contact: page('Contact', '/contact/'),
  fees: page('Fees', '/fees/'),
  resources: page('Resources', '/resources/'),
  privacy: page('Privacy policy', '/privacy-policy/'),
  disclaimer: page('Disclaimer', '/disclaimer/'),

  // Kept working, never indexed
  adsLanding: page('Enquiry', '/lp/', '/lp/', { indexable: false }),
  thanksEnquiry: page('Thank you', '/thanks-enquiry/', '/thanks-enquiry/', { indexable: false }),

  // New Melbourne articles (D-28). Planned until reworked, legally reviewed and imported.
  articleDeFactoVictoria: { ...page('De facto property rights in Victoria', '/de-facto-property-rights-victoria/', undefined, MEL), kind: 'article' },
  articleSeparationVsDivorceVictoria: { ...page('Separation vs divorce in Victoria', '/separation-vs-divorce-victoria/', undefined, MEL), kind: 'article' },
  articleSpousalMaintenanceMelbourne: { ...page('Spousal maintenance in Melbourne', '/spousal-maintenance-melbourne/', undefined, MEL), kind: 'article' },
  articleFamilyViolencePropertyVictoria: { ...page('Family violence and property settlements in Victoria', '/family-violence-property-settlement-victoria/', undefined, MEL), kind: 'article' },
} satisfies Record<string, RouteDef>;

export type StaticRouteKey = keyof typeof staticRoutes;

/**
 * Articles and profiles imported from WordPress (D-35). Their paths are exactly the live
 * paths (D-21), recorded once by the import script in src/content/imported/index.json.
 */
interface ImportedEntry { slug: string; path: string; title: string; city?: City }
const importedRoutes: Record<string, RouteDef> = {};
for (const a of imported.articles as ImportedEntry[]) {
  importedRoutes[`article:${a.slug}`] = { label: a.title, a: a.path, b: a.path, kind: 'article', city: a.city ?? null, indexable: true, status: 'live' };
}
for (const p of imported.profiles as ImportedEntry[]) {
  importedRoutes[`profile:${p.slug}`] = { label: p.title, a: p.path, b: p.path, kind: 'profile', city: p.city ?? null, indexable: true, status: 'live' };
}

export type RouteKey = StaticRouteKey | `article:${string}` | `profile:${string}`;

export const routes: Record<string, RouteDef> = { ...staticRoutes, ...importedRoutes };

export function route(key: RouteKey): RouteDef {
  const r = routes[key];
  if (!r) throw new Error(`Unknown route "${key}". Every URL must come from src/config/routes.ts (D-25).`);
  return r;
}

/** The path for a route under the current URL_MODE, e.g. url('sydneyMediation') → "/sydney/mediation/". */
export function url(key: RouteKey, hash?: string): string {
  const r = route(key);
  return (URL_MODE === 'A' ? r.a : r.b) + (hash ? `#${hash}` : '');
}

/** The absolute public URL, for canonicals, schema and the sitemap. */
export function abs(key: RouteKey, hash?: string): string {
  return SITE_ORIGIN + url(key, hash);
}

export const articleKey = (slug: string): RouteKey => `article:${slug}`;
export const profileKey = (slug: string): RouteKey => `profile:${slug}`;

export function isLive(key: RouteKey): boolean {
  return route(key).status === 'live';
}

/** Find the route served at a path under the current URL_MODE. */
export function routeForPath(path: string): { key: RouteKey; def: RouteDef } | null {
  for (const [key, def] of Object.entries(routes)) {
    if ((URL_MODE === 'A' ? def.a : def.b) === path) return { key: key as RouteKey, def };
  }
  return null;
}

export function allRoutes(): Array<{ key: RouteKey; def: RouteDef; path: string }> {
  return Object.entries(routes).map(([key, def]) => ({ key: key as RouteKey, def, path: URL_MODE === 'A' ? def.a : def.b }));
}
