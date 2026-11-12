# Nolan Family Law & Mediation — DESIGN.md
**v2.0 · Locked 4 Nov 2026 · Source of truth: `Homepage v3.dc.html` (Terracotta palette)**
Supersedes `Design System.md` v1.0 (Newsreader / Instrument Sans) — do not use it.

---

## 1. Principles
**Measured strength, quietly delivered.** Readers arrive on a hard day. Every page should feel calm, credible and easy to act on.
- **Trust:** deep navy, a confident serif, generous margins. Nothing loud or salesy.
- **Clarity:** one idea per section, short paragraphs, a clear next step.
- **Compassion:** warm off-whites, never clinical white. White space lowers the load on stressed readers.
- **One terracotta moment per viewport.** It is reserved for the primary call to action.

---

## 2. Colour (Terracotta — approved)
CSS variables live on the root wrapper:
```css
--cta: #B4552F;        /* Terracotta — primary buttons only */
--cta-hover: #97462A;
--accent: #3A6D8C;     /* Harbour blue — eyebrows, link hover, focus ring, card hover border */
--deep: #1C2F40;       /* Dark sections (Recognition, CTA band) */
--star: #1C2F40;
--tint: #DCE9F0;       /* Text selection, soft fills */
--soft: #A9C9DB;       /* Focus halo on dark */
--rule: #CFE0EA;       /* Blue hairlines between alternating sections */
```
| Token | Hex | Use |
|---|---|---|
| Ink | `#1A2E40` | Headings, primary text links, logo-weight UI |
| Body | `#2C3E50` | Default body copy, nav links |
| Body soft | `#3F5060` | Intro/lede paragraphs |
| Muted | `#4A5A66` | Secondary copy, captions, meta |
| Bone | `#F8F6F2` | Page background, alternating sections |
| Paper | `#FEFDFB` | Elevated sections, cards on Bone |
| White | `#FFFFFF` | Text on terracotta/deep only |
| Stone | `#E8E4DC` | Hairline borders, card borders, dividers |
| Mist | `#BFC8D2` | Secondary button border |
| On-dark text | `#E3E9EE` | Footer links, body copy on `--deep` |
| On-dark muted | `#C3D0DC` / `#B6C2CE` | Footer headings, legal line |
| Star gold | `#B7791F` | Review stars only |

**Rules**
- Terracotta is never used for text on navy, and never for body links.
- Links: Ink at rest → `--accent` + 1px underline (3px offset) on hover.
- Sections alternate Bone ↔ Paper, separated by a 1px `--rule` or Stone hairline. Use a `--deep` section at most once per page.
- Contrast: body text ≥ 4.5:1. Muted `#4A5A66` is the lightest text allowed on Bone/Paper.

---

## 3. Typography
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
| Role | Face | Size / line-height | Weight | Notes |
|---|---|---|---|---|
| H1 (hero / page title) | Playfair Display | `clamp(40px, 5.4vw, 72px)` / 1.06 | 400 | `letter-spacing: -0.015em`, `text-wrap: pretty`. One per page |
| H2 (section) | Playfair Display | `clamp(30px, 4vw, 44px)` / 1.18 | 400 | |
| H3 (card / sub-section) | Playfair Display | 28px / 1.25 | 500 | |
| Eyebrow | Open Sans | 13px | 600 | Uppercase, `letter-spacing: 0.16em`, colour `--accent` |
| Lede | Open Sans | 19px / 1.65 | 400 | `#3F5060`, max 52ch |
| Body L | Open Sans | 17–18px / 1.65 | 400 | Long-form inner-page copy |
| Body | Open Sans | 16px / 1.6 | 400 | Default |
| Small / meta | Open Sans | 14–15px | 400–500 | Nav 14.5px/500 |
| Legal | Open Sans | 13px | 400 | Footer only |

- Serif headings are never bold. Authority comes from size and space.
- Reading width: 52–62ch for body text, 20–28ch for display headlines.
- Turn on kerning and common ligatures for h1–h3 and blockquotes.

---

## 4. Layout
- **Container:** `max-width: 1240px; margin: 0 auto; padding: 0 24px`.
- **Section rhythm:** `padding: 120px 24px` desktop → 72px at ≤900px.
- **Section header:** eyebrow, then H2, then an optional lede. A text link can sit right-aligned on the same line (`flex-wrap: wrap; gap: 24px 64px; margin-bottom: 48px`).
- **Grids:** `repeat(auto-fit, minmax(280px, 1fr))` with a 24px gap, going 3 → 2 → 1 columns. Always use `minmax(0,1fr)` tracks.
- **Breakpoints:** 1320px (nav collapses to the menu button), 1100px, 900px (the header CTA hides and sections compress), 520px.
- **Sticky header:** 82px tall, shrinking to 72px on scroll (logo 54 → 44px). Background is `rgba(248,246,242,0.92)` with a 14px backdrop blur. `scroll-margin-top: 104px` on anchors.
- Minimum width 320px. Use `overflow-x: clip` on the root.

