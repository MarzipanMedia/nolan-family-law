# Hand-off prompt: Sydney hub (from the city hub template)

Copy everything below the line into a new Claude session in the **Nolan SEO** project, with the session linked to this computer.

---

We're rebuilding the Nolan Family Law & Mediation website page by page, and Claude Code is now building the site. The homepage, Sydney child custody, Sydney mediation, Sydney property settlement and the Melbourne hub are designed and exported. The next page is the **Sydney hub**, built from the **city hub template** the Melbourne hub set. Please design it in Claude Design and export it for Claude Code, following the same process as the Melbourne hub.

## Read these first
All in `Nolan SEO/Nolan Website/export/` on my computer:
- `DECISIONS.md` **first**. Don't contradict an entry without asking me. Add an entry for each decision on this page, and record the page's search baseline before changing anything.
- `BUILD-NOTES.md`: the **Melbourne hub** and **City hub template** sections are the pattern. The template section lists what the Sydney hub needs.
- `melbourne-family-law.html`: the reference layout. Same structure, Sydney content.
- `LAUNCH-PLAN.md`, `REDIRECT-MAP.csv` (option B columns) and `DESIGN.md` (v2.0, the only design source).
- The Melbourne canvas, "Nolan Melbourne Hub" (https://claude.ai/artifact/FBB63vLpBAPA2crmijVmNt), for how the boards, review notes and SEO board were done.

## The page
- **Launch URL: `/sydney/family-law/`** ("Separation and divorce" in the nav). It takes over from `/family-lawyer/` (page 12267, 22,900 impressions in 12 months) and `/family-law-services/` (16,000 impressions), which both 301 to it (D-24).
- **Before designing,** pull Search Console queries for both old URLs and for the homepage through Windsor.ai (`searchconsole`). Record the baseline, and find out what the two old pages rank for so the hub keeps it.
- **Don't cannibalise the homepage.** It holds "family lawyers sydney" at position 1.7 to 2.6 and earns about half the site's Google clicks (D-17). Lean the hub towards separation and divorce, and let the homepage keep the brand and head terms. Propose the title and H1 with the data, and ask me before settling them.
- **Office:** Suite 3, Level 22, 25 Bligh St, Sydney NSW 2000, (02) 8014 5885 (D-08), from the office config.
- **City lead:** Tash Nolan, Principal, with her Doyle's 2026 listings. Second card: Jessica Swain, Partner. Never "specialist" (D-05).

## What changes from Melbourne
- NSW law and courts: the Sydney registry of the Federal Circuit and Family Court (Lionel Bowen Commonwealth Law Courts, Goulburn Street) and Parramatta, apprehended violence orders instead of intervention orders, and the NSW de facto position. Check every legal claim and add a LEGAL REVIEW note for Tash.
- Routing cards to `/sydney/child-custody-lawyer/`, `/sydney/property-settlement/`, `/sydney/mediation/`, `/sydney/prenuptial-agreements/`, `/sydney/divorce-lawyer/` and the form.
- Accreditations: add back the Law Society of NSW and Collaborative Professionals (NSW & ACT).
- Location toggle: "In Victoria instead?" back to `/melbourne/family-law/`.
- Guides grid: the Sydney articles (for example the divorce checklist, "11 questions to ask your divorce lawyer", the 50/50 myth and the spousal maintenance articles), at their current URLs.
- The header phone strip (D-30) leads with Sydney. One mid-page prompt (D-31).
- Schema: `LegalService` for the Sydney office (same `@id` as the Sydney service pages), `Person` for Tash, `BreadcrumbList`, `WebPage` with reviewed-by, `FAQPage` (10 to 12 real Sydney questions) and the offer catalog.

## Content rules (decided)
No fixed fees or dollar figures (D-02). No "specialist" (D-05). "Parenting arrangements" in body copy. Informational, never legal advice. PAS meta description and opening. British English, no em dashes, few bullets, calm second person. No quick exit (D-07). Quick Answer box, question-led H2s and an "In short" box per section (D-11).

## Process
1. Read the files and the live pages (WordPress MCP `nolan_seo`, pages 12267 and the `/family-law-services/` page). Tell me the structure you're working from.
2. Pull the search data and summarise in a few lines what the page must win, and what it must leave to the homepage.
3. Ask me any open questions in one go before designing.
4. Design in a **new** Claude Design canvas called "Nolan Sydney Hub". Canvas boards top out at 8,000px, so split the page across boards as the Melbourne canvas does.
5. Do an SEO and AI search pass, and add yellow review notes for anything to confirm.
6. When I approve it, export it as the Melbourne hub was: `sydney-family-law.html` in the export folder (tested at 1440px and 390px with every reveal element appearing), a Sydney hub section in `BUILD-NOTES.md` (back it up first), and updates to `LAUNCH-PLAN.md` and `DECISIONS.md`.

Don't change anything on the live WordPress site without asking me first.
