# Nolan Family Lawyers & Mediation — Design System
**Version 1.0 · July 2026 · Website Rebuild**

---

## 1. Design Philosophy

**Measured strength, quietly delivered.**

People arrive at a family law website on one of the hardest days of their lives. The design must do three things at once:

- **Trust** — the visual authority of an established firm: deep ink tones, a confident serif, generous margins. Nothing loud, nothing salesy.
- **Precision** — a strict grid, disciplined type scale, and restrained ornamentation mirror the firm's litigation-ready rigour. Every element earns its place.
- **Compassion** — warm off-whites instead of clinical white, soft light imagery, breathing room around every block. Whitespace is the design's empathy: it lowers cognitive load for stressed readers.

The current site says a lot at once. The new site says less, more clearly — echoing the firm's own words: *Clarity. Compassion. Resolution.*

---

## 2. Color Palette

### Core
| Token | Hex | Use |
|---|---|---|
| Ink Navy | `#16283A` | Primary brand tone — headings, footer, dark sections |
| Deep Ink | `#0D1B29` | Darkest surfaces, hero overlays |
| Bone | `#F7F4EF` | Page background (warm, never clinical white) |
| Warm White | `#FCFBF8` | Cards, elevated surfaces |
| Stone | `#E5DFD4` | Hairline borders, dividers |

### Text
| Token | Hex | Use |
|---|---|---|
| Text Primary | `#1C2B3A` | Body copy on light |
| Text Muted | `#5D6873` | Secondary copy, captions |
| Text on Dark | `#EDE8DF` | Copy on navy surfaces |

### Accent
| Token | Hex | Use |
|---|---|---|
| Burnished Sienna | `#A9552F` | CTAs, links, key moments only (evolves the current orange — deeper, more considered) |
| Sienna Hover | `#8F4525` | Button hover |
| Brass | `#B08D57` | Award/recognition details on dark navy only |

**Rules:** one accent moment per viewport. Never sienna text on navy. Brass is reserved for the Doyle's Guide recognition treatment.

---

## 3. Typography

| Role | Face | Why |
|---|---|---|
| Headings / display | **Newsreader** (serif, optical sizing) | Contemporary editorial serif — legal gravitas without the dusty "law firm Trajan" cliché |
| Body / UI | **Instrument Sans** | Neutral, highly legible, warm geometry; pairs cleanly with Newsreader |

### Scale (desktop → clamps down on mobile)
| Style | Size / Line | Weight | Notes |
|---|---|---|---|
| Display | 64/1.05 | 400 | Hero only. Newsreader, −1% tracking |
| H1 | 48/1.1 | 400 | Page titles |
| H2 | 36/1.15 | 400 | Section titles |
| H3 | 22/1.3 | 500 | Card titles (Newsreader Medium) |
| Body L | 19/1.65 | 400 | Intro paragraphs |
| Body | 16/1.6 | 400 | Default |
| Caption / Overline | 13/1.4 | 500 | Instrument Sans, +12% tracking, uppercase, muted |

Serif headings are always regular-to-medium weight — authority comes from size and space, not boldness.

---

## 4. Spacing & Grid

**8pt base grid.** All spacing is a multiple of 8: `8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`.

- **Container:** max-width 1200px, 24px side gutters (mobile), 48px (tablet+)
- **Section rhythm:** 128px vertical padding desktop, 80px mobile — deliberately generous; this is the compassion budget
- **Columns:** 12-col fluid grid; cards collapse 3 → 2 → 1 via `auto-fit, minmax(280px, 1fr)`
- **Reading measure:** body copy capped at 65ch

---

## 5. Component Styling

### Buttons
| | Primary | Secondary |
|---|---|---|
| Fill | Sienna `#A9552F` | Transparent |
| Text | Warm White | Ink Navy |
| Border | none | 1px Ink Navy |
| Radius | 2px (near-square — precise, not playful) | 2px |
| Padding | 16px 32px | 16px 32px |
| Hover | `#8F4525`, translateY(−1px) | Ink Navy fill, warm-white text |

Type: Instrument Sans 15px, weight 500, +4% tracking. Transitions 180ms ease-out.

### Input Fields
- Warm White fill, 1px Stone border, 2px radius, 14px 16px padding
- Focus: 1px Ink Navy border + 3px rgba(22,40,58,.08) ring
- Labels above fields, 13px overline style

### Content Cards
- Warm White on Bone background, 1px Stone border, 2px radius
- 32px internal padding
- Shadow: none at rest (flat = calm); hover `0 12px 32px rgba(13,27,41,.08)` + border darkens to Ink Navy 20%
- Card link: sienna, arrow glyph `→` shifts 4px right on hover

### Recognition / Awards treatment
Doyle's badges are replaced by a typographic honour roll: brass hairlines, years in Newsreader, category in overline caps, set on Deep Ink. No laurel clip-art.

### Links
Sienna, no underline at rest; underline on hover, 2px offset.
