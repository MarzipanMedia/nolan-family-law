# Hand-off prompt: start the Nolan build in Claude Code

Open Claude Code in a new, empty project folder for the site, with access to the `Nolan SEO/Nolan Website/` folder on this computer, and paste everything below the line.

---

We're rebuilding the website for Nolan Family Law & Mediation (nolanlawyers.com.au), a Sydney and Melbourne family law firm. The site is moving off WordPress to a new build that you'll write, hosted on Vercel. Five pages are designed, approved and exported as self-contained HTML prototypes. Nothing has been built yet. Your job in this session is to plan the build, agree the plan with me, then build the foundations and the first pages.

**Launch is Tuesday 15 December 2026.** Content freeze is Wednesday 9 December and go/no-go is Friday 11 December. We protect the date by trimming scope, never by moving it (D-22).

## Read these first, in this order
All in `Nolan Website/export/`:
1. `DECISIONS.md`. Every decision so far, with its evidence (D-01 to D-32, plus the open questions). **If anything I ask, or anything in a prototype, conflicts with an entry, stop and ask me.** Add an entry for any new decision, with the next number, the date, the evidence and what to watch. We're keeping this log for a case study.
2. `LAUNCH-PLAN.md`. The schedule, the launch URL table, what isn't being redesigned, pre-launch QA and launch day.
3. `BUILD-NOTES.md`. How to build each page, what to wire up, the city hub template, the redirects and their tests, and every page's open items.
4. `DESIGN.md` (v2.0, Terracotta). The only design source. Ignore any other design file or design system you come across.
5. `REDIRECT-MAP.csv`. Every URL Google knows about, with its launch treatment. Use the option B columns.
6. The prototypes: `homepage.html`, `child-custody-sydney.html`, `mediation-sydney.html`, `property-settlement-sydney.html`, `melbourne-family-law.html`. They are design references, not production code. Each section has a `data-screen-label`, the yellow review notes are for us and never ship, and the JSON-LD in each head is the schema to reproduce.

Images: `Nolan Website/mediation-assets/` (use the `-rgb` room photos; the originals are CMYK) and `Nolan Website/melbourne-assets/`.

## Rules that are already decided (don't undo them)
- **URLs:** option B in one hit at launch (D-23). Service pages move to `/sydney/...` and `/melbourne/...`. The homepage, team profiles (including the root-level ones such as `/kate-frost-riskalla/`), articles, About, Contact, Fees and legal pages keep their URLs (D-21). Every old URL gets exactly one 301. No known URL may 404 (D-18). If the redirect test isn't passing 100% at go/no-go, we launch with `URL_MODE=A` instead.
- **One routes file** is the only place a URL is written (D-25). Nav, footer, internal links, breadcrumbs, canonicals, schema `@id`s, the sitemap and the redirects are all generated from it. The prototypes disagree about URLs in places; the routes file wins.
- **One office config** holds each office's name, address, phone and map link. Phone numbers, addresses and `LegalService` schema come only from it. Sydney is Suite 3, Level 22, 25 Bligh St, (02) 8014 5885 (D-08). Melbourne is 385 Bourke St, (03) 9088 8889, **with no level** until I confirm Level 23 or 33 (Q-4).
- **Header phone (D-30):** the local number leads in the header on every page. A strip above the sticky header at 1321px and up, a phone link beside "Talk to us" from 901 to 1320px, a Call button beside Menu on phones. The Melbourne prototype has the reference version, tested from 320px to 1440px.
- **Content:** no "specialist" anywhere (D-05). No fees or dollar figures (D-02). No quick exit button (D-07), and the child custody prototype still has one, so leave it out. British English, no em dashes. Tash Nolan is Principal; Jessica Swain and Anastasia Simes are Partners (D-14, D-26).
- **Reviews and the Google rating load live** from the Google Business Profile. Never hard-code or write them.
- **Protect the homepage and the team profiles above all** (D-17). Together they earn about 80% of the site's Google clicks. Every profile keeps its exact URL, the person's name in the title, and Person schema.
- **Don't change anything on the live WordPress site** without asking me. WordPress is only a source of content.

## What to build, in order
1. **Plan first.** Before writing code, read the files and give me a short plan: the framework (I'd expect Next.js on Vercel, but say if you'd recommend otherwise and why), the folder structure, how the routes file, office config and redirect generation fit together, how components map to the prototypes, and anything in the docs you think is wrong or missing. Wait for my OK.
2. **Project set-up.** Repo, Vercel project, and a staging deployment that is password-protected and `noindex` until launch.
3. **Routes file and office config**, with `URL_MODE=B`.
4. **Redirects from `REDIRECT-MAP.csv`, and the redirect test script** (BUILD-NOTES, "Redirects and URL safety"). Build these early, because the go/no-go depends on them: single hops, trailing slashes, host and protocol in one hop, query strings kept, `/wp-content/uploads/*` still served, and the four new Melbourne article rows plus `/melbourne/mediation/`.
5. **The site shell:** header (with D-30), mobile menu, footer (identical everywhere, DESIGN.md §5), the PhoneLink component, one GTM container, the scroll reveal with the mobile "sweep" (copy it from the property or Melbourne prototype, or below-the-fold images never appear on phones), the consultation CTA band, and the schema generator.
6. **Templates:** the inner-page template (child custody, mediation, property), the city hub template (Melbourne first; Sydney follows), the article template, and the profile template.
7. **Pages:** homepage, Sydney child custody, Sydney mediation, Sydney property settlement, Melbourne hub. Check each against its prototype at 1440px and 390px.

Content for the 39 articles and about 25 profiles comes from WordPress. Whether we import them once or keep WordPress as a content source is still open (Q-5): give me your recommendation in the plan. Links inside imported content are rewritten to the launch URLs, so nothing links through a redirect.

## Things I need to give you (ask me for them when you reach them)
- Vercel and GitHub access, and later the domain and DNS.
- Where the enquiry form posts (CRM or email). The form never sends field values to analytics.
- The GTM container and GA4 IDs, and the Google Ads call conversion set-up.
- A Google Places API key (or a review widget) for live reviews.
- Answers to the open questions in `DECISIONS.md`, including Q-4 (Melbourne level), Q-5 (articles), Q-9 (the Rank Math redirect export) and Q-10 (the divorce checklist PDF).

## Known gotchas
- **The reveal bug:** a `[data-clip]` image that starts below the fold never appears on phones without the scroll sweep.
- **Header width:** the header overflows at 1440px if the button text grows or the phone goes inline. Keep "Talk to us" short.
- **Photos:** the room photos from the live site are CMYK JPEGs. Use the RGB copies.
- **The property prototype's Tash photo is a placeholder silhouette.** Use `mediation-assets/tash-mediation.png`.
- **Footer links:** the live privacy URL is `/privacy-policy/`. Some prototypes say `/privacy`. The routes file decides.
- **Melbourne guides:** four of the six cards on the Melbourne hub link to articles that don't exist yet (D-28). Hide those cards until the articles are in, rather than linking to a 404.

## How to work
- Commit in small steps, with clear messages, on a branch, and tell me what changed after each step.
- Keep a short build log at the end of `BUILD-NOTES.md` (back the file up first) noting what's built, what's left, and anything that differs from a prototype and why.
- Test as you go: every page at 1440px and 390px, no horizontal overflow, one H1, valid JSON-LD, no console errors, and the redirect script passing on staging.
- Ask before deciding anything the docs don't settle.
