# Nolan rebuild: decision log
**Started 10 Nov 2026 · Kept in `Nolan Website/export/` beside DESIGN.md and BUILD-NOTES.md**

This log does two jobs. It stops the build drifting: before anyone (Ben, Claude or Claude Code) changes something listed here, they check the entry and ask if a request conflicts with it. It's also the evidence trail for the case study: what we decided, what the data said at the time, and what we'll measure afterwards.

**How to add an entry:** give it the next number, the date, who decided, the decision in one sentence, the evidence (with numbers where there are any), and what we'll watch to know if it was right. Never delete an entry. If a decision changes, add a new one that supersedes it, and mark the old one "Superseded by D-xx".

Status values: **Decided** · **Pending** (waiting on someone) · **Superseded**.

---

## Baseline for the case study (before the rebuild)
Google Search Console and GA4 via Windsor.ai, unless noted.

| Measure | Baseline | Period |
|---|---|---|
| Site clicks from Google | Jun 515 · Jul 501 · Aug 507 · Sep 511 · Oct 450 | Monthly, 2026 |
| Site impressions | Aug 101k · Sep 107k · Oct 94k | Monthly, 2026 |
| Seasonality (Search Console clicks by month) | Oct 2025 373 · Nov 368 · **Dec 327** · **Jan 2026 493** · Feb 475 · Mar 497 · Apr 499 · May 564 · Jun 522 · Jul 476 · Aug 514 · Sep 515 · Oct 434 | Oct 2025 to Oct 2026 |
| Average position | About 9, slipping to 12 or 13 in late October | 2026 |
| Where Google clicks land | About 1,500 clicks in three months: homepage 717 (48%), team profiles about 470 (32%), everything else about 310 (20%) | Aug to Oct 2026 |
| Homepage over 12 months | 2,950 clicks, 731k impressions | Nov 2025 to Oct 2026 |
| Top profiles over 12 months | Tash Nolan 207 clicks · Anthony Saba 170 · Kate Frost 156 · Thomas Hobson 137 · Christopher Kissoglou 134 · Sandra Banjamin 122 · Anastasia Simes 115 · Samantha Lewis 103 | Nov 2025 to Oct 2026 |
| "family lawyers sydney" position | 1.7 (Aug) to 2.6 (Oct) | 2026 |
| "property settlement lawyer" position | 8.3 (Aug) to 31.6 (Oct) | 2026 |
| Sydney property page (`/property-settlement/`) | About 27 impressions for property searches, 0 clicks | Aug to Oct 2026 |
| Sydney mediation page | 5,738 impressions, 7 clicks, average position 32 | Aug to Oct 2026 |
| Call clicks tracked on site (GA4 `call_click`) | Aug 38 · Sep 17 · Oct 18 | 2026 |
| Form enquiries (GA4) | Aug 59 · Sep 61 · Oct 47 | 2026 |
| Calls counted by the firm | 80+ (Aug) down to 40 to 50 a month (early Nov) | Firm's own count |

Sources: `claude/enquiry-dip-diagnosis-nov-2026.md` and the mediation and property research of 8 to 10 Nov 2026.


### Baseline: Melbourne hub (`/melbourne-family-law/`, page 15711), recorded 12 Nov 2026, before any change
Search Console via Windsor.ai. Page-level figures. The page was published on 16 Feb 2026, so "12 months" is really eight months of data.

| Month (2026) | Clicks | Impressions | Avg position |
|---|---|---|---|
| Mar | 7 | 589 | 6.4 |
| Apr | 7 | 1,383 | 4.5 |
| May | 10 | 1,068 | 4.4 |
| Jun | 15 | 2,103 | 10.6 |
| Jul | 23 | 5,297 | 9.0 |
| Aug | 25 | 11,430 | 12.7 |
| Sep | 29 | 12,840 | 14.5 |
| Oct | 29 | 10,878 | 15.2 |
| Nov (1 to 10) | 4 | 3,070 | 16.0 |
| **Mar to Oct** | **145** | **45,588** | |

