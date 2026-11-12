# Nolan Family Law & Mediation — Build notes
**4 Nov 2026, updated 12 Nov 2026 · Pages: Homepage, Child custody (Sydney), Mediation (Sydney), Property settlement (Sydney), Melbourne hub (the city hub template) · Design rules: `DESIGN.md` v2.0**

> **URL structure (decided 12 Nov 2026, D-23):** service pages move to `/sydney/...` and `/melbourne/...` in one hit at launch, with `URL_MODE=B` and the option B columns of `REDIRECT-MAP.csv`. If the redirect test isn't passing 100% at the go/no-go on 11 December, launch with `URL_MODE=A`. Every URL comes from one routes file (D-25). Where older notes below mention today's URLs for a moved page, the routes file wins.

> **Before building anything, read `DECISIONS.md`.** It records every decision so far and the evidence behind it. If a request conflicts with an entry, stop and ask Ben rather than overriding it. Add a new entry for any new decision.

## What's in this folder
| File | What it is |
|---|---|
| `homepage.html` | Approved homepage (Terracotta). Self-contained: images and fonts inlined, opens offline |
| `child-custody-sydney.html` | Child custody inner page, rebuilt to DESIGN.md §8 inner-page template |
| `mediation-sydney.html` | Mediation (Sydney) inner page, same template. Plain HTML, images inlined, opens offline. See the Mediation section at the end of this file |
| `property-settlement-sydney.html` | Property settlement (Sydney), approved 12 Nov. Plain HTML, images inlined, opens offline. See the Property section |
| `melbourne-family-law.html` | Melbourne hub, approved 12 Nov, and the reference for the city hub template. Plain HTML, images inlined, opens offline. Introduces the site-wide header phone strip (D-30). See the Melbourne hub and City hub template sections |
| `melbourne-hub-gsc-baseline.csv` | Search Console queries for `/melbourne-family-law/` (749 queries, Nov 2025 to Oct 2026), the hub's baseline |
| `DESIGN.md` | Source of truth for colour, type, layout, components, motion, compliance |
| `BUILD-NOTES.md` | This file |
| `LAUNCH-PLAN.md` | Launch schedule (target Tue 15 Dec 2026), URL decisions, pages not being redesigned, QA and launch-day checklists |
| `HANDOFF-property-settlement.md` | Prompt to start the next page (property settlement, Sydney) in a fresh Claude session |
| `HANDOFF-melbourne-hub.md` | Prompt to start the next page (Melbourne hub and the city hub template) in a fresh Claude session |
| `HANDOFF-build-kickoff.md` | Prompt to start the Claude Code build (12 Nov): read order, decided rules, build order, what Ben needs to supply |
| `HANDOFF-sydney-hub.md` | Prompt to design the Sydney hub from the city hub template in a fresh Claude session |
| `DECISIONS.md` | Decision log with evidence and the pre-rebuild baseline. Check it before changing anything |
| `REDIRECT-MAP.csv` | Every known URL (115) with its launch treatment under option A and option B. See the Redirects section |

The HTML files are design prototypes, not production code. Rebuild them in the site's CMS or theme, using DESIGN.md for values. Each section carries a `data-screen-label` you can reference in tickets.

---

## Hosting for shared review links (GitHub Pages)
1. Create a repo (for example `nolan-redesign`) and upload `homepage.html` as **`index.html`**, plus `child-custody-sydney.html`.
2. Go to Settings → Pages → Deploy from branch → `main` / root.
3. The links will be `https://<org>.github.io/nolan-redesign/` and `.../child-custody-sydney.html`.
4. In `index.html`, the "Protecting my children" nav link points at `./Child Custody Sydney.dc.html`. Change it to `./child-custody-sydney.html` for the hosted demo. Other nav links point at production paths and will 404 on the demo.
5. Add `<meta name="robots" content="noindex">` or keep the repo private with restricted Pages access, so the demo and its placeholder copy are not indexed.

---

