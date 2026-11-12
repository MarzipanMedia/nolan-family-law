/**
 * Family law mediation, Sydney: /sydney/mediation/ (D-09, D-10, D-23).
 * Prototype: export/mediation-sydney.html. Notes: BUILD-NOTES "Mediation (Sydney)".
 * Do not add "we can issue your section 60I certificate" (D-13).
 */
import type { PageModule } from '@/site/types';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { people } from '@/config/people';
import { abs } from '@/config/routes';
import { offices } from '@/config/offices';
import { Content } from './content';
import { faq } from './faq';

const title = 'Family Mediation Sydney | Family Law Mediators | Nolan';
const description = 'Disputes over children or property can drag on for months in court. Our Sydney family lawyer mediators help you reach your own agreement, privately.';

export const sydneyMediation: PageModule = {
  title,
  description,
  menuCta: 'Enquire about mediation',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-08', about: abs(key, 'service'), reviewedBy: personId(people.tash.slug) }),
      breadcrumbNode(key, ['home', { key: 'sydneyHub', name: 'Sydney' }, key]),
      officeNode('sydney'),
      serviceNode(key, {
        name: 'Family law mediation in Sydney',
        serviceType: 'Family law mediation',
        description: `Confidential mediation for separated couples to reach their own agreement about parenting arrangements, property or both, led by Nationally Accredited Mediators Tash Nolan and Jessica Swain, both experienced family lawyers, at ${offices.sydney.streetShort}, Sydney, or by video, as a half-day or full-day session.`,
        office: 'sydney',
      }),
      personNode('tash'),
      personNode('jessica'),
      faqNode(key, faq),
    ),
  Content,
};
