# Hand-off prompt: Property settlement (Sydney)

> **Update 12 Nov 2026:** this hand-off has been used, and the page is designed (see `claude/property-settlement-page-build-notes-nov-2026.md` in the project). Since then the URL structure was decided (D-23): the page moves to **`/sydney/property-settlement/`** at launch, with 301s from `/property-settlement/` and `/property-settlements/`. Where this prompt says to keep `/property-settlement/`, the decision log wins.


Copy everything below the line into a new Claude session in the **Nolan SEO** project, with the session linked to this computer.

---

We're rebuilding the Nolan Family Law & Mediation website page by page. The homepage, child custody (Sydney) and mediation (Sydney) pages are designed and exported. The next page is **property settlement (Sydney)**. Please design it in Claude Design, following the same process we used for the mediation page, and export it for Claude Code to build.

## Read these first
All in `Nolan SEO/Nolan Website/export/` on my computer:
- `DECISIONS.md` **first**: every decision made so far, with its evidence, plus the baseline numbers. Don't contradict an entry without asking me. Add a new entry (next D-number, date, evidence, what to watch) for each decision we make on this page, and record the page's own search baseline before you change anything. We're keeping this log for a case study, and to stop the build drifting.
- `REDIRECT-MAP.csv`: the property page and its old URLs are already in it. If this page creates or retires any URL, add a row.
- `DESIGN.md` (v2.0, Terracotta): the source of truth for colour, type, layout and components. It supersedes the older "Nolan v5 DESIGN.md" and the "Nolan Family Law Design System" artifact in my account. Don't use either of those.
- `BUILD-NOTES.md`: especially the Mediation section, which is the pattern to follow.
- `LAUNCH-PLAN.md`: the URL decisions and the schedule. This page is week 1.
- `child-custody-sydney.html` and `mediation-sydney.html`: the inner-page template to reuse.
- The mediation design canvas: https://claude.ai/artifact/98u3woNvf8QiJwhhUH7q2L. Copy its structure: question-led H2s, "In short" boxes, review notes and schema.

Photos and logos already extracted are in `Nolan Website/mediation-assets/`.

## The page
- **URL: keep `/property-settlement/`** (WordPress page ID 15908). The old `/property-settlements/` (8437) already 301s to it.
- Melbourne equivalent: `/melbourne-family-law/property-settlement-melbourne/` (15915).
- Tash Nolan is the reviewer and author. Her 2026 Doyle's listing includes **Leading Family Lawyers: High Net-Worth and Complex Financial Matters**, which is the most relevant credential for this page, so lead with it. Also: Principal, Nationally Accredited Mediator (AIFLAM, 2025), Master of Applied Law (Family Law), recognised by Doyle's every year since 2023.

## What the research already shows (Search Console, Aug to Oct 2026)
- **The Sydney page is barely seen by Google:** about 27 impressions for property searches in three months, all in small numbers (for example "property settlement lawyers sydney", 11 impressions, position 12).
- **The homepage carries the Sydney property searches instead,** at around position 6 for over 2,000 impressions.
- **The Melbourne page takes the generic searches,** even from Sydney: "property settlement lawyers melbourne" (791 impressions, position 33), "property settlement lawyer" (384, position 33), "property settlement lawyer melbourne" (412, position 19). In August, "property settlement lawyer" sat at about position 8. By October it had dropped to about 32.
- **Technical checks are fine.** The page is indexable, canonicalised to itself, and the redirect from the old URL works.
- **The content and structure are the problem:**
  - The H1 is "Property Settlement After Separation in NSW", with no "lawyer" or "Sydney" in it.
  - A stray H2 ("Property Settlement Lawyer Sydney") sits above the H1.
  - The schema marks the page as an Article, not a legal service, and has no FAQ markup.
  - The live page is about 2,900 words. The project brief mentions a 7,200-word master text, but I don't have it in the project docs, so **ask me for it** before assuming it exists.

So the job is to make this unmistakably the **Sydney** property settlement **service** page:
- Lead the title, H1 and Quick Answer with Sydney and NSW.
- Give it LegalService, Service, Person and FAQPage schema like the mediation page.
- Add a clear "Our Melbourne office also handles property settlements" link, and make sure the Melbourne page links back. Google can then tell the two apart instead of letting Melbourne win Sydney searches.

Please re-check the data yourself through Windsor.ai (`searchconsole`) before relying on it, and check the competitors: [FGD](https://www.fgd.com.au/family-law/family-lawyers/sydney), [Barker Evans](https://www.barkerevans.com.au/services/family-law/), [Justice Family Lawyers](https://justicefamilylawyers.com.au/).

## Content rules (decided, do not undo)
- **No fixed fees or dollar figures.** The firm no longer offers fixed fees (Chad, 28 Sep 2026). Costs open a conversation.
- **Never "specialist" or "Accredited Specialist"** in new copy (DESIGN.md §7). Use "experienced family lawyers".
- **Never give legal advice.** The page is informational and builds trust.
- **Meta description and opening follow Problem, Agitation, Solution.**
- **British English, no em dashes,** few bullets, and a calm, compassionate, plain second person.
- **Sydney phone is (02) 8014 5885.** In the build it comes from the office config, never hard-coded.
- **No quick exit button.** It has been pulled from the site.
- **Consent orders:** `/consent-orders/` (8203) may later redirect here, but it also serves parenting consent orders, so that redirect is still undecided (see `claude/sydney-cannibalization-audit.md` in the project). This page should explain consent orders versus binding financial agreements clearly either way, and link to the child custody page for parenting consent orders.
- **Accuracy:** anything legal that's new or reworded (the four-step process, time limits of 12 months after divorce and 2 years after a de facto separation, superannuation splitting) gets a LEGAL REVIEW note for Tash.

## Process
1. Read the files above and the live page (WordPress MCP, `nolan_seo`, page 15908). Tell me the structure you're working from before designing.
2. Pull the search data and the competitor structures. Summarise in a few lines what the page must win.
3. Design the page in a **new** Claude Design canvas called "Nolan Property Settlement Sydney", reusing the mediation page's markup, styles and script. Upload images as assets, and convert any CMYK photos to RGB first.
4. Do an SEO and AI search pass:
   - Question-led H2s.
   - A Quick Answer box at the top.
   - An "In short" box under each major section.
   - 10 to 12 FAQs, all in the schema.
   - A reviewed-by byline.
   - Internal links to child custody, mediation and the property articles (the 50/50 myth, stamp duty, tax issues, inheritances).
5. Add yellow review notes for anything I or Tash need to confirm.
6. When I approve it, export it the same way as mediation:
   - A plain self-contained `property-settlement-sydney.html` in the export folder, tested at desktop and phone widths, including the reveal fix.
   - A new section in `BUILD-NOTES.md` (back up the file first).
   - The page row in `LAUNCH-PLAN.md` updated.

Don't change anything on the live WordPress site without asking me first.

## Known gotchas
- **Reveal bug:** a `[data-clip]` image that starts below the fold never reveals on phones unless there's a scroll "sweep". The fix is in the mediation export.
- **Header width:** the header button text must stay short (mediation uses "Book a mediation"), or the header overflows at 1440px.
- **Melbourne address:** still unconfirmed (L33 or Level 23, 385 Bourke St). Don't hard-code either.
- **Rooms photos** from the live site are CMYK JPEGs. Use RGB copies.
