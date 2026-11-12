/**
 * Main navigation and footer link lists. Labels only: every destination is a route key,
 * resolved through the routes file (D-25). The footer is identical on every page
 * (DESIGN.md §5): no suburb links.
 */
import type { RouteKey } from './routes.ts';

export interface NavItem { label: string; to: RouteKey }

export const mainNav: NavItem[] = [
  { label: 'Protecting my children', to: 'sydneyChildCustody' },
  { label: 'Dividing property and assets', to: 'sydneyProperty' },
  { label: 'Separation and divorce', to: 'sydneyHub' },
  { label: 'Prenups and BFAs', to: 'sydneyPrenups' },
  { label: 'Our People', to: 'team' },
  { label: 'Mediation', to: 'sydneyMediation' },
];

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
