# Nolan Family Law & Mediation: website

The new nolanlawyers.com.au, built with Next.js and hosted on Vercel. Launch: Tuesday 15 December 2026.

**Read first:** `export/DECISIONS.md` (every decision, with evidence), then `export/LAUNCH-PLAN.md`,
`export/BUILD-NOTES.md` (its build log is at the end) and `export/DESIGN.md` v2.0.

## The three files that matter most

| File | What it is |
|---|---|
| `src/config/routes.ts` | **The only place a URL is written** (D-25). `URL_MODE=B` is the launch setting; `A` is the fallback |
| `src/config/offices.ts` | **The only place an office's name, address or phone is written** |
| `export/REDIRECT-MAP.csv` | Every URL Google knows, and what happens to it. The redirects are generated from it |

## Commands

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run test:redirects -- --base https://<staging-address> --auth user:password --old-sitemap
```

`npm run build` first regenerates the redirect table and checks the rules (no hand-written
URLs or phone numbers, no "specialist", no fees, no quick exit). It stops if any rule is broken.
`npm run test:redirects` is the go/no-go test: it must pass 100% on staging before launch.
`npm run import` re-reads articles, profiles and carry-over pages from WordPress (read-only).

## Where things are

- `src/site/pages/<page>/` : each designed page (`content.tsx` is the copy, `page.tsx` its title, description and schema).
- `src/site/city-hubs/` : one entry per city hub (copy, people, badges, guides, FAQ), rendered by the one city hub template in `src/site/templates/CityHubTemplate.tsx`. Never copy the template for a city.
- `src/site/templates/` : article, profile and carry-over templates. `src/components/` : the shell.
- `src/content/imported/` : articles, profiles and carry-over pages imported from WordPress (D-35).
- `tools/` : converting a new prototype from `export/` into a page, making responsive AVIF/WebP images, and checking a page at 1440px and 390px.
- `export/`, `mediation-assets/`, `melbourne-assets/` : design references. Never deployed.

## Settings (Vercel environment variables)

See `.env.example`. Staging is anything where `SITE_ENV` is not `production`: it is `noindex`,
closed to crawlers, and password-protected when `STAGING_USER` and `STAGING_PASSWORD` are set.
