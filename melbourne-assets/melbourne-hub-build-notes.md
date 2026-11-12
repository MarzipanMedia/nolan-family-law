## Melbourne hub: build notes
**Approved by Ben 12 Nov 2026 · Prototype: `melbourne-family-law.html` · Design canvas: "Nolan Melbourne Hub" (https://claude.ai/artifact/FBB63vLpBAPA2crmijVmNt) · Decisions D-26 to D-31**

This is the first **city hub**, and its layout is the template for the Sydney hub (see the next section). It is also the **most valuable page that moves**: 145 clicks and 45,588 impressions from March to October 2026 (baseline in `DECISIONS.md`). Treat its redirect, title and FAQ schema as launch-critical.

### URL, title and meta
| Item | Value |
|---|---|
| URL | `/melbourne/family-law/` (D-23). One 301 from `/melbourne-family-law/` (WordPress page 15711). Take it from the routes file |
| Canonical | `https://www.nolanlawyers.com.au/melbourne/family-law/` (self-referential) |
| Title tag | `Family Lawyers & Mediation Melbourne \| Nolan Family Law` (55 characters) |
| Meta description | `Separating in Victoria and unsure where to start? Time limits run from separation and divorce. Our Melbourne family lawyers and mediators can help you.` (PAS, 151 characters) |
| H1 | `Family lawyers and mediation in Melbourne` |
| Breadcrumb | Home / Melbourne family law. Byline: reviewed by Anastasia Simes, Partner |

Why this title and H1: the page already ranks on page one for mediation ("family mediation melbourne" position 2.2, "family law mediation melbourne" 3.4, about 12,100 impressions in total) and on page two for the head terms ("family lawyers melbourne" 13.8 from 3,145 impressions). Both phrases go in the H1, and "& Mediation" stays in the title (D-27). The old meta description said "specialists" (D-05).

### Section map (`data-screen-label` → anchor id)
Navigation (with the phone strip) · Hero · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · Separating (`#separation`) · Divorce (`#divorce`) · Children (`#children`) · Property (`#property`) · De facto couples (`#defacto`) · Mid-page prompt · Mediation (`#mediation`) · Going to court (`#court`) · What it costs (`#costs`) · Your Melbourne lawyer · Reviews · Sydney toggle and Melbourne guides · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

### Schema (already in the prototype's head)
`WebPage` (Anastasia as `reviewedBy`, `dateModified`) · `BreadcrumbList` · `LegalService` for the Melbourne office (`@id` `/melbourne/family-law/#office`, address "385 Bourke St, Melbourne VIC 3000" with **no level** until Q-4 is answered, phone +61 3 9088 8889) with a `hasOfferCatalog` of the six Melbourne services and their URLs · `Person` for Anastasia (`@id` `/our-team/anastasia-simes/#person`, jobTitle Partner, `worksFor` the Melbourne office) · `FAQPage` with all 12 questions, worded exactly as on the page. Same `@id` pattern as the Sydney pages. Generate the office from the office config and the URLs from the routes file. The profile page for Anastasia must carry the same Person `@id`.

### Components new on this page
| Component | Notes |
|---|---|
| **Phone strip and header call buttons (D-30), site-wide** | At 1321px and wider a 36px strip sits above the sticky header (not inside it, so `scroll-margin-top` stays 104px): local office and number first, the other city second. From 901 to 1320px a phone link sits beside "Talk to us". At 900px and below a "Call" button sits beside Menu; under 381px it shows the icon only and the logo drops to 38px. Every number comes from the office config: Melbourne pages lead with Melbourne, Sydney pages with Sydney, pages with no city with Sydney first. Tested with no overflow from 320px to 1440px. Inline in the nav it overflowed by 90px at 1321 to 1440px, which is why the strip exists. **Add it to every page's header, not just this one.** |
| Hero portrait | Anastasia's cut-out portrait on a soft blue-to-stone gradient, with a name card. Source: `Nolan Website/melbourne-assets/anastasia-simes-hub-live.png` (RGB PNG, 450px, from the live hub). Ask for a larger original before launch |
| Routing cards | Six cards: children, property, mediation, separation and divorce (in-page), prenups, "not sure where to start" (form) |
| Mid-page prompt (D-31) | A light card halfway down the guide with Anastasia's photo, "Not sure how this applies to you?", the primary button and the phone. Links carry `data-cta-position="mid"`. **One per page at most.** Not the deep navy band: the page keeps one `--deep` section |
| City lead plus Principal | Anastasia's card, then a slim card for Tash and the firm's Doyle's recognition |
| Reviews | Three slots and the rating, all loaded live from the Google Business Profile. Never hard-coded or written. Prefer Melbourne reviews; fall back to firm-wide and say so |
| Location toggle | "In New South Wales instead?" card to `/sydney/family-law/`. The shared component for every page with a twin in the other city (brief, point 4) |
| Enquiry form | Same form as the other pages. Topics are children, property, divorce, mediation, BFA, fees, other. Delivers to the Melbourne team. "Where are you up to" adds "Thinking about separating" |
| Accreditations | Four badges (Doyle's, Law Council, Family Law Section, AACP). The NSW-only logos are left off. Each city hub lists the bodies that fit it |

### Content and compliance decisions (do not undo)
- Anastasia Simes is **Partner** (D-26), never Special Counsel, never "specialist" (D-05).
- No office level anywhere in the copy or schema (Q-4). The office config supplies it once confirmed against the GBP.
- No fees or figures (D-02). No quick exit (D-07).
- The Victorian law is stated for 2026: the presumption of equal shared parental responsibility is gone (from 6 May 2024), the property framework follows the Family Law Amendment Act 2024 (from 10 June 2025), de facto couples who separated on or after 1 March 2009 are under the Family Law Act, and the Melbourne registry is at 305 William Street (Owen Dixon Commonwealth Law Courts Building).
- The page does not claim the firm issues section 60I certificates (D-13), and names no Melbourne mediator until Q-11 is answered.
- Four of the six Melbourne guides come from WordPress drafts and go into the build at launch only once reworked and signed off (D-28). Their slugs are proposals in `REDIRECT-MAP.csv`. Until then the cards link to URLs that don't exist yet, so the build must either include the articles or hide those cards.

### Testing done (12 Nov 2026)
1440px and 390px: no horizontal overflow, one H1, valid JSON-LD, no console errors, no quick exit, and all 93 reveal and clip elements appear when scrolled (the scroll sweep from the mediation export is included). Header tested at 320, 390, 900, 901, 1100, 1320, 1321, 1366 and 1440px with no overflow.

### Open items before go-live
1. **Tash (legal review):** divorce (counselling for marriages under two years, one month and one day, the 12 month limit), the best interests summary and the 6 May 2024 date, the section 79 summary and 10 June 2025, the de facto referral, gateways and geographic requirement, the Dandenong registry and the intervention order paragraph, and all 12 FAQ answers. Each has a yellow note.
2. **Q-11 (Chad):** who mediates in Melbourne, and their accreditation. Then the Melbourne mediation page (`/melbourne/mediation/`, new) needs designing before launch, or the mediation card points at a 404.
3. **Q-4:** Level 23 or Level 33. Office config only.
4. Anastasia's experience: "more than a decade" until her years are confirmed. Whether any other Melbourne lawyers appear beside her. A larger portrait.
5. Whether Tash should also appear as author, as on the Sydney pages.
6. Victorian memberships for the accreditations strip (for example the Law Institute of Victoria), if any.
7. Whether the main nav should switch to `/melbourne/` links on Melbourne pages. For now it matches the other prototypes.
8. The four new Melbourne articles (D-28): rework, legal review, then import. Bin WordPress draft 15999 once merged into 15998 (D-29).
9. Launch day: update the Melbourne Google Business Profile website link to `/melbourne/family-law/` with UTM tags.

---

## City hub template (Melbourne first, then Sydney)
**Added 12 Nov 2026.** Build one city hub template and feed it per-city content. The Melbourne hub is the reference.

**Template (identical structure in every city):** header with the phone strip (D-30) · hero (eyebrow, H1, PAS lede, primary and phone buttons, city lead portrait, three fact tiles) · breadcrumb with reviewer byline · sub-heading and Quick Answer box · accreditations strip · six routing cards · guide with sticky "On this page", question-led H2s and an "In short" box per section · one mid-page prompt · city lead card plus the Principal card · live Google reviews · location toggle to the other city · city guides grid · FAQ (10 to 12, all in FAQPage schema) · consultation CTA band and form · trust ribbon · footer (identical everywhere, no suburb links).

**Per city (content and config):** every word of copy, the state's law and courts (registry address, state intervention orders, de facto referral), the city lead and their portrait, the office (address, phone, map) from the office config, the routing card URLs, the accreditation badges that apply, the city articles, the FAQ, title, meta and H1, and the schema (`LegalService` office `@id`, `Person`, offer catalog).

**What the Sydney hub will need** (`/sydney/family-law/`, takes over from `/family-lawyer/` and `/family-law-services/`, D-24):
- Its own Search Console baseline first: `/family-lawyer/` had 22,900 impressions and `/family-law-services/` 16,000 over 12 months, with few clicks. Find out what they rank for, and keep it.
- It must not cannibalise the homepage, which holds "family lawyers sydney" at position 1.7 to 2.6. Lean the hub towards separation and divorce ("Separation and divorce" in the nav), and let the homepage keep the brand and head terms. Decide the title and H1 with that in mind.
- NSW content: the Sydney registry (Lionel Bowen Commonwealth Law Courts, Goulburn Street) and Parramatta, NSW apprehended violence orders instead of intervention orders, and the NSW de facto referral.
- City lead: Tash Nolan, Principal, with the Doyle's 2026 listings. Second card: Jessica Swain, Partner.
- Routing cards to `/sydney/child-custody-lawyer/`, `/sydney/property-settlement/`, `/sydney/mediation/`, `/sydney/prenuptial-agreements/`, `/sydney/divorce-lawyer/` and the form.
- Badges: add back the Law Society of NSW and Collaborative Professionals (NSW & ACT).
- Location toggle back to `/melbourne/family-law/`.
- The Sydney articles (the divorce checklist, the 11 questions to ask your divorce lawyer, the 50/50 myth, the spousal maintenance pair) in the guides grid.

---