---

## 5. Components

### Buttons
| | Primary | Secondary |
|---|---|---|
| Fill | `var(--cta)` | `rgba(248,246,242,0.6)` |
| Text | `#FFFFFF`, 15–16px / 600, `letter-spacing: 0.02em` | `#1A2E40`, same type |
| Border | none | 1px `#BFC8D2` |
| Radius | 2px | 2px |
| Padding | 18px 34px (hero/CTA) · 15px 26px (header) | 18px 34px |
| Hover | `var(--cta-hover)` | border → Ink |
| Press | `scale(0.975)` 160ms | same |

Minimum tap target is 44px (56px for full-width mobile CTAs). One primary button per viewport.

### Cards
`background: #F8F6F2` (or `#FEFDFB` on Bone), `border: 1px solid #E8E4DC`, `border-radius: 3px`, `padding: 34px`, flat at rest.
Hover (fine pointers only): `translateY(-3px)`, `box-shadow: 0 16px 40px rgba(26,46,64,0.10)`, `border-color: var(--accent)`, and the arrow `→` shifts 4px right.

### Image cards / gateways
Paper fill, Stone border, 3px radius, `overflow: hidden`. On hover the image scales to 1.04 inside its frame (640ms) and the arrow moves 5px.

### Recognition block
Sits on `--deep`. Text and type only, no laurel clip-art. Shows award year, category (eyebrow style) and the Principal's name and title. Tash Nolan's title is **Principal**.

### Reviews
Show the 4.9 rating with five `#B7791F` stars. Rotating quotes cross-fade over 280ms with a 3px blur.

### FAQ (`<details>`)
Hairline rows with a `+` that rotates 45° when open. The answer fades in over 260ms. Pressing a row scales it to 0.993.

### Forms
Paper fill, 1px Stone border, 2px radius, 14px 16px padding. Labels sit above fields. Focus: 1px Ink border plus a 3px `rgba(26,46,64,0.08)` ring.

### Focus
`:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }`

### Footer
- Dark (`--deep`). Columns: **Sydney** · **Melbourne** · **The firm** · **Offices** (address + phone).
- City columns, identical across both cities: `[City] family lawyers`, Child custody, Property settlement, Prenuptial agreements.
- The firm: Our people, Mediation, Fees, Contact us.
- Legal row: © line; "Liability limited by a scheme approved under Professional Standards Legislation."; Privacy policy; Disclaimer; `Website by Marzipan` (`rel="nofollow"`).
- No suburb links in the footer. Suburb pages are linked from their city hub only.

---

## 6. Motion
Easing: `cubic-bezier(0.23, 1, 0.32, 1)` everywhere. Hover only on `(hover: hover) and (pointer: fine)`.
| Pattern | Spec |
|---|---|
| Scroll reveal | opacity 0 → 1 and translateY 14px → 0 over 520ms. Siblings stagger 55ms (max 5). Elements visible on load stagger 70ms. Delay is cleared after the entrance |
| Image clip reveal | `clip-path: inset(0 0 100% 0)` → `inset(0)` over 760ms |
| Hero image | Settles from scale 1.035 to 1 over 1500ms |
| Nav link | 1px `--accent` underline scales in from the left |
| Press | 160ms scale (0.975 buttons · 0.99 large cards) |

`prefers-reduced-motion`: remove all transforms, clip-paths and blur, and keep only short opacity fades.

---

## 7. Content & compliance rules
- Never use "specialist" or "Accredited Specialist". Use **"experienced family lawyers"**.
- "Child custody" is fine as an SEO term, but use "parenting arrangements" in body copy where it fits.
- Fee links open a conversation (`/contact`), not a price list. Recognition links go to `/about-us/`.
- Tone: plain, calm, second person. Short sentences. No exclamation marks.
- Every page ends with the consultation CTA band.

---

## 8. Inner-page template
1. Sticky header (same on every page)
2. **Page hero:** eyebrow (practice area / city), H1, 19px lede, primary and secondary buttons. Optional image on the right with clip reveal.
3. **Breadcrumb:** 14px, Muted, under the hero.
4. **Body:** single column, 62ch max, with an optional sticky "On this page" list on the left at ≥1100px. H2 sections alternate Bone/Paper.
5. **Supporting blocks**, as needed: card grid of related services, FAQ, review strip, office card.
6. Consultation CTA band (`--deep`)
7. Footer

**SEO per page:** one H1 · a unique title tag (~60 characters) and meta description (~155 characters) · a breadcrumb with `BreadcrumbList` schema · `FAQPage` schema when there's an FAQ · city pages carry `LegalService` schema whose address and phone match the Google Business Profile exactly · internal links use descriptive anchor text.
