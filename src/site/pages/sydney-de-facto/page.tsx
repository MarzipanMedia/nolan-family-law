/**
 * De facto relationship lawyers, Sydney: /sydney/de-facto-relationship-lawyer/ (D-23, D-60).
 * Prototype: export/sydney-de-facto-relationship-lawyer.html. Copy: export/sydney-de-facto-draft-v1.md,
 * word for word. Notes: BUILD-NOTES "Sydney de facto relationships: build notes".
 *
 * Property and maintenance follow the Family Law Act as amended on 10 June 2025 (Part VIIIAB).
 * Tash is author and reviewer, as on the property, prenup and divorce pages; Jessica is the second
 * card and the Person node from the Sydney mediation page. The Sydney office node is repeated as
 * on the other Sydney service pages. "Defacto" (one word) appears only in the Service node's
 * alternate names and once in the copy (D-62). No priceRange, no alumniOf (D-53).
 */
import type { PageModule } from '@/site/types';
import { abs } from '@/config/routes';
import { offices } from '@/config/offices';
import { people } from '@/config/people';
import { graph, webPageNode, breadcrumbNode, officeNode, personNode, faqNode, serviceNode, personId } from '@/lib/schema';
import { Content } from './content';
import { faq } from './faq';

const title = 'De Facto Relationship Lawyers Sydney | Nolan Family Law';
const description = "Separated, never married, and unsure what you're entitled to? A two year time limit applies. Our Sydney de facto lawyers explain where you stand.";
const tash = personId(people.tash.slug);

export const sydneyDeFacto: PageModule = {
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
          name: 'De facto relationships',
          serviceType: 'Family law',
          description: 'Advice for people in New South Wales whose de facto relationship has ended: whether the relationship counts under the Family Law Act 1975, whether a property or maintenance claim can be made and within what time, and settling property, superannuation and maintenance by consent orders or a financial agreement, or in court.',
          office: 'sydney',
        }),
        alternateName: ['De facto lawyers', 'Defacto lawyers', 'De facto separation lawyers'],
        areaServed: { '@type': 'State', name: offices.sydney.stateName },
      },
      // Leads with de facto relationships on this page.
      personNode('tash', {
        knowsAbout: ['De facto relationships', 'Property settlement', 'Spousal maintenance', 'Parenting arrangements', 'Binding financial agreements', 'Family law mediation'],
      }),
      // The node from the Sydney mediation page, unchanged.
      personNode('jessica'),
      // Read off the visible FAQ, so the schema is worded exactly as the page (D-47).
      faqNode(key, faq),
    ),
  Content,
};