Note: the hand-off quoted 24,800 impressions and the redirect map 44,183. The page-level total above (45,588) supersedes both. Clicks (145) agree.

**What it ranks for** (query-level, Nov 2025 to Oct 2026, 749 queries, 71 clicks and 41,474 impressions; full list in `melbourne-hub-gsc-baseline.csv`):
- *Head terms, stuck on page two:* "family lawyers melbourne" 3,145 impressions, position 13.8 (13 clicks) · "family lawyer melbourne" 2,230, 15.2 · "divorce lawyers melbourne" 1,521, 22.3 · "divorce lawyer melbourne" 1,162, 15.9 · "family law melbourne" 933, 17.0 · "family law lawyers melbourne" 887, 18.0.
- *Mediation, already on page one (protect these):* about 12,100 impressions across 181 queries, 21 clicks. "family mediation melbourne" 1,722, position 2.2 · "family law mediation melbourne" 963, 3.4 · "mediation lawyer" 648, 2.4 · "family law mediators melbourne" 443, 4.6 · "mediation lawyers melbourne" 278, 3.0.
- *CBD:* "family lawyers melbourne cbd" 1,025, position 9.3.
- *Separation and divorce:* about 8,200 impressions, positions 15 to 33, 2 clicks.
- *Other:* "binding financial agreements melbourne" 502, position 1.0. Brand queries about 2,500 impressions, 32 clicks.
- Click-through is very low (71 clicks from 41k impressions): the title and description are not earning clicks even where the page ranks.

Current title: "Melbourne Family Law & Mediation | Nolan Lawyers". Meta: "Award-winning family law firm now in Melbourne. Doyle's Guide recognised specialists in complex property settlements, parenting matters & mediation" (uses "specialists", D-05). Focus keyword: "Melbourne Family Law".

---

## Decisions

### D-01 · 9 Sep 2026 · Ben and Claude · Decided
**Fix the Sydney cannibalisation: one URL per topic.** Child custody consolidated to `/child-custody-lawyer-sydney/` and property settlement to `/property-settlement/`, with 301s from `/child-custody-lawyer/`, `/parenting-agreements/` and `/property-settlements/`.
*Evidence:* Three child custody pages and two property pages were competing, some with identical SEO titles (`claude/sydney-cannibalization-audit.md`).
*Watch:* Rankings for "child custody lawyer sydney" and "property settlement lawyer sydney".

### D-02 · 28 Sep 2026 · Chad · Decided
**No fixed fees or dollar figures anywhere.** Fee links open a conversation ("Clear costs from day one").
*Evidence:* The firm no longer offers fixed fees, mediation included.
*Watch:* Enquiries mentioning cost; "Costs" topic selections in the enquiry form.

### D-03 · 28 Sep 2026 · Chad · Decided
**Homepage leads with "how can we help you", not a list of services.** Credibility markers near the top; a sticky header; prenups and BFAs added to the nav.
*Evidence:* Chad's review of the homepage design.

### D-04 · 4 Nov 2026 · Ben · Decided
**DESIGN.md v2.0 (Terracotta) is the single source of truth for design.** It supersedes DESIGN.md v1.0, "Nolan v5 DESIGN.md" and the "Nolan Family Law Design System" artifact.

### D-05 · 4 Nov 2026 · Ben (DESIGN.md §7) · Decided
**Never "specialist" or "Accredited Specialist" in new copy.** Use "experienced family lawyers". Body copy says "parenting arrangements"; "child custody" stays in headings for search.
*Evidence:* Advertising compliance.

### D-06 · 3 Nov 2026 · Ben and Claude · Decided
**Pause on-page changes on the old site; put effort into the Google Business Profile, reviews and citations.**
*Evidence:* Organic traffic was flat. Most calls arrive off-site (GBP and brand search). Brand search fell from 291 to 180 impressions (Aug to Oct).
*Watch:* GBP calls; brand search impressions.

