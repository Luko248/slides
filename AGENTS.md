# AGENTS.md

## Build, test, and lint commands

- Prefer **Bun** in this repo. The workspace has a `bun.lock`, and GitHub Pages deploys with `bun install` + `bun run build`.
- Install dependencies: `bun install`
- Start the deck locally: `bun run dev`  
  Astro is configured to run on **port 4444**.
- Build and type-check: `bun run build`  
  This runs `astro check && astro build`.
- Preview the production build: `bun run preview`
- Run Astro commands directly: `bun run astro ...`
- There is currently **no dedicated test runner or lint script** in the workspace, so there is also **no single-test command**. Use `bun run build` as the main validation path.

## High-level architecture

- This is an **Astro workspace for slide decks**, not a generic content site. The app shell lives in `src/pages/index.astro` and renders one active presentation source at a time.
- The active deck is selected in `src/config/app.config.ts` via `slidesSource`. `src/config/slides-sources.ts` is the registry that maps that key to a workspace package export.
- Each deck lives in `packages/source-*/` and exposes `./source` from `src/source.ts`. A source object provides:
  - `meta` for document metadata
  - optional `theme` overrides
  - `footer` branding
  - ordered `slides`
- Shared UI and behavior live in root `src/`:
  - `src/components/slide/Slide.astro` is the core slide wrapper
  - `src/components/progress/Progress.astro` and `src/components/footer/Footer.astro` depend on the shared slide structure
  - `src/utils/source-theme.ts` converts source theme tokens into CSS custom properties applied on `<html>`
  - `src/config/theme.config.ts` + `src/utils/shiki-helper.ts` control light/dark theme behavior and Shiki code highlighting
- Styling and navigation are mostly driven by **CSS**, especially in `src/styles/global.css`: scroll snapping, scroll markers, scroll-timeline progress, Tailwind 4 theme tokens, and `light-dark()` theme values.
- `astro.config.mjs` sets `base: "/slides"` for GitHub Pages deployment. Be careful with root-relative asset paths and links.

## Key conventions

- **Switch decks by config, not by editing the page shell.** Add/register sources in `src/config/slides-sources.ts`, then change `appConfig.slidesSource`.
- **`src/source.ts` is the source of truth for a deck.** The presentation order comes from the `slides` array there, not from file names or directory order. Extra `.astro` files in `src/slides/` are ignored until added to that array.
- **Deck slide components are thin wrappers around the shared slide primitive.** In source packages, import `@presentation/components/slide/Slide.astro`, accept an optional `order` prop, and compose content through the shared slots (`title`, `left`, `right`) and layout flags (`center`, `speaker`, `outro`, `colSpan`).
- **Keep the shared `<Slide>` wrapper as the slide root.** Progress, footer visibility, scroll markers, and snapped-state animations rely on the `<section>` structure, `data-order`, and scroll-state behavior defined there.
- **Theme customization happens per source package through theme tokens**, not by cloning global styles. The supported source-level overrides are the keys consumed by `getThemeStyleAttribute()` (`colorTheme500`, `colorTheme600`, `colorTheme200`, `codeBgLight`, `codeBgDark`, `fontFamilyDesc`).
- **Use the `@presentation` alias for shared app code** from workspace packages. `astro.config.mjs` maps it to the root `src/` directory.
- **Theme handling uses both `.dark` and `color-scheme`.** `index.astro` applies the initial theme before render, `global.css` uses `light-dark()`, and Tailwind dark styles rely on the custom dark variant. Avoid introducing a second theme mechanism.