## Production URLs and SEO
| Page | URL | Title tag | H1 |
|---|---|---|---|
| Homepage | `/` | Nolan Family Law & Mediation \| Sydney & Melbourne | Navigating family change with complete clarity. |
| Child custody | `/sydney/child-custody-lawyer/` | Child Custody Lawyer Sydney \| Parenting Arrangements \| Nolan | Child custody lawyer Sydney & parenting agreements |
| Mediation | `/sydney/mediation/` (301 from `/sydney-family-law-mediation/`, D-23) | Family Mediation Sydney \| Family Law Mediators \| Nolan | Family law mediation in Sydney |
| Property settlement | `/sydney/property-settlement/` (301 from `/property-settlement/`, `/property-settlements/`) | Property Settlement Lawyers Sydney \| Consent Orders \| Nolan | Property settlement lawyers in Sydney |
| Melbourne hub | `/melbourne/family-law/` (301 from `/melbourne-family-law/`, D-23) | Family Lawyers & Mediation Melbourne \| Nolan Family Law | Family lawyers and mediation in Melbourne |

- Each page has one H1, a unique title (~60 characters) and a unique meta description (~155 characters).
- **Schema (JSON-LD, already in each page's head):**
  - Homepage: `LegalService` for Sydney and Melbourne.
  - Child custody: `BreadcrumbList`, `LegalService` (Sydney) and `FAQPage`. The FAQPage currently lists 4 of the 10 questions; extend it to all 10 once the answers are signed off.
  - The `LegalService` name, address and phone must match the Google Business Profile exactly.
- Every heading anchor has `scroll-margin-top: 104px` for the sticky header.

---

## Functionality to wire up
| Feature | Where | Prototype behaviour | Production need |
|---|---|---|---|
| Google rating | `[data-google-rating]` (ribbon, reviews) | Shows "loads live" text | Pull the rating and count from the Google Business Profile (Places API or a review widget) and write in "Google rating 4.9 from N reviews". Never hard-code it |
| Reviews | Reviews section | 3 placeholder quotes, cross-fade every 7s, pauses on hover, dot nav | Replace with real verified Google reviews. Respect reduced motion (the prototype already disables autoplay) |
| Enquiry form | `#book` on child custody | Fakes success on submit | POST to the CRM or email. Fields: name (required), phone, email, topic, message, safe-to-leave-message (yes/no). Show the success state, no redirect. Confidential: no third-party analytics on field values |
| "Talk to us about costs" | Costs section, FAQ | Pre-selects "Costs" in the form and scrolls to `#book` | Keep. Fee links open a conversation, never a price list |
| Grandparents card | "How can we help" | Opens the grandparents FAQ and jumps to it | Keep |
| Quick exit | Removed | Pulled from the site (Nov 2026). The child custody prototype still shows it | **Do not build.** Remove it from the child custody build |
| "On this page" | Sticky left at ≥1100px, collapsible list below that | Highlights the current section on scroll | Keep |
| Sticky header | All pages | 82px → 72px on scroll, menu button at ≤1320px | Keep |
| Scroll reveal | `[data-reveal]`, `[data-clip]` | IntersectionObserver, 55ms stagger | Optional in production. Must respect `prefers-reduced-motion` |

---

## Compliance changes made in the child custody rebuild
- Removed "Accredited Specialist" from the trust ribbon and "Accredited … specialists" from the footer (DESIGN.md §7).
- "Why families choose us" copy now says "experienced family lawyers".
- Footer replaced with the approved footer: Sydney / Melbourne / The firm / Offices, the Professional Standards line, Disclaimer, "Website by Marzipan" (`rel="nofollow"`), and no suburb links.
- The Doyle's recognition point links to `/about-us/`.
- Body copy uses "parenting arrangements". "Child custody" is kept in H1, headings and FAQs for SEO.

## Open items before go-live
Toggle **Review → showReviewNotes** to show or hide these notes on the page.
1. **Phone:** resolved 8 Nov 2026. Sydney is (02) 8014 5885, matching the live site and Google Business Profile. Updated in both prototypes.
2. **"Hundreds of Sydney families":** this claim is unverified. Confirm it or soften it.
3. **Legal review:** the May 2024 change (equal shared parental responsibility presumption repealed), the s60I exceptions and the s60CC factors list.
4. **Reviews:** the quotes are placeholders. Star and review display needs Law Society of NSW advertising sign-off.
5. **FAQ:** the relocation and consent-orders-without-a-lawyer questions are new and need lawyer review.
6. **Images:** the parent-and-child hero and Tash's portrait are placeholders. Swap in final photography.
7. The homepage nav lists "Our People" and "Mediation" (6 links). The child custody page matches.

---

## Mediation (Sydney): build notes
**Added 10 Nov 2026 · Prototype: `mediation-sydney.html` · Design canvas: "Nolan Mediation Sydney" in Claude Design**

Mediation is the firm's renewed focus, so this page is built to rank and to be quoted by AI search. Treat the content structure, headings and schema as part of the spec, not decoration. Build it from the same components as the child custody page (DESIGN.md §8 inner-page template).

### URL, title and meta
| Item | Value |
|---|---|
| URL | `/sydney/mediation/` (decided 12 Nov, D-23). 301s from `/sydney-family-law-mediation/` and `/mediation/`. Take every URL from the routes file, never hard-code |
| Canonical | `https://www.nolanlawyers.com.au/sydney/mediation/` (self-referential) |
| Title tag | `Family Mediation Sydney \| Family Law Mediators \| Nolan` (54 characters) |
| Meta description | `Disputes over children or property can drag on for months in court. Our Sydney family lawyer mediators help you reach your own agreement, privately.` (PAS, 150 characters) |
| H1 | `Family law mediation in Sydney` |

"Family mediation" is searched more than "family law mediation", so the title leads with it and the H1 carries the other form. Keep both.

### Fix inbound links
- The homepage and child custody prototypes now link the "Mediation" nav item, footer item and process step to `/sydney/mediation/` (updated 12 Nov). In the build, every link comes from the routes file.
- On the live articles `/role-of-the-mediator/` and `/how-to-prepare-for-mediation/`, add a contextual link back to this page with the anchor text "family law mediation in Sydney". This page already links out to both.

### Section map (`data-screen-label` → anchor id)
Navigation · Hero · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · What mediation is (`#what`) · Is mediation right for you (`#suitable`) · What we mediate (`#matters`) · Process (`#process`) · Is mediation compulsory (`#compulsory`) · How to prepare (`#prepare`) · Your mediators (`#mediators`) · The day itself (`#day`) · Fees (`#fees`) · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon footer · Footer.

Every H2 in the guide is the question people type into Google or ask an AI assistant ("What does a family law mediator do?", "Is mediation compulsory before going to court?" and so on). Keep them as real `<h2>` elements with the answer directly underneath, and keep each "In short" box as plain text. That is what AI Overviews and assistants lift.

### Schema (JSON-LD, already in the prototype's head)
`WebPage` (with `dateModified` and `reviewedBy` Tash) · `BreadcrumbList` · `LegalService` (Sydney office) · `Service` (family law mediation, provider = Sydney office, area served Sydney and NSW, in person or by video) · `Person` for Tash Nolan (Principal; Nationally Accredited Mediator; Master of Applied Law (Family Law); three 2026 Doyle's listings) · `Person` for Jessica Swain (Partner; Nationally Accredited Mediator; degrees; four professional memberships) · `FAQPage` with all 12 questions.

- Generate the `LegalService` block from the office config (see the call-experience brief) so the phone and address always match the Google Business Profile.
- Use absolute `@id` URLs as in the prototype, and reuse the same `Person` `@id`s on the people pages so Google joins them up.
- Update `dateModified` and the visible "Updated November 2026" byline whenever the content changes.

### New components on this page (not on child custody)
| Component | Notes |
|---|---|
| Hero fact strip | Three cells under the hero photo ("Half or full day", "Private rooms", "Or by video"). Grid `minmax(min(100%, 100px), 1fr)` so all three sit in one row on a phone |
| Reviewed-by byline | Sits in the breadcrumb row: "Reviewed by Tash Nolan, Principal · Updated November 2026". Links to her profile |
| Suitability pair | Two Bone cards: "Mediation tends to work when" / "It may not be right when". Short sentences, not bullets |
| Safety panel | Paper card with a 1px `--accent` border. Contains 000 and 1800RESPECT (1800 737 732) as `tel:` links. Plain content, not a fixed control |
| Mediator cards | Photo 148px square, name (H3), role line in `--accent`, bio paragraphs, link to profile. Stack to one column at ≤900px |
| Image block | 2:1 photo of the mediation room with clip reveal, above the "day itself" facts list |
| Fee rows | Conversation version only (see compliance). Same `data-fee-row` pattern as child custody |

### Functionality
| Feature | Production need |
|---|---|
| Phone numbers | Use the shared `PhoneLink` component and office config, never a hard-coded `tel:`. Sydney is (02) 8014 5885. Use `click_location` `header`, `body` (hero and CTA band) and `footer` |
| Enquiry form `#book` | Same handling as child custody (POST to the CRM or email, success state, no redirect, no third-party analytics on field values). Fields: name (required), phone, email, `topic` select, "Has the other party agreed to mediate?" (yes / not yet / not sure, default not sure), message (optional), safe to leave a message (yes/no) |
| Topic values | `book` Booking a mediation · `suitable` Whether mediation suits us · `lawyer` I am a lawyer arranging mediation for a client · `fees` Fees and availability · `other` Something else |
| Topic pre-select | The "I am a lawyer booking for a client" card sets `topic=lawyer`. "Talk to us about costs" links (fees section and cost FAQ) set `topic=fees`. Both scroll to `#book` |
| Quick exit | **Not on this page.** It has been pulled from the site |
| Back to top | Bottom right, appears after 900px of scroll |
| Scroll reveal | As DESIGN.md §6, but note the fix below |

**Reveal bug to avoid.** Browsers treat an element that starts at `clip-path: inset(0 0 100% 0)` as having no visible area, so an IntersectionObserver never fires for a `[data-clip]` image that starts below the fold. On phones this left the hero photo blank. Either keep a scroll and resize "sweep" that reveals anything above 92% of the viewport (as the prototype does), or observe the image's parent instead of the clipped element. Check the homepage and child custody builds for the same issue.

### Images
All are real photos from the firm's site, saved in `Nolan Website/mediation-assets/`. Serve them as responsive WebP/AVIF in production.
| Use | File | Alt text |
|---|---|---|
| Hero | `room-2-rgb.jpg` | A quiet lounge with a soft sofa and armchair at our Bligh Street offices, next to a mediation room |
| The day itself | `room-1-rgb.jpg` | A mediation room at Nolan Family Law & Mediation, with a long timber table and city views over the Sydney CBD |
| Mediators | `tash-mediation.png`, `jessica-swain.jpg` | Tash Nolan, Principal / Jessica Swain, Partner |
| Accreditation strip | `aiflam.jpg` first, then the same six badges as child custody (7 columns, 3 at ≤1100px, 2 at ≤520px) | As in the prototype |

The originals of the room photos were CMYK JPEGs. The `-rgb` versions are converted, so use those.

### Content and compliance decisions (do not undo)
- **No fixed fees or dollar figures.** Chad confirmed on 28 Sep 2026 that the firm no longer offers fixed fees, mediation included. The old page's $3,000 / $5,500 / $785 figures are gone. Fees open a conversation.
- **Mediator credentials.** Tash and Jessica are both Nationally Accredited Mediators and AIFLAM members (confirmed by Ben, 10 Nov 2026). Neither is stated to be a registered Family Dispute Resolution practitioner, so the page explains section 60I certificates without offering to issue them. Do not add "we can issue your certificate" unless that changes.
- **Titles.** Tash is Principal (the old page said Director). Jessica is Partner (the old page said Special Counsel).
- **Wording.** No "specialist". "Parenting arrangements" in body copy. British English, no em dashes, calm second person.
- **Confidentiality** is described as "generally" confidential "with limited exceptions set by law". The old page's "nothing can be used in court" overstated it.

### Open items before go-live
1. **Legal review (Tash):** the section 60I exceptions, the property pre-action wording, the confidentiality wording, and the new FAQs (cost, compulsory, section 60I, what to bring).
2. **Confirm:** that Nolan offers separate-room (shuttle) mediation, and that the firm will not act for either party after mediating their matter (process steps 1 and 4).
3. **Melbourne:** does the Bourke St office offer mediation? If so, add a Melbourne line and a location link, and plan a Melbourne mediation page under `/melbourne-family-law/`.
4. **Melbourne address:** the call-experience brief says L33/385 Bourke St; the prototypes say Level 23. Confirm against the Google Business Profile and fix the office config.
5. **Images:** a proper portrait of Jessica to match Tash's; a current AIFLAM badge (the one on file is dated 2024/2025).
6. **Jessica's live profile** shows four Doyle's badges whose alt text names Tash. Move or relabel them as firm recognition.
7. **Search Console:** after launch, request indexing and watch "family mediation sydney", "mediation lawyers sydney", "family law mediators" and "family dispute resolution sydney" (baseline, Aug to Oct 2026: positions roughly 26 to 62, three clicks in total).

Review notes on the prototype: use the "Hide review notes" button (top right), or open the file with `?notes=0`.

---

## Property settlement (Sydney): build notes
**Approved by Ben 12 Nov 2026 · Prototype: `property-settlement-sydney.html` · Full design notes: `claude/property-settlement-page-build-notes-nov-2026.md` in the Nolan project**

Build it from the same inner-page template as child custody and mediation. This is the longest page on the site (about 6,700 words), and the one with the most new legal content, so the structure and the review notes matter as much as the design.

### URL, title and meta
| Item | Value |
|---|---|
| URL | `/sydney/property-settlement/` (D-23). 301s from `/property-settlement/` and `/property-settlements/`. Take it from the routes file |
| Canonical | `https://www.nolanlawyers.com.au/sydney/property-settlement/` (self-referential) |
| Title tag | `Property Settlement Lawyers Sydney \| Consent Orders \| Nolan` (59 characters) |
| Meta description | `Unsure what you are entitled to after separation? Time limits apply, and informal deals are not binding. Our Sydney family lawyers help you settle properly.` (PAS, 154 characters) |
| H1 | `Property settlement lawyers in Sydney` |
| Sub-heading | `Property settlement after separation in NSW, and how to divide things fairly.` (keeps the client-approved wording) |

"Consent orders" is in the title on purpose: "consent orders lawyer sydney" drew 575 impressions to the homepage at position 9.6, while the old `/consent-orders/` page sat around position 60.

### Section map (`data-screen-label` → anchor id)
Navigation · Hero · Accreditations · How can we help you (`#help`) · Guide wrapper with sticky "On this page" · What it is (`#what`) · What is in the pool (`#included`) · Time limits (`#timelimits`) · Making it final (`#how`) · Consent orders or a BFA (`#consent-vs-bfa`) · How the court decides (`#divide`) · Superannuation (`#super`) · The family home (`#home`) · De facto couples (`#defacto`) · Pets (`#pets`) · Working with us (`#process`) · When to get advice (`#advice`) · What it costs (`#costs`) · Your lawyers · Melbourne and related reading · Rooms image · FAQ (`#faq`) · Consultation CTA (`#book`) · Trust ribbon · Footer.

Keep the `#consent-vs-bfa` anchor exactly: it's a possible redirect target for `/consent-orders/` (Q-3).

### Schema (already in the prototype's head)
`WebPage` (Tash as `author` and `reviewedBy`, `dateModified`) · `BreadcrumbList` · `LegalService` (Sydney office) · `Service` with an `OfferCatalog` (consent orders, BFAs, superannuation splitting, complex and high net-worth matters, de facto settlements) · `Person` for Tash (leading with Doyle's 2026 High Net-Worth and Complex Financial Matters) · `FAQPage` with all 12 questions, worded exactly as on the page. Office and Person `@id`s are the same as on the mediation page. Generate them from the routes file and the office config.

### Components new on this page
| Component | Notes |
|---|---|
| Comparison table (consent orders vs BFA) | Scrolls sideways inside its own container on phones. Never let it widen the page |
| Header CTA | "Talk to us" (kept short so the header fits at 1440px) |
| Melbourne link | "Our Melbourne office also handles property settlements" → `/melbourne/property-settlement/`. The Melbourne page must link back (week 4) |
| Related reading | Links to the 50/50 myth, stamp duty, tax, inheritances and superannuation articles (URLs unchanged) |
| Footer disclaimer | General-information disclaimer, new on this page. Use it site-wide |

### Content and compliance decisions (do not undo)
- **The legal framework is updated to the Family Law Amendment Act 2024 (in force 10 June 2025).** The client-approved text described the old section 75(2) and four-step framework. The page now reflects the restructured section 79, family violence and wastage as express considerations, companion animals, and the Federal Circuit and Family Court of Australia (not "Family Court"). **Tash must confirm these before go-live** (open items below).
- No dollar figures, fixed fees or payment plans (D-02): eleven figures and a fee table were removed. Costs open a conversation.
- No "specialist" anywhere (D-05): thirteen removed, including "specialist valuation", which became "expert valuation".
- "Hundreds of Sydney couples" stays out until it's verified.
- "Our recommendation" was reframed so it doesn't read as legal advice.

### Testing done (12 Nov 2026)
1440px and 390px: no horizontal overflow, one H1, no quick exit, no console errors. Every reveal and clip element appears when scrolled (the scroll sweep from the mediation prototype is included). The FAQ accordions, mobile menu and back to top all work.

### Open items before go-live
1. **Tash (legal review):** the restructured section 79 and the four stages; family violence and wastage; companion animals (including whether to state that the court doesn't order shared care of animals); both time limits and "one month and one day"; de facto eligibility and the geographic requirement; inheritance after separation; superannuation splitting and the "no automatic discount" statement; pre-action requirements and the grounds for setting aside a BFA. Each has a yellow note on the page.
2. **Chad:** the costs section changed most from the approved copy.
3. **Q-3:** whether `/consent-orders/` redirects to `#consent-vs-bfa`, stays as a hub, or is split. The map currently sends it to `/sydney/consent-orders/`.
4. Whether a second property lawyer appears beside Tash, and a portrait to match the mediation crop.
5. A warmer hero photograph, if one exists.
6. The Melbourne address (Q-4). The footer currently says Bourke Street without a level.
7. Footer links differ between prototypes (`/privacy-policy/` here, `/privacy` on mediation). The routes file decides; the live URL is `/privacy-policy/`.

---

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

## Redirects and URL safety: build notes
**Added 10 Nov 2026 · Source: `REDIRECT-MAP.csv` · Decisions D-18 and D-19 in `DECISIONS.md`**

The firm has spent a year building these rankings. The rule for launch is simple: **no URL that Google knows about may return a 404, and every redirect is one hop.**

### The map
`REDIRECT-MAP.csv` holds 115 rows: both live sitemaps, every URL with impressions in 12 months of Search Console, and safety nets for paths the prototypes link to. Columns:

| Column | Meaning |
|---|---|
| `old_path` | The URL path as it exists (or existed) on the live site |
| `type` | page, article, profile, theme demo, file or prototype path |
| `status_today`, `redirects_to_today` | What the live site does now (checked 10 Nov 2026) |
| `gsc_clicks_12m`, `gsc_impressions_12m` | Search Console, Nov 2025 to Oct 2026 (blank = under 30 impressions) |
| `option_a_action`, `option_a_target` | Fallback only: today's URLs, used if the redirect test fails at go/no-go (`URL_MODE=A`) |
| `option_b_action`, `option_b_target` | **Launch setting** (decided 12 Nov, D-23): service pages move to `/sydney/` and `/melbourne/` |
| `notes` | Why, and anything to confirm |

Actions: `KEEP` (serve a 200 at the same path) · `KEEP (noindex)` · `301` (permanent, to the target) · `410` (gone) · `NEW PAGE`.

### How to build it
1. **One source of truth.** Generate the platform's redirect rules from the CSV at build time (for example Next.js `redirects()` or middleware, or the host's redirect file). Don't hand-copy rules. A setting such as `URL_MODE=A|B` picks which pair of columns applies, so a later move to option B is a configuration change.
2. **Routes come from the same config.** The nav, footer, internal links, canonicals, breadcrumbs, schema `@id`s and the XML sitemap are all generated from the routes config, so they can't point at a URL that redirects.
3. **Trailing slashes.** WordPress URLs end in `/`. Keep `trailingSlash: true` and make `/path` → `/path/` a single 301, never a chain.
4. **Host and protocol.** `http://`, `nolanlawyers.com.au` (no www) and `http://www.` must each reach `https://www.nolanlawyers.com.au/...` in one hop, combined with any path redirect. That means one hop in total, not two.
5. **Keep query strings** through redirects (UTM tags from Google Ads and the Google Business Profile depend on it).
6. **Media.** Images and PDFs live under `/wp-content/uploads/...`, and Google Images and old links point there. If WordPress is switched off, serve those files at the same paths, or proxy or redirect `/wp-content/uploads/*` to wherever they now live.
7. **Sitemap at launch** lists only `KEEP` pages that are indexable. No redirecting URLs, no `/lp/`, no `/thanks-enquiry/`, no theme demo pages. (The live sitemap gets all of these wrong today.)
8. **410s** for the five theme demo pages, which contain placeholder "business plan consultant" text.

### Fixes the map already makes
- `/our-team/our-team/` currently redirects to Ashleigh Moran's profile (39 clicks in 12 months). It goes to `/our-team/`.
- The "Ultimate Divorce Checklist" PDF returns 404 but earned 26 clicks in 12 months. The map redirects it to the divorce checklist article. Restoring the PDF at its original path is better (question Q-10).
- `/mediation/` and the `/sydney/...` and `/melbourne/...` prototype paths redirect to the live pages under option A, so a stray prototype link can never 404.
- Recreates every existing redirect (`/child-custody-lawyer/`, `/parenting-agreements/`, `/property-settlements/`, `/prenuptial-agreements/`, `/prenuptial-agreement-melbourne/`, `/divorce/`, `/liam-terry/`, `/30-minute-consultation/`, `/30-minute-consultation-2/`), pointed straight at the final page.

### Before launch: Rank Math export
Rank Math may hold older redirects we can't see from outside, for example URLs that only appear in old backlinks. Ben will export them (WordPress → Rank Math → Redirections → Export) so they can be merged into the CSV (question Q-9).

### Tests (must pass at go/no-go)
Write a script, run on staging and again on launch morning, that reads the CSV and, for every row:
- `KEEP` → 200, a self-referencing canonical, and no `noindex` (except the two `KEEP (noindex)` rows, which must have it).
- `301` → exactly one 301, to the target, which returns 200.
- `410` → 410.
- Also: every URL in the old live sitemap returns 200 or a single 301; every URL in the new sitemap returns 200; nothing in the new sitemap redirects.

Keep the script in the repo so it can run again after option B, or after any future URL change.

### After launch
Watch Search Console daily for two weeks, then weekly for six: the Pages report (Not found, Page with redirect, Duplicate without user-selected canonical), and clicks for the homepage, the team profiles and the service pages against the baseline in `DECISIONS.md`. Any new 404 with impressions gets a redirect and a row in the CSV.

---

## Build log (Claude Code)
**Started 12 Nov 2026 · Branch `claude/affectionate-fermat-700uux` · Backup of this file taken first: `BUILD-NOTES.backup-2026-11-12-pre-build.md`**

How the build is organised is in the repo's `README.md`. Tracking set-up is in `docs/tracking.md`.

### Built (12 Nov 2026)
| Step | Status |
|---|---|
| Housekeeping | September false start parked in `_archive/2026-09-false-start/`. Nothing deleted |
| Project set-up | Next.js 16 in the repo root. Staging is `noindex` (header and robots.txt) and password-protected by `STAGING_USER` / `STAGING_PASSWORD`. **Vercel project not yet created (needs Ben)** |
| Routes file | `src/config/routes.ts`, `URL_MODE=B`. One page route serves every URL from it, so switching mode renames nothing |
| Office config | `src/config/offices.ts`. Melbourne has no level (Q-4) |
| Redirects | Generated from `REDIRECT-MAP.csv` into one handler: host, slash, case and path in a single 301, query string kept, 410 for the five theme demo pages. The build fails if the map and the routes file disagree (both modes currently agree) |
| Redirect test | `npm run test:redirects`. Run locally only so far. All redirect mechanics pass. The remaining failures are three pages that do not exist yet (below) |
| Site shell | Header with the D-30 phone strip, phone link and Call button (no overflow at 320, 381, 390, 900, 901, 1100, 1320, 1321, 1366, 1440px); mobile menu; footer; PhoneLink; GTM (one container); scroll reveal with the sweep; CTA band; enquiry form; schema generator |
| Templates | Inner-page blocks, article, profile, carry-over |
| Pages | Homepage, Sydney child custody, Sydney mediation, Sydney property settlement, Melbourne hub. Each passes at 1440px and 390px: no overflow, one H1, valid JSON-LD, no console errors, every reveal appears |
| Import (D-35) | 37 articles, 24 profiles and 22 carry-over pages from WordPress, read-only. Report: `src/content/imported/import-report.json` |
| Generic pages | Our people, Resources and Contact, generated, with the live titles and descriptions, until their designs arrive |

### Left to do
- **Three pages with no content yet:** `/fees/`, `/disclaimer/` (both linked from every footer) and `/melbourne/mediation/` (linked from the Melbourne hub; waits on Q-11). The redirect test fails on these until they exist.
- **Four Melbourne articles (D-28):** their cards and inline links on the hub are hidden until each article is imported. They appear by themselves once it is.
- **Placeholder artwork (6):** homepage hero, both "Who we act for" images, the CTA background and the "four partners" photo box; child custody hero. Marked `data-placeholder`. A production build refuses to run while any remain.
- **Needs Ben:** Vercel project; enquiry destination (`ENQUIRY_WEBHOOK_URL`: until set, staging accepts enquiries and delivers them nowhere, production refuses them); GTM ID (Q-12); Places API key and place IDs; Q-4, Q-9, Q-10.
- **Not yet tested:** `URL_MODE=A` end to end; host and protocol hops (needs the real domain; see D-36); Core Web Vitals; real phones.
- **`/wp-content/uploads/`:** only the 153 files that imported content uses are copied (about 32 MB). The WordPress library has 357 items. To decide: copy the rest, or keep them served from WordPress.
- Sydney hub, prenups, Melbourne service pages, Fees and the designed versions of Our people and Contact, as their prototypes arrive. Each currently serves its carry-over version at its final URL.

### Where the build differs from a prototype, and why
| Page | Difference | Why |
|---|---|---|
| Homepage | Title and H1 are the live site's. The prototype headline is the display line, not the H1 | D-33 |
| Homepage | New meta description (146 characters) | The prototype had none; the live one says "specialists" (D-05). **Ben to approve the wording** |
| Homepage | Header has the phone strip and Call button; header button says "Talk to us" and goes to the closing band | D-30. The prototype predates it |
| Homepage | Schema adds WebSite, WebPage and FAQPage to the two LegalService nodes; Melbourne has no level | D-17 firm-level signals; D-11; Q-4 |
| Homepage, child custody, Melbourne | Review sections show live Google data, or nothing at all without an API key. No stand-in quotes, numbers or "loads here" boxes | D-37. Homepage line under the rating now reads "Every review here is a verified Google review, shown as it was written." (the prototype's sentence made a claim about every review) |
| Child custody | No quick exit | D-07 |
| Child custody | "We have helped hundreds of Sydney families…" is now "We help Sydney families…" | Open item 2 (unverified), same rule as the property page. **Ben to confirm or restore** |
| Child custody | Review section uses the three-card layout, not the single rotating quote | One shared live component |
| Child custody | FAQPage schema lists all 10 questions; BreadcrumbList and FAQPage have `@id`s | Generated from the visible FAQ |
| Mediation | Header button says "Talk to us", not "Book a mediation" | Header width gotcha, and D-30 needs the room |
| Property | Tash's photo is `tash-mediation.png` | The prototype used a silhouette |
| Melbourne hub | Four guide cards and four inline links hidden; "Spousal maintenance" left out of the schema's offer catalog | D-28: those articles do not exist yet |
| All | `/our-people/`, `/privacy`, `/contact`, `/disclaimer`, `/collaborative-family-law/` in prototypes resolve through the routes file | D-25 |
| All | Phone links use `tel:+61…`; footer note on pages with no city reads "This website is general information about family law…" | Office config; the prototypes only had NSW and Victoria versions |
| Enquiry form | Requires a phone number or an email as well as a name | Otherwise the firm cannot reply. **Ben to confirm** |

### Things found in imported content (for Ben)
- **"Specialist" appears in 23 imported files**, including profile titles and roles such as "Accredited Family Law Specialist". It is existing copy, so it was carried over unchanged, but it is now visible on new pages (D-05). Needs a decision per person.
- **Four profile titles lacked the person's name** (Toby Henson, Nicole Jirathammakul, Thomas Hughes, Amy Sultana; one still said "Liam Terry"). They are now "Name | Nolan Family Law & Mediation" (D-17).
- **23 internal links in imported content pointed at pages that do not exist.** The words were kept and the links removed. Listed in the import report.
- Carry-over pages are unedited WordPress copy in the generic template. `/sydney/domestic-violence/` needs the tone check LAUNCH-PLAN asks for.
