# Nolan Family Law & Mediation — Website Project

Sydney/Melbourne dual-city rebuild. Design by Claude Design, build by Marzipan.

## Repository structure

```
docs/
  design-spec.md        Design & technical specification (palette, type, IA, UI
                         components, copy standards, structured data, sign-off list)

design/
  Homepage v1.dc.html    Earliest concept export
  Homepage v2.dc.html    Second iteration
  Homepage v3.dc.html    Latest — matches docs/design-spec.md palette and copy
  support.js             Claude Design canvas runtime (generated, do not edit)
  doc-page.js            Claude Design starter component (generated, do not edit)
  image-slot.js          Claude Design starter component (generated, do not edit)
  assets/
    nolan-logo.webp       Site logo used across all homepage versions
  placeholders/
    *.png / *.jpg         Placeholder imagery referenced by the v2/v3 exports

reference/
  Loose reference assets not currently wired into a design export
  (brand photography, an inspiration screenshot). Kept for context, not in use.
```

## Where to start

- **`docs/design-spec.md`** is the source of truth for brand, IA, and build
  requirements. It has one open sign-off item: confirming the live
  review-rating widget against NSW/Victorian legal advertising rules before
  build.
- **`design/Homepage v3.dc.html`** is the most current design export and the
  one that matches the spec's palette (`#1A2E40` / `#8F9E8B` / `#F9F6F0` /
  `#2C3E50`) and typography (Playfair Display / Open Sans). Treat v1 and v2
  as earlier concept rounds, kept for reference.

## Viewing the `.dc.html` exports

These are Claude Design canvas exports. Open the file directly in a browser
— each one loads its own `support.js` runtime and pulls images from the
adjacent `placeholders/` and `assets/` folders via relative paths, so keep
the folder structure intact when copying files elsewhere.
