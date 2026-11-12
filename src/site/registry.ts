/**
 * Which page is served for each route key. A route in the routes file becomes 'live' once it
 * has an entry here (designed pages) or imported content (articles and profiles).
 */
import type { StaticRouteKey } from '@/config/routes';
import type { PageModule } from './types';
import { home } from './pages/home/page';
import { sydneyChildCustody } from './pages/sydney-child-custody/page';
import { melbourneHub } from './pages/melbourne-hub/page';
import { sydneyMediation } from './pages/sydney-mediation/page';
import { sydneyProperty } from './pages/sydney-property/page';
import { team } from './pages/team/page';
import { resources } from './pages/resources/page';
import { contact } from './pages/contact/page';

export const pages: Partial<Record<StaticRouteKey, PageModule>> = {
  home,
  sydneyChildCustody,
  melbourneHub,
  sydneyMediation,
  sydneyProperty,
  team,
  resources,
  contact,
};
