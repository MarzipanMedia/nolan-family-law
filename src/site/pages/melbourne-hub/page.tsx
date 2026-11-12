/**
 * Melbourne hub: /melbourne/family-law/ (D-23, D-32). The first city hub and the reference
 * for the city hub template. The most valuable page that moves at launch.
 * Prototype: export/melbourne-family-law.html. Notes: BUILD-NOTES "Melbourne hub".
 */
import type { PageModule } from '@/site/types';
import { abs, isLive } from '@/config/routes';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, officeId, personId } from '@/lib/schema';
import { people } from '@/config/people';
import { Content } from './content';
import { faq } from './faq';

const title = 'Family Lawyers & Mediation Melbourne | Nolan Family Law';
const description = 'Separating in Victoria and unsure where to start? Time limits run from separation and divorce. Our Melbourne family lawyers and mediators can help you.';

const service = (name: string, url: string) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url, provider: { '@id': officeId('melbourne') } } });

export const melbourneHub: PageModule = {
  title,
  description,
  menuCta: 'Talk to our Melbourne team',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-12', about: officeId('melbourne'), reviewedBy: personId(people.anastasia.slug) }),
      breadcrumbNode(key, ['home', key]),
      officeNode('melbourne', {
        employee: { '@id': personId(people.anastasia.slug) },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Family law services in Melbourne',
          itemListElement: [
            service('Child custody and parenting arrangements', abs('melbourneChildCustody')),
            service('Property settlement', abs('melbourneProperty')),
            service('Family law mediation', abs('melbourneMediation')),
            service('Prenuptial and binding financial agreements', abs('melbournePrenups')),
            service('Separation and divorce', abs(key, 'divorce')),
            // The article is planned (D-28): list the service once its page exists.
            ...(isLive('articleSpousalMaintenanceMelbourne') ? [service('Spousal maintenance', abs('articleSpousalMaintenanceMelbourne'))] : []),
          ],
        },
      }),
      { ...personNode('anastasia'), workLocation: { '@id': officeId('melbourne') } },
      faqNode(key, faq),
    ),
  Content,
};
