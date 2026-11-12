/**
 * Homepage: / . The most important page on the site: about 48% of Google clicks (D-17).
 * Prototype: export/homepage.html.
 *
 * D-33: the title and H1 are the live site's, word for word. Do not change either without a
 * new decision. The prototype's headline stays as the large display line, not the H1.
 * The meta description is new, because the live one says "specialists" (D-05).
 */
import type { PageModule } from '@/site/types';
import { abs, SITE_ORIGIN } from '@/config/routes';
import { graph, webPageNode, officeNode, faqNode } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'Doyles-Recommended Family Lawyers Sydney | Mediation Service';
const description = "Doyle's Guide recognised family lawyers in Sydney and Melbourne. Clear, practical advice on divorce, parenting, property settlement and mediation.";

export const home: PageModule = {
  title,
  description,
  menuCta: 'Book a consultation',
  schema: (key) =>
    graph(
      { '@type': 'WebSite', '@id': `${SITE_ORIGIN}/#website`, url: abs('home'), name: 'Nolan Family Law & Mediation', inLanguage: 'en-AU' },
      { ...webPageNode(key, { title, description, breadcrumb: false }), isPartOf: { '@id': `${SITE_ORIGIN}/#website` } },
      officeNode('sydney'),
      officeNode('melbourne'),
      faqNode(key, faq),
    ),
  Content,
};
