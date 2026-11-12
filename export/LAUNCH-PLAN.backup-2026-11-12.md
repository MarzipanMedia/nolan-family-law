# Nolan Family Law & Mediation: launch plan
**Written 10 Nov 2026 · Target launch Tuesday 15 December 2026 · Go/no-go Friday 11 December**

The office closes on Wednesday 23 December and reopens on Monday 11 January. Launching on 15 December leaves six working days to watch the new site and fix anything before the break. It also lands in the **quietest month of Nolan's year**: Google clicks dropped to 327 in December 2025, then jumped to 493 in January (+51%) and stayed near 500 a month afterwards. Any ranking wobble from the launch has about four weeks to settle before divorce season starts.

**We protect the date by trimming scope, not by moving the date** (D-22). Any page not designed by the 9 December freeze launches in the generic inner-page template at its final URL, and is redesigned in place in January and February. A late-January launch would land in peak season, so it's a last resort, used only if the redirect tests, tracking or forms fail at the go/no-go.

Every decision behind this plan, with its evidence, is in `DECISIONS.md`. Check it before changing anything here.

Who does what: **Ben** designs each page with Claude in Claude Design and runs SEO, reviews and sign-off. **Claude Code** builds from the exported prototypes, DESIGN.md and BUILD-NOTES.md. **Chad** reviews direction (by call, not written tasks). **Tash** signs off legal wording.

---

## 1. Decisions needed this week (before any more building)

These shape everything Claude Code does, so they come first.

**1a. URLs: the `/sydney/` and `/melbourne/` structure, in one hit at launch (decided 12 Nov, D-23).** Service pages move into city folders on 15 December, and every old URL they have ever had gets a single 301 to the new one. `REDIRECT-MAP.csv` in this folder lists all 115 URLs Google knows about and is the source for every redirect (use its option B columns). **No known URL may 404 at launch**, and every redirect is a single hop. Claude Code builds the redirects from that file and tests every row (see the Redirects section of BUILD-NOTES.md).

What doesn't move: the homepage, every team profile (including the root-level ones, D-21), all 39 articles, About, Contact, Fees, the ads landing page and the legal pages. Together they earn about 80% of clicks.

**The one condition:** if the redirect test isn't passing 100% at the go/no-go on 11 December, we launch on today's URLs instead (`URL_MODE=A`, one setting), and revisit the move after the January to April peak. There will be no staggered or later move while Nolan is busy (D-19).