### D-07 · Nov 2026 · Ben · Decided
**Quick exit button removed from the whole site.** Not to be rebuilt. The child custody prototype still shows it and must be corrected in the build.

### D-08 · 8 Nov 2026 · Ben · Decided
**Sydney phone number is (02) 8014 5885**, checked against the live site and the Google Business Profile. In the new build it comes only from the office config.

### D-09 · Nov 2026 · Ben and Chad · Decided
**Mediation is the firm's renewed focus.** The Sydney mediation page is the next page rebuilt after child custody.
*Evidence:* The firm is largely winning on core family law terms ("family lawyers sydney" at 1.7 to 2.6).

### D-10 · 8 Nov 2026 · Ben and Claude · Decided (URL part superseded by D-23: the page moves to `/sydney/mediation/`. Title and H1 stand)
**Mediation page keeps `/sydney-family-law-mediation/`; its title leads with "Family Mediation Sydney" and its H1 with "Family law mediation in Sydney".**
*Evidence:* The URL has 15,400 impressions over 12 months. "family mediation lawyer" (461) and "family mediation sydney" (350) are searched more than "family law mediation sydney" (95).
*Watch:* Positions for those terms (baseline 26 to 62); clicks to the page (baseline 7 in three months).

### D-11 · 8 Nov 2026 · Ben and Claude · Decided
**Build service pages for AI search as well as Google:** question-led H2s, a Quick Answer box at the top, an "In short" box under each section, 10 to 12 FAQs all in FAQPage schema, a reviewed-by byline, and Service and Person schema.
*Evidence:* Competitor review (Justice Family Lawyers, Marsdens, Segal) and the queries people use.
*Watch:* AI-assistant sessions in GA4 (the "ai-assistant" channel); appearances in AI Overviews.

### D-12 · 8 Nov 2026 · Ben and Claude · Decided
**The mediation page's two articles feed it, not compete with it.** It links to `/role-of-the-mediator/` and `/how-to-prepare-for-mediation/`, and both should link back with "family law mediation in Sydney".
*Evidence:* "Role of the mediator" ranks for informational searches (position 5 for "the mediator"); the service page for commercial ones. No overlap.

### D-13 · 10 Nov 2026 · Ben · Decided
**Tash Nolan (Principal) and Jessica Swain (Partner) are both Nationally Accredited Mediators and AIFLAM members. The site does not claim they can issue section 60I certificates.**
*Evidence:* Ben confirmed the accreditations. National mediator accreditation is not the same as Family Dispute Resolution practitioner registration.

### D-14 · 10 Nov 2026 · Ben · Decided
**Titles: Tash is Principal, Jessica is Partner.** The old mediation page said "Director" and "Special Counsel".

### D-15 · 10 Nov 2026 · Ben and Claude · Decided
**Build order: property settlement (Sydney) next, then the Melbourne hub (which sets the city hub template), then the Sydney hub and prenups.**
*Evidence:* "property settlement lawyer" fell from 8.3 to 31.6. The Sydney property page has about 27 impressions in three months; the homepage and the Melbourne page are taking its searches.
*Watch:* Sydney property page impressions and position after launch.

### D-16 · 10 Nov 2026 · Ben and Claude · Decided
**Launch Tuesday 15 Dec 2026, go/no-go Friday 11 Dec, content freeze Wednesday 9 Dec. Fallback Tuesday 19 Jan. No launch over the break.**

### D-17 · 10 Nov 2026 · Ben and Claude · Decided
**Protecting the homepage and the team profiles is the top launch priority.** The homepage's title, H1 and firm-level signals carry over and are checked by hand. Every profile keeps its exact URL (including the root-level ones such as `/kate-frost-riskalla/`), its name in the title, and its Person schema.
*Evidence:* Together they earn about 80% of the site's Google clicks: homepage 48%, profiles 32% (Aug to Oct 2026). (Corrected 10 Nov: an earlier figure of 83% for the homepage alone came from a filtered list.)
*Watch:* Homepage and profile clicks daily for the first two weeks, then weekly.

