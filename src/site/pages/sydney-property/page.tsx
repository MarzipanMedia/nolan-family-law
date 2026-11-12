/**
 * Property settlement, Sydney: /sydney/property-settlement/ (D-15, D-23).
 * Prototype: export/property-settlement-sydney.html. Notes: BUILD-NOTES "Property settlement".
 * Keep the #consent-vs-bfa anchor exactly: it may become the target for /consent-orders/ (Q-3).
 */
import type { PageModule } from '@/site/types';
import { abs } from '@/config/routes';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { people } from '@/config/people';
import { Content } from './content';
import { faq } from './faq';

const title = 'Property Settlement Lawyers Sydney | Consent Orders | Nolan';
const description = 'Unsure what you are entitled to after separation? Time limits apply, and informal deals are not binding. Our Sydney family lawyers help you settle properly.';
const tash = personId(people.tash.slug);

export const sydneyProperty: PageModule = {
  title,
  description,
  menuCta: 'Talk to us about your settlement',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-10', about: abs(key, 'service'), author: tash, reviewedBy: tash }),
      breadcrumbNode(key, ['home', { key: 'sydneyHub', name: 'Sydney' }, key]),
      officeNode('sydney'),
      serviceNode(key, {
        name: 'Property settlement lawyers in Sydney',
        serviceType: 'Family law property settlement',
        description: 'Advice and representation for separated married and de facto couples in Sydney dividing property, superannuation and debts, including consent orders, binding financial agreements, superannuation splitting, complex financial and business structures, and court proceedings where agreement cannot be reached.',
        office: 'sydney',
        videoChannel: 'Telephone and video conference',
        catalogName: 'Property settlement services',
        offers: ['Consent orders for property settlement', 'Binding financial agreements', 'Superannuation splitting', 'Complex and high net-worth financial matters', 'De facto property settlement'],
      }),
      // On this page Tash leads with her High Net-Worth and Complex Financial Matters listing.
      personNode('tash', {
        awards: [
          "Doyle's Guide, Leading Family Lawyers – High Net-Worth and Complex Financial Matters, 2026",
          "Doyle's Guide, Leading Family & Divorce Lawyers – Sydney, 2026",
          "Doyle's Guide, Leading Parenting & Children's Matters, 2026",
        ],
        knowsAbout: ['Property settlement', 'Consent orders', 'Binding financial agreements', 'High net-worth and complex financial matters', 'Superannuation splitting', 'Family law mediation'],
      }),
      faqNode(key, faq),
    ),
  Content,
};
