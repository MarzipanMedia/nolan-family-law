/**
 * Divorce lawyers, Sydney: /sydney/divorce-lawyer/ (D-23, D-58). Prototype:
 * export/sydney-divorce-lawyer.html. Copy: export/sydney-divorce-draft-v1.md, word for word.
 * Notes: BUILD-NOTES "Sydney divorce: build notes".
 *
 * Follows the law from 10 June 2025 (D-59): no counselling certificate for marriages under
 * two years, and no compulsory attendance for a sole applicant just because there are children.
 * Tash is author and reviewer, as on the property and prenup pages; Jessica is the second card
 * and the Person node from the Sydney mediation page. The Sydney office node is repeated as on
 * the other Sydney service pages. No priceRange, no alumniOf (D-53).
 */
import type { PageModule } from '@/site/types';
import { abs } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'Divorce Lawyers Sydney | Nolan Family Law & Mediation';
const description = 'Divorce ends a marriage but settles nothing else, and it starts a 12 month clock on property claims. Our Sydney family lawyers help you with both.';
const tash = personId(people.tash.slug);

export const sydneyDivorce: PageModule = {
  title,
  description,
  menuCta: 'Talk to us',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, dateModified: '2026-11-27', about: abs(key, 'service'), author: tash, reviewedBy: tash }),
      breadcrumbNode(key, ['home', { key: 'sydneyHub', name: 'Sydney' }, key]),
      officeNode('sydney'),
      {
        ...serviceNode(key, {
          name: 'Divorce',
          serviceType: 'Divorce applications under the Family Law Act 1975',
          description: 'Advice on, and preparation of, joint and sole divorce applications to the Federal Circuit and Family Court of Australia for people in New South Wales, including service, affidavits for separation under one roof and hearings, alongside the property, maintenance and parenting arrangements a divorce leaves open.',
          office: 'sydney',
        }),
        alternateName: 'Divorce applications',
        areaServed: { '@type': 'State', name: offices.sydney.stateName },
      },
      // Leads with her Family & Divorce listing on this page.
      personNode('tash', {
        knowsAbout: ['Divorce', 'Property settlement', 'Parenting arrangements', 'Spousal maintenance', 'High net-worth and complex financial matters', 'Family law mediation'],
      }),
      // The node from the Sydney mediation page, unchanged.
      personNode('jessica'),
      // Read off the visible FAQ, so the schema is worded exactly as the page (D-47).
      faqNode(key, faq),
    ),
  Content,
};
