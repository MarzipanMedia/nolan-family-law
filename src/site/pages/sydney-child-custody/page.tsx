/**
 * Child custody lawyer, Sydney: /sydney/child-custody-lawyer/ (D-01, D-23).
 * Prototype: export/child-custody-sydney.html. Notes: BUILD-NOTES (child custody sections).
 * No quick exit (D-07): the prototype still had one and it has been left out.
 * Body copy says "parenting arrangements"; "child custody" stays in headings for search (D-05).
 */
import type { PageModule } from '@/site/types';
import { graph, webPageNode, breadcrumbNode, officeNode, faqNode, officeId } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'Child Custody Lawyer Sydney | Parenting Arrangements | Nolan';
const description = 'Experienced Sydney family lawyers helping parents agree parenting plans and consent orders after separation. Clear advice, costs discussed up front.';

export const sydneyChildCustody: PageModule = {
  title,
  description,
  menuCta: 'Book a consultation',
  schema: (key) =>
    graph(
      webPageNode(key, { title, description, about: officeId('sydney') }),
      breadcrumbNode(key, ['home', { key: 'sydneyHub', name: 'Sydney' }, key]),
      officeNode('sydney'),
      // All ten questions, read off the visible FAQ (the prototype's schema listed four).
      faqNode(key, faq),
    ),
  Content,
};
