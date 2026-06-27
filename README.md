# Creative Stitches Workroom

Marketing site for Creative Stitches Workroom (custom drapery + upholstery workroom,
Grand Blanc, MI). A ZeroBeatLabs client build. Astro 5 static site, deployed to
GitHub Pages, domain via Cloudflare DNS.

## Develop

```
npm install
npm run dev      # local preview
npm run build    # static output to dist/
npm run check    # astro + type check
```

## Structure

- `src/data/business.ts` — single source of truth for NAP + services. Schema,
  footer, and the service pages all read from here. Edit business facts here, not
  in templates.
- `src/layouts/Base.astro` — shared head, nav, footer, and site-wide LocalBusiness
  JSON-LD.
- `src/pages/services/[slug].astro` — one template, all five service pages, fed by
  the `services` array.

## Before launch (TODO)

- Replace `[DRAFT]` copy after the client call; confirm hours, years, services.
- Swap placeholder palette in `global.css` for the client brand colors + add logo.
- Add real project photos to the gallery (Facebook/Houzz export) with alt text.
- Import real reviews (Google / Birdeye / Facebook) with attribution.
- Add the Web3Forms access key in `contact.astro` and the branded inbox.
- Add `geo` + `openingHoursSpecification` to `business.ts` for the schema.
- DNS cutover (Cloudflare) + email (Workspace) coordinated so neither breaks.
