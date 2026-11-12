# Nolan Family Law & Mediation — Design & Technical Specification

**Project:** Sydney/Melbourne dual-city build
**Prepared for:** Ben Adams, Marzipan
**Status:** Draft, reconciled with the live sub-folder fork already in production

This document extends the sub-folder fork already live at nolanlawyers.com.au (`/sydney/`, `/melbourne/`). It does not propose a new URL structure or a second migration.

---

## 1. Brand palette

| Token | Hex | Usage |
|---|---|---|
| Deep Navy | `#1A2E40` | Primary headers, footer, H1 typography, high-priority navigation |
| Calming Sage | `#8F9E8B` | Actionable accents, sub-headings, soft backgrounds, secondary focus borders |
| Warm Ivory | `#F9F6F0` | Page backgrounds and alternating sections, in place of clinical white |
| Charcoal | `#2C3E50` | Body copy. Avoid pure black on light backgrounds |

## 2. Typography

| Role | Typeface | Reasoning |
|---|---|---|
| Headings (H1–H3) | Playfair Display or Merriweather | Editorial serif; signals legal tradition and stability |
| Body / interface copy | Inter or Open Sans | Geometric sans-serif, legible at 16px+ on mobile for stressed readers |

## 3. Site architecture

Sydney's existing rankings stay under `/sydney/`. Melbourne is a second pillar under `/melbourne/`, not a rebrand of the whole site.

```
/                                  Global homepage (split-hero gateway)
/sydney/family-law/                Sydney pillar (existing)
/sydney/child-custody-lawyer/      Existing, being updated
/sydney/property-settlement/       Master Property Guide (new)
/sydney/family-lawyers-parramatta/
/sydney/family-lawyers-surry-hills/
/melbourne/family-law/             Melbourne hub (new)
/melbourne/child-custody-lawyer/   Melbourne fork (new)
/melbourne/prenuptial-agreements/  Melbourne asset (new)
/melbourne/family-lawyers-richmond/
/melbourne/family-lawyers-st-kilda/
/our-fees                          National transparency page
/contact                           Dual-office routing
```

Redirect: `/consent-orders/` → `/sydney/property-settlement/` (301). No other redirects required.

### Homepage: split-hero gateway

Desktop homepage uses a balanced split panel. Sydney on the left, with an architectural or bright-office backdrop. Melbourne on the right, with a bluestone laneway aesthetic. Each half carries its own localised call to action and routes into its own city tree. This is a layout choice, not a URL change.

### Why this differs from the big statewide firms

Larger firms (Mills Oakley was the reference point in this week's client call) can rely on scale: click "Melbourne," land on a generic location page, done. Nolan doesn't have that scale to lean on, so each city page needs to carry its own signal instead: the real people who practise there, their awards, their expertise. Not a templated location shell with the suburb swapped out.

## 4. Critical UI components

### A. Discreet exit control

Fixed button, bottom-right on mobile, mid-right on desktop. One click navigates instantly to `https://google.com.au` and clears the current page from the visible history where the browser allows it. It cannot guarantee a wiped back-button history across every browser — build to what it can reliably do, not a stronger claim. Colour: muted crimson or soft burnt orange.

### B. Trust anchor ribbon

Placed beneath the homepage hero and pinned above the footer sitewide.

- Law Society of New South Wales: Accredited Specialist badge
- Law Institute of Victoria: Accredited Specialist badge
- Doyle's Guide recognition medallions
- Live Google review aggregate rating, **pulled dynamically** — do not hard-code a rating figure in page copy

> **Flag for sign-off:** displaying a live star-rating widget and testimonial-style medallions can run into advertising rules set by the Law Society of NSW and the Law Institute of Victoria — confirm with Tash before build. Build the rating as a live pull from Google, never a static number: a single disputed review can move the score within days.

### C. Plain-English navigation

Service navigation is solution-driven, not built from legal terminology.

- **Protecting my children** — custody, parenting orders, relocation
- **Dividing property and assets** — financial settlements, corporate separation, spousal maintenance
- **Separation and divorce steps** — de facto relationships, filing processes

## 5. Voice and copy standards

All interface copy avoids adversarial language: no "fight," no "battle," no "protect your rights aggressively." Every meta description and introduction follows the Problem-Agitation-Solution framework. Tone stays grounding and reassuring throughout. British spelling; no em dashes.

**Brand personality (confirmed with the client this week):** calm and empathetic, but not to the point of being a soft touch. They know their craft, they're passionate about it, and there's a fierceness in that passion. Genuinely there to help, wanting the better result for the people in front of them.

### Global H1 hero text

> **Navigating family change with complete clarity.**
> Choosing the right path forward for your family calls for experienced legal guidance, emotional steadiness, and complete fee transparency.

### Split-hero buttons

**Sydney**
Serving the CBD, Parramatta, and greater metropolitan New South Wales.
CTA: *View Sydney specialists →*

**Melbourne**
Serving Collins Street, the inner suburbs, and greater regional Victoria.
CTA: *View Melbourne specialists →*

### Fee transparency section

> **Clear costs from day one.**
> Legal clarity shouldn't come with financial surprise. We outline our pricing structures openly at your initial strategy meeting, with fixed-fee options wherever possible, so you can plan your next steps with confidence.

### Content density and FAQs

Pare back word-blocky pages: shorter paragraphs, more air between sections, an FAQ block on every major service page. FAQs answer the practical questions a worried reader has, and they're one of the most reliable ways to pick up featured snippets and "Quick Answer" AI Overview callouts.

## 6. Technical requirements

Mobile-first build: over 65% of local family law search volume happens on a phone. No horizontal scroll anywhere. Oversized touch targets on every phone link. Compressed imagery throughout.

### Structured data, per office

| Office | LegalService / LocalBusiness | Person schema |
|---|---|---|
| Sydney, Bligh St | Sydney NAP, NSW Family Court references | Natasha (Tash) Nolan, linked as verified author on the Property Settlement guide |
| Melbourne, Bourke St | Melbourne NAP, Victorian legal bodies | Anastasia Simes, linked as the Melbourne lead asset |

Each location page carries a self-referential canonical tag, so Sydney and Melbourne pages never compete with each other for the same query.

## 7. Sign-off checklist

- [ ] **Open** — Confirm the live review-rating widget against NSW and Victorian legal advertising rules; build as a dynamic pull, never a hard-coded score.
- [x] **Aligned** — URL architecture matches the sub-folder fork already in production; no new redirect map required beyond the existing `/consent-orders/` 301.
- [x] **Aligned** — Person schema names both Tash Nolan and Anastasia Simes against their offices.
- [x] **Aligned** — Voice, per-office differentiation, and FAQ/density direction confirmed with the client this week.
