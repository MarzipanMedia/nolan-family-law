# Hand-off prompt: city-aware navigation, Melbourne mediation stub and the twin test

Copy everything below the line into the Claude Code session that builds the Nolan site.

---

Three linked fixes came out of a review of staging on 17 Nov 2026. They are decided (D-33 to D-36 in `DECISIONS.md`). Read those entries first, then `REDIRECT-MAP.csv` (two rows were added on 17 Nov) and the "City hub template" section of `BUILD-NOTES.md`.

## 1. The header follows the page's city (D-34)

**What is wrong today.** On `/melbourne/family-law/`, the header and the mobile menu link to `/sydney/child-custody-lawyer/`, `/sydney/property-settlement/`, `/sydney/family-law/`, `/sydney/prenuptial-agreements/` and `/sydney/mediation/`. Melbourne service pages are only linked from the footer and the hub body.

**The rule.** Every page has a city in the routes file: `melbourne`, `sydney` or `none`.

| Page | City |
|---|---|
| Anything under `/melbourne/` | melbourne |
| Melbourne articles (the two live ones and the four from D-28) and Anastasia Simes's profile | melbourne |
| Anything under `/sydney/` | sydney |
| Homepage, other profiles, other articles, About, Contact, Fees, legal pages | none (header shows Sydney links, as now) |

The five service items in the header resolve through the routes file by city:

| Nav label | Sydney | Melbourne |
|---|---|---|
| Protecting my children | `/sydney/child-custody-lawyer/` | `/melbourne/child-custody-lawyer/` |
| Dividing property and assets | `/sydney/property-settlement/` | `/melbourne/property-settlement/` |
| Separation and divorce | `/sydney/family-law/` | `/melbourne/family-law/` |
| Prenups and BFAs | `/sydney/prenuptial-agreements/` | `/melbourne/prenuptial-agreements/` |
| Mediation | `/sydney/mediation/` | `/melbourne/mediation/` |

"Our People" stays `/our-team/` in both.

**The city switch.** The phone strip (D-30) already names the other city second. Make that a link to the same service in the other city, and to the other city's hub where the page has no twin. Wording along the lines of "Also in Sydney" on Melbourne pages and "Also in Melbourne" on Sydney pages. Below 1321px, where there is no strip, the switch sits at the top of the mobile menu. On pages with no city, the strip links to both hubs.

**How it must be built.**
- Server-rendered `<a href>` links generated from the routes file (D-25). The HTML Google receives for a Melbourne page contains Melbourne links.
- No location detection of any kind: no IP lookup, no `navigator.geolocation`, no cookie or local storage that changes links or redirects a visitor. A returning visitor who last viewed Melbourne still gets Sydney links on a Sydney page.
- No `hreflang`. Both cities are the same language and country.
- The footer keeps both cities' service lists, as it does now.
- The location toggle inside the page body stays (project brief, item 5).

**Checks to add to the build's test run.**
1. On every page with city `melbourne`, the header and mobile menu contain no `/sydney/` link except the city switch. The reverse for `sydney`.
2. Every header, menu, strip and footer link returns 200 with no redirect.
3. The city switch on each twin page points at its twin, and the twin points back.

## 2. `/melbourne/mediation/` exists at launch (D-35)

It returns 404 on staging. Build it in the generic inner-page template now, at its final URL, so the Melbourne nav has a destination. Use the mediation section of the approved Melbourne hub (`melbourne-family-law.html`) as the starting content, expanded enough to stand alone. Keep "family mediation Melbourne" in the title and H1: the hub holds positions 2 to 5 for those searches and this page must support them, not compete. Carry a visible review note in staging for Q-11 (who mediates in Melbourne, and their accreditations). Do not claim section 60I certificates (D-13). Add it to the sitemap and to the hub's routing card. A designed version follows in January (D-22).

## 3. The twin test (D-36)

Add a script to the build checks that compares each Melbourne page with its Sydney twin:
1. Take the text of `<main>` only, with the header, footer, nav, scripts and styles removed.
2. Lower-case it and replace Sydney, Melbourne, NSW, New South Wales, Victoria and Victorian with one token.
3. Build the set of five-word shingles for each page and report the Jaccard overlap (shared shingles divided by all shingles).

Limits: service pages 30%, city hubs 50%. Print a table and fail the check when a pair is over. Results on 17 Nov: prenuptial agreements 89%, hubs 46%, child custody 5%, property settlement 2%. The prenup pair is expected to fail until the rewrite in `HANDOFF-melbourne-prenup.md` lands.

## 4. Redirect map

Two rows were added: `/collaborative-lawyer/` and `/collaborative-family-lawyer/`, both 301 to `/sydney/collaborative-family-law/` in one hop. The first returned 404 on staging. Re-run the redirect test over the whole map afterwards.

## When done
Update `BUILD-NOTES.md`: mark open item 7 in the Melbourne hub section as resolved by D-34, describe the nav rule in the City hub template section, and note the twin test beside the redirect test in the launch checks. Tell me the twin test table and the redirect test result.
