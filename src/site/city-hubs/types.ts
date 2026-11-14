/**
 * One city hub entry (BUILD-NOTES "City hub template"). The structure is the same for every
 * city; only content and config change. Every URL is a route key (D-25) and every office
 * detail comes from the office config, so an entry never writes a URL or phone number.
 */
import type { ReactNode } from 'react';
import type { RouteKey, StaticRouteKey } from '@/config/routes';
import type { OfficeKey } from '@/config/offices';
import type { PersonKey, PersonRecord } from '@/config/people';
import type { ImageAsset } from '@/components/Picture';
import type { Badge } from '@/site/images';

/** Where a card goes: a page in the routes file, or a section on this page. */
export type Destination = RouteKey | '#book' | `#${string}`;

export interface GuideSection {
  /** The anchor id, e.g. "timelimits". */
  id: string;
  /** Label in "On this page". */
  toc: string;
  /** data-screen-label. */
  label: string;
  /** The question-led H2. */
  h2: string;
  /** One entry per paragraph. */
  body: ReactNode[];
  inShort: string;
}

export interface CityHubConfig {
  route: StaticRouteKey;
  office: OfficeKey;
  title: string;
  description: string;
  dateModified: string;
  /** Primary button label, also used at the foot of the mobile menu. */
  cta: string;

  /** Schema: the page's author (if any) and reviewer, and the office's employees. */
  author?: PersonKey;
  reviewer: PersonKey;
  employees: PersonKey[];
  /** The city lead's Person node, with any page-specific changes (e.g. knowsAbout). */
  leadPerson: { key: PersonKey; overrides?: Partial<PersonRecord> };
  /** The offer catalog (six services). `liveOnly` drops an offer until its page exists. */
  offers: Array<{ name: string; to: RouteKey; hash?: string; liveOnly?: boolean }>;

  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    paragraphs: ReactNode[];
    portrait: { img: ImageAsset; alt: string; width: string; maxWidth: string; blend?: boolean };
    nameCard: { name: string; role: string };
    facts: Array<{ title: ReactNode; text: string }>;
  };
  byline: { prefix: string; person: RouteKey; name: string; role: string; updated: string };
  subheading: string;
  quickAnswer: { question: string; answer: ReactNode };

  badges: Badge[];
  /** Max width of the badge row: about 860px for four badges, 1100px for six. */
  badgeRowWidth: string;

  helpLede: string;
  routingCards: Array<{ title: string; text: string; to: Destination }>;

  /** The guide, in order. Any number of sections; each city has its own list. */
  sections: GuideSection[];
  /** The one mid-page prompt (D-31) sits after this section. */
  midAfter: string;
  mid: { text: string; img: ImageAsset; objectPosition: string };

  lawyer: {
    h2: string;
    lead: { img: ImageAsset; alt: string; name: string; role: string; body: Array<ReactNode | { list: string[] }> };
    second: { img: ImageAsset; alt: string; body: ReactNode };
  };
  reviewsHeading: string;

  toggle: { to: RouteKey; eyebrow: string; title: ReactNode; text: string };
  guides: { label: string; eyebrow: string; h2: string; cards: Array<{ title: string; text: string; to: RouteKey; liveOnly?: boolean }> };

  faqHeading: string;
  /** All in FAQPage schema. The schema text is read off `a`, so it always matches the page. */
  faq: Array<{ q: string; a: ReactNode }>;

  contact: { lede: string; address: string };
}