### D-18 · 10 Nov 2026 · Ben · Decided
**Redirects are built into the project. No URL that Google knows about will 404 at launch.** `REDIRECT-MAP.csv` lists all 115 known URLs with their launch treatment, and the build tests every one before launch.
*Evidence:* 104 live or historic URLs found (sitemaps plus 12 months of Search Console). 10 already redirect, one wrongly (`/our-team/our-team/` goes to a profile), and 3 return 404 today, including a divorce checklist PDF Google still sends people to.
*Watch:* Search Console "Not found" and "Page with redirect" reports for four weeks after launch.

### D-19 · 10 Nov 2026 · Ben · **Decided 12 Nov 2026: option B, in one hit at launch** (see D-23)
**URL structure: decide once, and only change URLs on 15 December or not at all. No staggered or later move.** Option A keeps today's URLs (25 redirects for legacy and broken URLs). Option B moves the service pages to `/sydney/...` and `/melbourne/...` (30 single-hop 301s); team profiles stay where they are under both options.
*Evidence:*
- **January is Nolan's busiest period, and it doesn't ease off.** Clicks went from 327 in December 2025 to 493 in January 2026 (+51%), then held at 475 to 564 a month through to October. December is the quietest month of the year, which makes mid-December the best window for any disruption.
- A second URL change in January to April would put a fresh reshuffle in peak season, on the same pages twice.
- Option B only moves service pages that earned about 273 of roughly 5,700 clicks in the past 12 months (about 5%). Those pages are being rewritten anyway, so Google will reassess them at launch regardless. The homepage and the profiles (about 80% of clicks) don't move under either option.
*Claude's recommendation (revised 10 Nov, superseding the earlier "A now, B in late January"):* If Ben wants the `/sydney/` and `/melbourne/` structure, do it at launch. Make it conditional: if the redirect test hasn't passed 100% at the go/no-go on 11 December, launch as option A instead. The map supports both, so that switch is one setting. Otherwise, choose A and don't plan a later move.
*Watch:* Clicks and positions for the moved pages weekly through December and January against this baseline.

### D-21 · 10 Nov 2026 · Ben and Claude · Decided
**Team profiles keep their exact URLs under both URL options**, including the root-level ones (`/kate-frost-riskalla/`, `/samantha-lewis/`, `/kim-ford/` and others).
*Evidence:* The eight root-level profiles earned about 470 clicks in 12 months. A tidier path isn't worth the risk.

### D-22 · 10 Nov 2026 · Ben and Claude · Decided (recommended)
**Protect the 15 December date by trimming scope, not by moving the date.** Any page not designed by the 9 December freeze goes live in the generic inner-page template at its final URL, and is redesigned in place in January and February. Changing a page's design and copy at the same URL is low risk. A late-January launch would land in peak season, so it becomes a last resort, used only if the redirect tests, tracking or forms fail.

### D-20 · 10 Nov 2026 · Ben · Decided
**Keep this decision log, and check it before every page and every build step.**
*Evidence:* Ben, to avoid drift and to support the case study.

### D-23 · 12 Nov 2026 · Ben · Decided
**Move to the `/sydney/` and `/melbourne/` structure (option B) in one hit on launch day, 15 December. No later or staggered URL changes.** The homepage, team profiles, articles, About, Contact, Fees and the legal pages keep their URLs. Each moved page gets exactly one 301 from every old URL it has had (see `REDIRECT-MAP.csv`, option B columns).
*Why:* A clearer long-term structure. Every service page states its city in the path, so Google and AI assistants can match pages to offices more easily. The Sydney and Melbourne versions of each service sit in parallel folders, which makes the location toggle and internal linking systematic, and it scales to new services or offices. Search Console and GA4 can report each office separately, by folder. It also matches the original project brief.
*Honest limits:* The URL path is a small ranking signal. The gains come from the structure working together with the new content, schema and internal links, not from the folder names alone. Expect two to four weeks of movement on the moved pages after launch.
*Condition:* If the redirect test isn't passing 100% at the go/no-go on 11 December, launch on today's URLs (option A) instead, with one setting (`URL_MODE=A`), and raise the URL change again after the January to April peak.
*Highest-value moved URL:* `/melbourne-family-law/` (145 clicks and 24,800 impressions in 12 months) moves to `/melbourne/family-law/`. Watch it closely.
*Watch:* Search Console URL-prefix properties for `/sydney/` and `/melbourne/` (set up on launch day); weekly clicks and positions for every moved page against the baseline through January.

