/**
 * Main navigation and footer link lists. Labels only: every destination is a route key,
 * resolved through the routes file (D-25). The footer is identical on every page
 * (DESIGN.md §5): no suburb links.
 */
import { route, type City, type RouteKey } from './routes.ts';

export interface NavItem { label: string; to: RouteKey }

/**
 * The header follows the page's city (D-49). Each service item names its Sydney and its
 * Melbourne page; pages with no city get the Sydney links. Plain server-rendered links:
 * no location detection, no cookies, no redirects.
 */
interface CityNavItem { label: string; sydney: RouteKey; melbourne: RouteKey }

const cityNav: CityNavItem[] = [
  { label: 'Protecting my children', sydney: 'sydneyChildCustody', melbourne: 'melbourneChildCustody' },
  { label: 'Dividing property and assets', sydney: 'sydneyProperty', melbourne: 'melbourneProperty' },
  { label: 'Separation and divorce', sydney: 'sydneyHub', melbourne: 'melbourneHub' },
  { label: 'Prenups and BFAs', sydney: 'sydneyPrenups', melbourne: 'melbournePrenups' },
  { label: 'Our People', sydney: 'team', melbourne: 'team' },
  { label: 'Mediation', sydney: 'sydneyMediation', melbourne: 'melbourneMediation' },
];

/** The header and mobile menu links for a page in this city. */
export function mainNavFor(city: City): NavItem[] {
  return cityNav.map((i) => ({ label: i.label, to: city === 'melbourne' ? i.melbourne : i.sydney }));
}

/** Kept for anything that wants the city-less list (it is the Sydney one). */
export const mainNav: NavItem[] = mainNavFor(null);

/** Pages that exist in both cities. The city switch links each to the other (D-49). */
const TWINS: Array<[RouteKey, RouteKey]> = cityNav.filter((i) => i.sydney !== i.melbourne).map((i) => [i.sydney, i.melbourne]);

/**
 * Where the city switch on a page points: the same service in the other city, or that
 * city's hub when the page has no twin (or its twin is not built yet).
 */
export function citySwitchFor(key: RouteKey, city: City): { to: RouteKey; city: 'sydney' | 'melbourne' } | null {
  if (!city) return null;
  const other = city === 'melbourne' ? 'sydney' : 'melbourne';
  const pair = TWINS.find(([s, m]) => s === key || m === key);
  const twin = pair ? (city === 'melbourne' ? pair[0] : pair[1]) : null;
  const to = twin && route(twin).status === 'live' ? twin : other === 'sydney' ? 'sydneyHub' : 'melbourneHub';
  return { to, city: other };
}

/** Every twin pair, for the twin test (D-51) and the switch check. */
export const twinPairs = TWINS;

export const footerColumns: Array<{ heading: string; links: NavItem[] }> = [
  {
    heading: 'Sydney',
    links: [
      { label: 'Sydney family lawyers', to: 'sydneyHub' },
      { label: 'Child custody', to: 'sydneyChildCustody' },
      { label: 'Property settlement', to: 'sydneyProperty' },
      { label: 'Prenuptial agreements', to: 'sydneyPrenups' },
    ],
  },
  {
    heading: 'Melbourne',
    links: [
      { label: 'Melbourne family lawyers', to: 'melbourneHub' },
      { label: 'Child custody', to: 'melbourneChildCustody' },
      { label: 'Property settlement', to: 'melbourneProperty' },
      { label: 'Prenuptial agreements', to: 'melbournePrenups' },
    ],
  },
  {
    heading: 'The firm',
    links: [
      { label: 'Our people', to: 'team' },
      { label: 'Mediation', to: 'sydneyMediation' },
      { label: 'Fees', to: 'fees' },
      { label: 'Contact us', to: 'contact' },
    ],
  },
];

export const legalLinks: NavItem[] = [
  { label: 'Privacy policy', to: 'privacy' },
  { label: 'Disclaimer', to: 'disclaimer' },
];
