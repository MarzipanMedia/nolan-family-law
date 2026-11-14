/**
 * City hubs. Each city is one entry (src/site/city-hubs/<city>.tsx) fed to the one template
 * (src/site/templates/CityHubTemplate.tsx). To add a city: add its routes and office, write
 * its entry, and list it here.
 */
import type { PageModule } from '@/site/types';
import { abs, isLive, type RouteKey } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, officeId, personId } from '@/lib/schema';
import { plain } from '@/lib/text';
import { CityHubTemplate } from '@/site/templates/CityHubTemplate';
import type { CityHubConfig } from './types';
import { melbourne } from './melbourne';
import { sydney } from './sydney';

const pid = (key: keyof typeof people) => personId(people[key].slug);

export function cityHubPage(hub: CityHubConfig): PageModule {
  const o = offices[hub.office];
  const office = officeId(hub.office);
  return {
    title: hub.title,
    description: hub.description,
    menuCta: hub.cta,
    schema: (key: RouteKey) =>
      graph(
        webPageNode(key, {
          title: hub.title,
          description: hub.description,
          dateModified: hub.dateModified,
          about: office,
          ...(hub.author ? { author: pid(hub.author) } : {}),
          reviewedBy: pid(hub.reviewer),
        }),
        breadcrumbNode(key, ['home', key]),
        officeNode(hub.office, {
          employee: hub.employees.length === 1 ? { '@id': pid(hub.employees[0]) } : hub.employees.map((e) => ({ '@id': pid(e) })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Family law services in ${o.city}`,
            itemListElement: hub.offers
              .filter((s) => !s.liveOnly || isLive(s.to))
              .map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.name, url: abs(s.to, s.hash), provider: { '@id': office }, areaServed: { '@type': 'State', name: o.stateName } },
              })),
          },
        }),
        { ...personNode(hub.leadPerson.key, hub.leadPerson.overrides), workLocation: { '@id': office } },
        // Read off the visible FAQ, so the schema is worded exactly as the page.
        faqNode(key, hub.faq.map((f) => ({ q: f.q, a: plain(f.a) }))),
      ),
    Content: () => <CityHubTemplate hub={hub} />,
  };
}

export const cityHubs = { melbourne, sydney };
export const melbourneHub = cityHubPage(melbourne);
export const sydneyHub = cityHubPage(sydney);

export type { CityHubConfig };