### D-24 · 12 Nov 2026 · Ben (follows from D-23) · Decided
**The Sydney hub is `/sydney/family-law/`** ("Separation and divorce" in the nav). `/family-lawyer/` (22,900 impressions in 12 months) and `/family-law-services/` (16,000 impressions) both 301 to it. `/divorce-lawyer/` stays a separate service page at `/sydney/divorce-lawyer/`. This answers Q-2.

### D-25 · 12 Nov 2026 · Ben and Claude · Decided
**One routes file is the only place a URL is written.** Nav, footer, internal links, breadcrumbs, canonicals, schema `@id`s, the sitemap and the redirects are all generated from it, with `URL_MODE=B` as the launch setting. Links inside the 39 imported articles and the profiles are rewritten to the new URLs during import, so no page on the new site links through a redirect.
*Evidence:* The prototypes currently disagree. The child custody and mediation prototypes link to `/sydney/...` paths, while the property settlement prototype uses today's URLs (its build notes, open item 14).


### D-26 · 12 Nov 2026 · Ben · Decided
**Anastasia Simes's title is Partner** everywhere: the Melbourne hub, her Person schema, the Melbourne drafts and the profile. "Special Counsel" in the older notes and the five Melbourne drafts is out of date.
*Evidence:* Her live profile (page 9499) says Partner; Ben confirmed it.

### D-27 · 12 Nov 2026 · Ben · Decided (answers Q-7)
**The Melbourne office offers mediation.** On the Melbourne hub, mediation is a main route card, and a Melbourne mediation page follows at `/melbourne/mediation/` (added to `REDIRECT-MAP.csv`; not yet designed). The hub keeps "& Mediation" in its title.
*Evidence:* The Melbourne page already ranks on page one for about 12,100 impressions of mediation searches ("family mediation melbourne" position 2.2, "family law mediation melbourne" 3.4), while the live page's mediation card says "coming soon".
*Still to confirm:* who mediates in Melbourne, and their accreditations (D-13 covers only Tash and Jessica). A review note goes on the page until this is answered.
*Watch:* Positions for the mediation queries in the Melbourne baseline, weekly from launch.

### D-28 · 12 Nov 2026 · Ben · Decided
**All four Melbourne drafts are reworked and published as Melbourne articles linked from the hub:** de facto property rights in Victoria (15996), separation vs divorce in Victoria (15994), spousal maintenance in Melbourne (15998, absorbing 15999's earning-capacity section) and family violence and property settlements in Victoria (16001). Before publishing, each is updated for Anastasia as Partner (D-26), drops the office level (Q-4), is brought in line with the Family Law Amendment Acts of 2023 and 2024, and goes to Tash for legal review. The reworked articles go into the new Claude Code build (hosted on Vercel) with the other imported articles at launch, not onto the old WordPress site. WordPress is only the source of the draft text (see Q-5).
*Known legal fixes:* 16001 still describes the presumption of equal shared parental responsibility, repealed from 6 May 2024. 15996 uses the old four-step property process, restructured by the 2024 Act (in force 10 June 2025). The 2008/2009 Victorian referral wording needs checking.
*Watch:* Separation and divorce queries on the hub (about 8,200 impressions at positions 15 to 33) once the articles link from it; overlap with the existing Sydney spousal maintenance articles.

### D-29 · 12 Nov 2026 · Ben · Decided
**WordPress draft 15999 (the duplicate spousal maintenance draft) goes in the bin once its earning-capacity section has been merged into 15998.** It's a draft, so nothing public changes.


### D-30 · 12 Nov 2026 · Ben · Decided
**The local office phone number leads in the header on every page, from the office config.** At 1321px and wider, a slim strip above the sticky header shows the local office and number first and the other city second. From 901 to 1320px, a phone link sits beside "Talk to us". On phones, a "Call" button sits beside Menu. Melbourne pages lead with (03) 9088 8889, Sydney pages with (02) 8014 5885 (D-08), and pages with no city with Sydney first. First built on the Melbourne hub (the city hub template), then carried to every page.
*Evidence:* Calls are the firm's main enquiry route (80+ a month in August, 40 to 50 in early November, firm's count), and GA4 `call_click` is a baseline measure (Aug 38, Sep 17, Oct 18). The header previously had no number at all, and on phones the number was one tap away in the menu. The number did not fit inline beside the nav at 1321 to 1440px (90px overflow, tested), hence the strip.
*Watch:* GA4 `call_click` by page and by header position against the Aug to Oct baseline.


