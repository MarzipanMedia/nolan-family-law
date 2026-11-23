/**
 * Prenups and binding financial agreements, Sydney: /sydney/prenuptial-agreements/
 * (D-23, D-57). Prototype: export/prenuptial-agreements-sydney.html. Copy:
 * export/sydney-prenup-draft-v1.md, word for word. Notes: BUILD-NOTES "Sydney
 * prenuptial agreements: build notes".
 *
 * A NSW rewrite, not a city swap of the Melbourne page (D-51): wills under the Succession Act,
 * notional estate, relationship registration and transfer duty. Tash is author and reviewer,
 * as on the property page, and the Sydney office node is repeated as it is there.
 * No priceRange, no alumniOf (D-38).
 */
import type { PageModule } from '@/site/types';
import { abs } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'Prenup Lawyers Sydney | Prenuptial Agreements & BFAs | Nolan';
const description = 'Bringing a home, business or family trust into a marriage? In NSW, marrying can also cancel your will. Our Sydney team helps you plan both properly.';
const tash = personId(people.tash.slug);

export const sydneyPrenups: PageModule = {
  title,
  description,
  menuCta: 'Talk to us',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-23', about: abs(key, 'service'), author: tash, reviewedBy: tash }),
      breadcrumbNode(key, ['home', { key: 'sydneyHub', name: 'Sydney' }, key]),
      officeNode('sydney'),
      {
        ...serviceNode(key, {
          name: 'Binding financial agreements',
          serviceType: 'Binding financial agreements under the Family Law Act 1975',
          description: 'Advice on, and drafting of, binding financial agreements under the Family Law Act 1975 for couples in New South Wales, before, during or after a marriage or de facto relationship, planned alongside their wills, including advice to a partner who has been asked to sign one.',
          office: 'sydney',
        }),
        alternateName: 'Prenuptial agreements',
        areaServed: { '@type': 'State', name: offices.sydney.stateName },
      },
      // As on the property page: Tash leads with her High Net-Worth and Complex Financial Matters listing.
      personNode('tash', {
        awards: [
          "Doyle's Guide, Leading Family Lawyers – High Net-Worth and Complex Financial Matters, 2026",
          "Doyle's Guide, Leading Family & Divorce Lawyers – Sydney, 2026",
          "Doyle's Guide, Leading Parenting & Children's Matters, 2026",
        ],
        knowsAbout: ['Property settlement', 'Consent orders', 'Binding financial agreements', 'High net-worth and complex financial matters', 'Superannuation splitting', 'Family law mediation'],
      }),
      // Read off the visible FAQ, so the schema is worded exactly as the page (D-47).
      faqNode(key, faq),
    ),
  Content,
};
