# Hand-off prompt: build the Melbourne prenuptial agreements page

Copy everything below the line into the Claude Code session that builds the Nolan site (repo `MarzipanMedia/nolan-family-law`).

---

The Melbourne prenuptial agreements page is designed and approved (D-55). Please build it at `/melbourne/prenuptial-agreements/`, replacing the carry-over version that serves there now.

## Read these first (all in `export/`)
1. `DECISIONS.md`. **Read the numbering note above D-48 first.** The Claude Design copy of the log had its own D-33 to D-39; they are now D-48 to D-54 here, and its Q-12 and Q-13 are Q-16 and Q-17. The draft and the city-aware nav handoff still cite the old numbers.
2. `BUILD-NOTES.md`, the new "Melbourne prenuptial agreements: build notes" section. It is the spec: URL, meta, section map, schema, components, images, tests and open items.
3. `prenuptial-agreements-melbourne.html`, the approved prototype. Open it in a browser. Plain HTML with images inlined. The yellow review notes are for staging only (toggle with `?notes=0`).
4. `melbourne-prenup-draft-v2.md`, the approved copy. The page text must match it word for word.
5. `HANDOFF-city-aware-nav.md` (D-49 to D-51). Build this **first** if it isn't built yet. The prenup page's header assumes it.
6. `melbourne-family-law.html`, the approved Melbourne hub prototype. `CityHubTemplate.tsx` and the hub config already follow it, and comments in the code refer to it.

## How to build it
- **Reuse, don't fork.** The page is an inner service page. Use the inner-page blocks the Sydney property page uses (hero, breadcrumb and byline, Quick Answer, routing cards, guide with sticky "On this page", "In short" boxes, comparison table, related reading, FAQ), plus the hub's `MidPrompt`, lead and Principal cards, location toggle and `CtaBand`. If a block only lives inside `CityHubTemplate.tsx` today, pull it out into a shared component rather than copying it. No new visual components.
- **Office and people from config.** Melbourne office from `offices.ts` (no level, Q-4), Anastasia and Tash from `people.ts`, every URL from the routes file (`melbournePrenups`). Phone links only through `PhoneLink`, with `data-cta-position` hero, mid and contact.
- **Header (D-49).** Melbourne service links, "Prenups and BFAs" current, and the city switch "Also in Sydney" to `/sydney/prenuptial-agreements/`.
- **Form.** `CtaBand` for the Melbourne office: topic pre-selected to `bfa`, no "Where are you up to?" (`askStage` off), submit label "Book a consultation", heading and lede as in the prototype. "Talk to us" buttons and the routing card to `#book` set the topic to `bfa`; "Talk to us about costs" sets `fees`.
- **Schema.** As in the build notes: WebPage (Anastasia author, Tash reviewedBy), BreadcrumbList, Service (provider `/melbourne/family-law/#office`, areaServed Victoria), Person for Anastasia by `@id`, FAQPage read from the visible answers. No `priceRange`, no `alumniOf`.
- **Hidden until live.** The "De facto property rights in Victoria" related-reading card (D-28) uses `liveOnly`.
- **Hub change.** In `src/site/city-hubs/melbourne.tsx`, the prenup routing card's text becomes the anchor "binding financial agreements in Melbourne" (D-54).
- **Review notes.** Carry every LEGAL REVIEW and CHECK note on staging the way the other pages do, never in production.

## Checks before you tell me it's done
- 1440px and 390px: no horizontal overflow, one H1, valid JSON-LD, no console errors, every reveal and clip element appears.
- Header at 320, 381, 390, 900, 901, 1320, 1321 and 1440px with the "Also in Sydney" link: no overflow.
- No `/sydney/` link in the header or mobile menu except the city switch.
- Visible text matches `melbourne-prenup-draft-v2.md` (script the comparison, section by section).
- Twin test (D-51) against the current Sydney prenup page: at or under 30%.
- Redirect test: `/melbourne-family-law/prenuptial-agreement-melbourne/` and `/prenuptial-agreement-melbourne/` reach the page in one 301.

## When done
Add a "Built" row for this page to the build log in `BUILD-NOTES.md`, list anything that differs from the prototype in "Where the build differs from a prototype", and tell me the twin test and redirect test results. Don't change anything on the live WordPress site.
