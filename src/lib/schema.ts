/**
 * The schema generator. Every JSON-LD node on the site is built here from the routes file,
 * the office config and the people config, so @ids, URLs, phone numbers and addresses can
 * never drift from the page or from the Google Business Profile.
 *
 * @id pattern (same as the prototypes): <absolute page URL>#webpage | #breadcrumb | #service |
 * #faq, <city hub URL>#office, <profile URL>#person.
 */
import { abs, route, profileKey, type RouteKey } from '@/config/routes';
import { offices, type OfficeKey } from '@/config/offices';
import { people, type PersonKey, type PersonRecord } from '@/config/people';

type Node = Record<string, unknown>;
const ref = (id: string) => ({ '@id': id });

export const officeId = (office: OfficeKey) => abs(offices[office].hub, 'office');
export const personId = (slug: string) => abs(profileKey(slug), 'person');

export function officeNode(office: OfficeKey, extra: Node = {}): Node {
  const o = offices[office];
  return {
    '@type': 'LegalService',
    '@id': officeId(office),
    name: o.name,
    url: abs(o.hub),
    telephone: o.phoneSchema,
    address: { '@type': 'PostalAddress', streetAddress: o.street, addressLocality: o.suburb, addressRegion: o.state, postalCode: o.postcode, addressCountry: 'AU' },
    areaServed: [{ '@type': 'City', name: o.city }, { '@type': 'State', name: o.stateName }],
    ...extra,
  };
}

export function personNode(key: PersonKey | PersonRecord, overrides: Partial<PersonRecord> = {}): Node {
  const p = { ...(typeof key === 'string' ? people[key] : key), ...overrides } as PersonRecord;
  return {
    '@type': 'Person',
    '@id': personId(p.slug),
    name: p.name,
    jobTitle: p.jobTitle,
    url: abs(profileKey(p.slug)),
    worksFor: ref(officeId(p.office)),
    ...(p.credentials?.length ? { hasCredential: p.credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c.name, credentialCategory: c.category, ...(c.recognizedBy ? { recognizedBy: { '@type': 'Organization', name: c.recognizedBy } } : {}) })) } : {}),
    ...(p.awards?.length ? { award: p.awards } : {}),
    ...(p.memberOf?.length ? { memberOf: p.memberOf.map((name) => ({ '@type': 'Organization', name })) } : {}),
    ...(p.knowsAbout?.length ? { knowsAbout: p.knowsAbout } : {}),
  };
}

interface WebPageOpts { title: string; description?: string; dateModified?: string; about?: string; reviewedBy?: string; author?: string; breadcrumb?: boolean; type?: string }
export function webPageNode(key: RouteKey, o: WebPageOpts): Node {
  return {
    '@type': o.type ?? 'WebPage',
    '@id': abs(key, 'webpage'),
    url: abs(key),
    name: o.title,
    ...(o.description ? { description: o.description } : {}),
    inLanguage: 'en-AU',
    ...(o.dateModified ? { dateModified: o.dateModified } : {}),
    ...(o.about ? { about: ref(o.about) } : {}),
    ...(o.author ? { author: ref(o.author) } : {}),
    ...(o.reviewedBy ? { reviewedBy: ref(o.reviewedBy) } : {}),
    ...(o.breadcrumb === false ? {} : { breadcrumb: ref(abs(key, 'breadcrumb')) }),
  };
}

export type Crumb = RouteKey | { key: RouteKey; name: string };
/** Home → … → this page. Names default to each route's label. */
export function breadcrumbNode(key: RouteKey, trail: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(key, 'breadcrumb'),
    itemListElement: trail.map((c, i) => {
      const k = typeof c === 'string' ? c : c.key;
      return { '@type': 'ListItem', position: i + 1, name: typeof c === 'string' ? route(k).label : c.name, item: abs(k) };
    }),
  };
}

export function faqNode(key: RouteKey, faq: Array<{ q: string; a: string }>): Node {
  return {
    '@type': 'FAQPage',
    '@id': abs(key, 'faq'),
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

interface ServiceOpts { name: string; serviceType: string; description: string; office: OfficeKey; videoChannel?: string; offers?: string[]; catalogName?: string }
export function serviceNode(key: RouteKey, s: ServiceOpts): Node {
  const o = offices[s.office];
  return {
    '@type': 'Service',
    '@id': abs(key, 'service'),
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    provider: ref(officeId(s.office)),
    areaServed: [{ '@type': 'City', name: o.city }, { '@type': 'State', name: o.stateName }],
    availableChannel: [{ '@type': 'ServiceChannel', serviceLocation: ref(officeId(s.office)) }, { '@type': 'ServiceChannel', name: s.videoChannel ?? 'Video conference' }],
    ...(s.offers?.length ? { hasOfferCatalog: { '@type': 'OfferCatalog', name: s.catalogName ?? s.name, itemListElement: s.offers.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })) } } : {}),
  };
}

export const graph = (...nodes: Node[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
