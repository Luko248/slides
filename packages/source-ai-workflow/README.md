# @slides/source-ai-workflow

Presentation source package for the "ai-workflow" deck.

## What this package exports

- `src/source.ts` with:
  - presentation metadata (`meta`)
  - source theme tokens (`theme`)
  - footer branding (`footer`)
  - ordered slide list (`slides`)

## Content format

Slides can be Astro (`.astro`) or MDX (`.mdx`) components. The app shell loads them through the exported `slides` array.