### D-31 · 12 Nov 2026 · Ben · Decided
**Long pages get one mid-page prompt, no more.** A light card halfway down the guide ("Not sure how this applies to you?", the primary button and the local phone number), not a second navy band. Its links carry `data-cta-position="mid"`. First used on the Melbourne hub, and part of the city hub template.
*Evidence:* On the Melbourne hub there were about 8,000px between the hero buttons and the contact band on desktop, with nowhere to act in between. One prompt helps; more would feel like being chased, which is the wrong tone for readers on a hard day.
*Watch:* GA4 clicks and calls by `data-cta-position` (hero, mid, contact band). If the mid prompt earns little after a month, take it out.

### D-32 · 12 Nov 2026 · Ben · Decided
**Melbourne hub approved and exported** (`melbourne-family-law.html`, Melbourne hub and City hub template sections in `BUILD-NOTES.md`). Title "Family Lawyers & Mediation Melbourne | Nolan Family Law", H1 "Family lawyers and mediation in Melbourne", chosen to keep the page-one mediation rankings while lifting the head terms off page two (baseline above).
*Watch:* the Melbourne baseline queries weekly from launch, especially "family mediation melbourne" (2.2) and "family lawyers melbourne" (13.8).

---

## Open questions (become decisions when answered)
| # | Question | Who |
|---|---|---|
| ~~Q-1~~ | ~~URL structure~~ Answered 12 Nov: option B in one hit at launch (D-23). Let Chad know at the week 2 call | Ben |
| ~~Q-2~~ | ~~Sydney hub URL~~ Answered 12 Nov: `/sydney/family-law/` (D-24) | Ben |
| Q-3 | Does `/consent-orders/` redirect to property settlement, stay as a hub, or split? | Ben |
| Q-4 | Melbourne address: Level 23 or Level 33, 385 Bourke St | Ben, against the GBP |
| Q-5 | Articles: import into the new site, or keep WordPress as the content source? | Ben, with Claude Code |
| Q-6 | Does Nolan offer shuttle mediation? Does the firm decline to act for either party after mediating? | Tash |
| ~~Q-7~~ | ~~Does the Melbourne office offer mediation?~~ Answered 12 Nov: yes (D-27). Who mediates there is still to confirm | Chad |
| ~~Q-8~~ | ~~Property master text~~ Answered 10 Nov: Ben supplied it (see `claude/property-settlement-page-build-notes-nov-2026.md`) | Ben |
| Q-9 | Rank Math may hold redirects we haven't seen. Export them (Rank Math → Redirections → Export) so they can be merged into the map | Ben |
| Q-11 | Who mediates in Melbourne, and what accreditations do they hold? | Chad |
| Q-10 | Restore the "Ultimate Divorce Checklist" PDF (it still gets search traffic), or redirect it? | Ben |
