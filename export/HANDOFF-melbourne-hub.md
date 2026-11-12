# Hand-off prompt: Melbourne hub (and the city hub template)

Copy everything below the line into a new Claude session in the **Nolan SEO** project, with the session linked to this computer.

---

We're rebuilding the Nolan Family Law & Mediation website page by page. The homepage, child custody (Sydney), mediation (Sydney) and property settlement (Sydney) pages are designed and exported. The next page is the **Melbourne hub**. It's also the first **city hub**, so its layout becomes the template for the Sydney hub straight afterwards. Please design it in Claude Design and export it for Claude Code to build, following the same process as the earlier pages.

## Read these first
All in `Nolan SEO/Nolan Website/export/` on my computer:
- `DECISIONS.md` **first**. Don't contradict an entry without asking me. Add an entry for each decision we make on this page (next D-number, date, evidence, what to watch), and record the page's search baseline before you change anything. We're keeping the log for a case study, and to stop the build drifting.
- `LAUNCH-PLAN.md`: this is week 2. Note the URL table: the site moves to `/sydney/` and `/melbourne/` in one hit at launch (D-23).
- `REDIRECT-MAP.csv`: use the option B columns. If this page creates or retires any URL, add a row.
- `DESIGN.md` (v2.0, Terracotta): the only design source. Ignore "Nolan v5 DESIGN.md" and the old design system artifact.
- `BUILD-NOTES.md`: the Mediation and Property sections are the pattern to follow, including how to write the build notes for this page.
- `homepage.html`, `child-custody-sydney.html`, `mediation-sydney.html`, `property-settlement-sydney.html`: reuse their header, footer, components, styles and scripts. The hub is a new layout, but it should look and feel like part of the same site.
- The mediation design canvas (https://claude.ai/artifact/98u3woNvf8QiJwhhUH7q2L) shows how review notes, question-led headings, "In short" boxes and schema were done.

Photos and logos are in `Nolan Website/mediation-assets/`.

## The page
- **Launch URL: `/melbourne/family-law/`**, with a 301 from `/melbourne-family-law/` (WordPress page 15711).
- **This is the most valuable page that moves.** In the 12 months to October it had 145 clicks and 24,800 impressions, the most of any page outside the homepage and the team page. Before designing, pull its Search Console queries through Windsor.ai (`searchconsole`), record the baseline in the decision log, and make sure the new page keeps whatever it already ranks for.
- **Melbourne office:** 385 Bourke St, Melbourne VIC 3000, (03) 9088 8889. **Don't state the level.** It's still unconfirmed (L33 or Level 23, question Q-4). In the build, the address and phone come from the office config.
- **Melbourne lead:** Anastasia Simes. Her live profile (page 9499) calls her **Partner**, while older notes say Special Counsel. **Ask me which is right** before using either. The project brief asks for her to be the Melbourne lead, linked to the Bourke St office. Chad wants her positioned as the Melbourne lawyer, but never call her a "specialist" (D-05).

## What the hub has to do
1. **Answer "family lawyer Melbourne" searches** with a Melbourne-specific page, not a copy of Sydney. Use a Victorian context: the Melbourne registry of the Federal Circuit and Family Court, Melbourne examples, and the Victorian de facto position (check every legal claim, and add a LEGAL REVIEW note for Tash).
2. **Route people to the Melbourne service pages**, all at launch URLs:
   - `/melbourne/child-custody-lawyer/` (page 16053)
   - `/melbourne/property-settlement/` (15915)
   - `/melbourne/prenuptial-agreements/` (15889)
   - mediation, if Melbourne offers it (Q-7, unanswered: ask me)
   - the Melbourne articles: `/separation-checklist-melbourne/` and `/prepare-financially-for-separation-in-melbourne/`
3. **Show the Melbourne drafts in WordPress and ask me what to do with them:**
   - de facto property rights in Victoria (15996)
   - separation vs divorce in Victoria (15994)
   - spousal maintenance in Melbourne (two near-duplicates, 15999 and 15998)
   - family violence and property settlements in Victoria (16001)
   Each could become a Melbourne article linked from the hub. The two spousal maintenance drafts must not both go live.
4. **Location toggle:** a clear link to the Sydney hub (`/sydney/family-law/`), and the matching link back from Sydney. Use the same component on every service page that has a twin in the other city.
5. **Firm-level trust:** Doyle's recognition (firm and Tash), Google reviews loaded live, the accreditation strip, and named people.
6. **Schema:** `LegalService` for the Melbourne office (from the office config), `Person` for Anastasia, `BreadcrumbList`, `WebPage` with a reviewed-by, `FAQPage` (10 to 12 real Melbourne questions), and an `ItemList` or `hasOfferCatalog` of the Melbourne services. Use the same `@id` pattern as the Sydney pages.

## The city hub template
Design it so the Sydney hub (`/sydney/family-law/`, which takes over from `/family-lawyer/` and `/family-law-services/`, D-24) can reuse it by swapping the content. Note in the build notes which parts are template and which are Melbourne-only. Don't design the Sydney hub in this session, but say what it will need.

## Content rules (decided, do not undo)
- **Costs:** no fixed fees or dollar figures (D-02).
- **Wording:** no "specialist" (D-05). Use "parenting arrangements" in body copy.
- **No legal advice:** the page is informational and builds trust.
- **Meta description and opening** follow Problem, Agitation, Solution.
- **Style:** British English, no em dashes, few bullets, calm and plain second person.
- **No quick exit button** (D-07).
- **AI search pattern:** a Quick Answer box at the top, question-led H2s and an "In short" box per section (D-11).

## Process
1. Read the files above and the live hub (WordPress MCP, `nolan_seo`, page 15711). Tell me the structure you're working from.
2. Pull the search data. Check the leading Melbourne family law competitors, and summarise in a few lines what the page must win.
3. Ask me the open questions (Anastasia's title, Melbourne mediation, the drafts) in one go, before designing.
4. Design in a **new** Claude Design canvas called "Nolan Melbourne Hub".
5. Do an SEO and AI search pass, and add yellow review notes for anything to confirm.
6. When I approve it, export it the same way as the property page:
   - a self-contained `melbourne-family-law.html` in the export folder, tested at 1440px and 390px with every reveal element appearing;
   - a Melbourne hub section, plus a short "city hub template" section, in `BUILD-NOTES.md` (back up the file first);
   - an updated row in `LAUNCH-PLAN.md` and new entries in `DECISIONS.md`.

Don't change anything on the live WordPress site without asking me first.

## Known gotchas
- **The reveal bug:** a `[data-clip]` image that starts below the fold never appears on phones unless there's a scroll "sweep". Copy the script from the mediation or property export.
- **Header width:** keep the header button text short ("Talk to us" or "Book a mediation"), or the header overflows at 1440px.
- **Photos:** the room photos from the live site are CMYK JPEGs. Use the RGB copies in `mediation-assets`.
- **Links:** every link uses the launch URLs (D-23). Never link to `/melbourne-family-law/...`.
- **Footer:** keep it identical to the other prototypes (DESIGN.md §5), with no suburb links.
