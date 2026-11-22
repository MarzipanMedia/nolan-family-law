/**
 * Prenups and binding financial agreements, Melbourne: /melbourne/prenuptial-agreements/
 * (D-23, D-52 to D-55). Prototype: export/prenuptial-agreements-melbourne.html. Copy:
 * export/melbourne-prenup-draft-v2.md, word for word. Notes: BUILD-NOTES "Melbourne
 * prenuptial agreements: build notes".
 *
 * A Victorian rewrite, not a city swap of the Sydney page (D-51, D-52). Anastasia is author,
 * Tash reviewer. The LegalService node lives on the hub and is referenced by @id, not
 * repeated. No priceRange, no alumniOf (D-53).
 */
import type { PageModule } from '@/site/types';
import { abs } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'Prenup Lawyers Melbourne | Binding Financial Agreements | Nolan';
const description = 'Bringing a home, business or inheritance into a relationship? Without a valid agreement, a court decides who keeps what. Talk to our Melbourne team.';

export const melbournePrenups: PageModule = {
  title,
  description,
  menuCta: 'Talk to us',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-22', about: abs(key, 'service'), author: personId(people.anastasia.slug), reviewedBy: personId(people.tash.slug) }),
      breadcrumbNode(key, ['home', { key: 'melbourneHub', name: 'Melbourne' }, key]),
      {
        ...serviceNode(key, {
          name: 'Binding financial agreements',
          serviceType: 'Binding financial agreements (prenuptial agreements)',
          description: 'Advice on, and drafting of, binding financial agreements under the Family Law Act 1975 for couples in Victoria, before or during a marriage or de facto relationship, including advice to a partner who has been asked to sign one.',
          office: 'melbourne',
        }),
        areaServed: { '@type': 'State', name: offices.melbourne.stateName },
      },
      personNode('anastasia'),
      // Read off the visible FAQ, so the schema is worded exactly as the page (D-47).
      faqNode(key, faq),
    ),
  Content,
};
