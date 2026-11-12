/**
 * People named in page schema. One record each, so a person's name, title and schema @id
 * are the same on every page and on their profile (BUILD-NOTES: "reuse the same Person @ids").
 *
 * Titles are decided: Tash Nolan is Principal; Jessica Swain and Anastasia Simes are
 * Partners (D-14, D-26). Never "specialist" (D-05). `slug` is the profile's slug in the
 * imported content, which gives the profile URL through the routes file.
 */
import type { OfficeKey } from './offices.ts';

export interface PersonRecord {
  slug: string;
  name: string;
  jobTitle: string;
  office: OfficeKey;
  credentials?: Array<{ name: string; category: string; recognizedBy?: string }>;
  awards?: string[];
  memberOf?: string[];
  knowsAbout?: string[];
}

const AIFLAM = 'Australian Institute of Family Law Arbitrators and Mediators (AIFLAM)';

export const people = {
  tash: {
    slug: 'tash-nolan',
    name: 'Natasha (Tash) Nolan',
    jobTitle: 'Principal',
    office: 'sydney',
    credentials: [
      { name: 'Nationally Accredited Mediator', category: 'Mediator accreditation', recognizedBy: AIFLAM },
      { name: 'Master of Applied Law (Family Law)', category: 'degree' },
    ],
    awards: [
      "Doyle's Guide, Leading Family & Divorce Lawyers – Sydney, 2026",
      "Doyle's Guide, Leading Parenting & Children's Matters, 2026",
      "Doyle's Guide, Leading Family Lawyers – High Net-Worth and Complex Financial Matters, 2026",
    ],
    knowsAbout: ['Family law mediation', 'Property settlement', 'Parenting arrangements'],
  },
  jessica: {
    slug: 'jessica-swain',
    name: 'Jessica Swain',
    jobTitle: 'Partner',
    office: 'sydney',
    credentials: [
      { name: 'Nationally Accredited Mediator', category: 'Mediator accreditation' },
      { name: 'Bachelor of Science (Psychology)', category: 'degree' },
      { name: 'Juris Doctor', category: 'degree' },
    ],
    memberOf: [AIFLAM, 'The Law Society of New South Wales', 'Family Law Section of the Law Council of Australia', 'Women Lawyers Association of NSW'],
    knowsAbout: ['Family law mediation', 'Complex property matters', 'Trust structures'],
  },
  anastasia: {
    slug: 'anastasia-simes',
    name: 'Anastasia Simes',
    jobTitle: 'Partner',
    office: 'melbourne',
    knowsAbout: ['Family law', 'Property settlement', 'Parenting arrangements', 'Divorce', 'Complex financial matters', 'Family law mediation'],
  },
} satisfies Record<string, PersonRecord>;

export type PersonKey = keyof typeof people;
export const personBySlug = (slug: string): PersonRecord | undefined => Object.values(people).find((p) => p.slug === slug);