| Nav or footer item | Launch URL | 301 from (today's URLs) | Page ID today |
|---|---|---|---|
| Home | `/` | (unchanged) | 1071 |
| Protecting my children | `/sydney/child-custody-lawyer/` | `/child-custody-lawyer-sydney/`, `/child-custody-lawyer/`, `/parenting-agreements/` | 15631 |
| Dividing property and assets | `/sydney/property-settlement/` | `/property-settlement/`, `/property-settlements/` | 15908 |
| Separation and divorce (Sydney hub) | `/sydney/family-law/` | `/family-lawyer/`, `/family-law-services/` (D-24) | 12267 |
| Prenups and BFAs | `/sydney/prenuptial-agreements/` | `/prenuptial-agreement-sydney/`, `/prenuptial-agreements/` | 8427 |
| Our People | `/our-team/` | (unchanged) | 6195 |
| Mediation | `/sydney/mediation/` | `/sydney-family-law-mediation/`, `/mediation/` | 14821 |
| Melbourne family lawyers | `/melbourne/family-law/` | `/melbourne-family-law/` (the highest-value moved URL: 145 clicks and 24,800 impressions in 12 months) | 15711 |
| Melbourne child custody | `/melbourne/child-custody-lawyer/` | `/melbourne-family-law/child-custody-lawyer-melbourne/` | 16053 |
| Melbourne property settlement | `/melbourne/property-settlement/` | `/melbourne-family-law/property-settlement-melbourne/` | 15915 |
| Melbourne prenuptial agreements | `/melbourne/prenuptial-agreements/` | `/melbourne-family-law/prenuptial-agreement-melbourne/`, `/prenuptial-agreement-melbourne/` | 15889 |
| Fees | `/fees/` (new) | | |
| Contact | `/contact/` | (unchanged) | 1480 |

Other Sydney service pages follow the same pattern: `/sydney/divorce-lawyer/`, `/sydney/de-facto-relationship-lawyer/`, `/sydney/domestic-violence/`, `/sydney/collaborative-family-law/` and `/sydney/consent-orders/` (until Q-3 is decided). The full list is in the map.

**Preparing for the move (D-25):**
- **One routes file** holds every URL, with `URL_MODE=B`. Nav, footer, internal links, breadcrumbs, canonicals, schema `@id`s, the sitemap and the redirects are all generated from it. The property settlement prototype uses today's URLs and the other two use `/sydney/` paths; the routes file settles that.
- **Rewrite internal links** inside the 39 imported articles and the profiles to the new URLs during import, so nothing on the new site links through a redirect.
- **Launch day:** update the Google Business Profile website links (Melbourne especially, which probably points to `/melbourne-family-law/`) and any Google Ads final URLs that point at moved pages.
- **For four weeks after launch:** keep a temporary sitemap of the old URLs submitted in Search Console, so Google finds and processes the redirects faster. Then remove it.
- **Set up URL-prefix properties** in Search Console for `/sydney/` and `/melbourne/`, to report each office separately (useful for the monthly reports and the case study).
- **Leave the 100 or so citations** added in October as they are. The redirects cover them, and only the key directories (Law Society, Doyle's, Best Lawyers) are worth updating by hand.

**1b. The homepage and the team profiles earn most of the traffic.** Of about 1,500 Google clicks from August to October, the homepage earned 717 (48%) and the team profiles about 470 (32%), from people searching lawyers' names. The homepage's title, main heading and firm-level signals (Doyle's, both offices, the practice areas) must carry over; compare old and new side by side before launch. Every profile must keep its exact URL, including the root-level ones such as `/kate-frost-riskalla/`, with the person's name in the title and Person schema. Profiles are a week 4 build, but treat them as launch-critical, not as carry-overs.

**1c. Articles: 39 published posts.** Some earn steady traffic ("11 questions to ask your divorce lawyer", "Role of the mediator", "How to prepare for mediation"). Every one must exist on the new site at the same URL, in a simple article template. Decide whether Claude Code imports them from WordPress or WordPress stays on as a content source.

**1d. Everything not being redesigned.** About 25 team profiles, the other service pages (de facto, domestic violence, collaborative law, consent orders, divorce, family law services, resources, about, Doyle's), legal pages, the Google Ads landing page `/lp/` and the enquiry thank-you page `/thanks-enquiry/`. Each needs one of three outcomes at launch: **rebuild** in the new templates, **carry over** as-is in the generic inner-page template, or **redirect** (301) to the closest new page. A full list is in section 4.

**1e. Melbourne address.** The call-experience brief says L33/385 Bourke St; the design files say Level 23. Confirm against the Google Business Profile before the office config is built.

---

## 2. Week-by-week schedule

| Week | Ben and Claude (design) | Claude Code (build) | Reviews |
|---|---|---|---|
| **1 · 10–13 Nov** | Decisions in section 1 · Property settlement (Sydney) designed | Site shell: header, footer, office config, PhoneLink, GTM (call-experience brief) · Homepage · Child custody · Mediation | Book a call with Chad for week 2 |
| **2 · 16–20 Nov** | Melbourne hub, which sets the **city hub template** | Property settlement · Generic inner-page and article templates · Article import | Chad call: homepage, mediation, property, URL decision |
| **3 · 23–27 Nov** | Sydney hub (from the city hub template) · Prenups and BFAs (Sydney) | City hub template · Melbourne hub · Sydney hub | Tash: child custody, mediation, property legal notes |
| **4 · 30 Nov–4 Dec** | Our People (team grid and profile template) · Melbourne child custody, property and prenups (forks of the Sydney pages) | Prenups · Our People and profiles · Melbourne service pages | Chad: team photos and which people to show |
| **5 · 7–11 Dec** | Fees · Contact · About and the carry-over pages | Fees, Contact, carry-over pages · Redirects · Staging QA (section 5) | **Wed 9 Dec: content freeze and Tash's final sign-off** · **Fri 11 Dec: go/no-go** |
| **Launch · Tue 15 Dec** | Launch checklist (section 6) | DNS or deploy switch, morning | Ben watches calls, forms and Search Console daily until 22 Dec |

Each design follows the same routine as the mediation page: search data first, design in Claude Design, an SEO and AI search pass, then export to this folder with a BUILD-NOTES section. Pages that fork from an existing template (Sydney hub, Melbourne service pages, prenups) should take about half a day each.

---

## 3. Page status

| Page | Design | Export | Build | Legal sign-off |
|---|---|---|---|---|
| Homepage | Done | Done | | |
| Child custody (Sydney) | Done | Done | | Notes open |
| Mediation (Sydney) | Done | Done | | Notes open |
| Property settlement (Sydney) | Done (approved 12 Nov) | Done | | Notes open (9 items for Tash) |
| Melbourne hub | Week 2 | | | |
| Sydney hub | Week 3 | | | |
| Prenups and BFAs (Sydney) | Week 3 | | | |
| Our People and profiles | Week 4 | | | |
| Melbourne child custody, property, prenups | Week 4 | | | |
| Fees, Contact | Week 5 | | | |
| Article template and 39 posts | Template only | | | |
| Carry-over pages (section 4) | Template only | | | |

---

## 4. Pages that are not being redesigned

To confirm with Ben. Suggested treatment for each:

| Page | URL | Suggested treatment |
|---|---|---|
| Team profiles (about 25) | `/our-team/...` and some at root, e.g. `/kate-frost-riskalla/` | **Launch-critical** (32% of clicks). Rebuild in the profile template at exactly the same URLs |
| Family lawyer | `/family-lawyer/` | Candidate for the Sydney hub (decision 1a) |
| Divorce lawyer | `/divorce-lawyer/` | Carry over. An expanded draft exists (16051) |
| De facto relationships | `/de-facto-relationship-lawyer/` | Carry over |
| Domestic violence | `/domestic-violence/` | Carry over, with care: check the copy against the trauma-informed tone |
| Collaborative family lawyer | `/collaborative-family-lawyer-sydney/` | Carry over |
| Consent orders | `/consent-orders/` | Carry over for now. The redirect question from the cannibalisation audit is still open |
| Family law services | `/family-law-services/` | Redirect to `/` or the Sydney hub |
| About us, Doyle's recommended | `/about-us/`, `/about-us/doyles-recommended/` | Carry over (the Recognition block links to `/about-us/`) |
| Resources | `/resources/` | Becomes the article index |
| Google Ads landing page | `/lp/` | **Keep working.** Check with whoever runs the ads before changing it |
| Enquiry thank-you | `/thanks-enquiry/` | **Keep.** Conversion tracking may depend on it. Fix "3 business hours" if that promise isn't accurate |
| Privacy policy, disclaimer | `/privacy-policy/` | Carry over. The new footer links to `/privacy` and `/disclaimer`: align these |
| Already redirected | `/child-custody-lawyer/`, `/parenting-agreements/`, `/property-settlements/` | Recreate the same 301s on the new platform |
| Theme demo pages | IDs 6306, 1647, 1077, 614, 324 | Drop them (404 or 410). They contain placeholder "business plan consultant" text |

---

## 5. Pre-launch QA (week 5, on staging)

Staging is set to noindex and password-protected until launch.

- Every URL in the live sitemap either loads on staging or has a planned 301. Claude Code should script this check against `sitemap_index.xml`.
- Titles, meta descriptions, canonicals and schema carried over for every page, with the homepage checked by hand.
- Phone links: Sydney (02) 8014 5885 and Melbourne (03) 9088 8889, from the office config only, and Melbourne pages show the Melbourne number.
- Enquiry forms deliver to the right inbox or CRM. One GTM container only. GA4 events and Google Ads call conversions fire (Tag Assistant and DebugView).
- No quick exit button anywhere. No fixed-fee figures anywhere. No "specialist" in new copy.
- Mobile check on an iPhone and an Android phone. Accessibility spot-check (keyboard, contrast, reduced motion).
- Scroll-reveal images appear on phones (the bug noted in the mediation build notes).
- Page speed: Core Web Vitals in the green on the homepage and the three main service pages.

---

## 6. Launch day and the week after

1. Morning launch (Tuesday 15 Dec), not Friday afternoon.
2. Remove noindex. Submit the new sitemap in Search Console. Request indexing for the homepage and the main service pages.
3. Test both phone numbers, every form and the thank-you page on the live site.
4. Update the Google Business Profile website links (with UTM tags, per the call-experience brief).
5. Daily until 22 Dec: Search Console coverage and 404s, GA4 enquiries and call clicks, a quick look at rankings for the head terms.
6. Monday 11 Jan: a post-launch check of the first four weeks against the August to October baseline.

---

## 7. Risks

| Risk | What we do about it |
|---|---|
| Homepage rankings dip after launch | Keep its content signals (1b). Watch daily. Most dips settle in two to four weeks |
| Legal review not back by 9 Dec | Ask Tash for review in batches (week 3 and week 5), not all at once |
| Chad's input slows the schedule | Use short calls, not written briefs. Bring decisions, not open questions |
| Articles or profiles left behind | Scripted sitemap check (section 5) |
| Something breaks over the break | Launch no later than 15 Dec, with Ben checking daily until 22 Dec |
| Design falls behind schedule | Trim scope, not the date: unfinished pages launch in the generic template at their final URL (D-22) |
| URL change dents rankings into January | Change URLs only at launch, never in January to April. Use option B only if the redirect test passes 100% (D-19) |
