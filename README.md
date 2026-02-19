# Slides Project

A modern presentation framework built with Astro, featuring smooth scroll-based navigation, beautiful syntax highlighting, and automatic light/dark theme support.

## 📋 About

This project uses **Astro** with **MDX** for creating interactive slide presentations. Code blocks are highlighted using **Shiki** with support for multiple themes.

The slider is built on **pure CSS** using a combination of three modern CSS technologies:
- **CSS Container Scroll-State Queries**
- **CSS Scroll-Driven Animations**
- **CSS Carousel**

No JavaScript is required for the slide navigation and animations—everything is powered by cutting-edge CSS features combined with Tailwind CSS for styling.

## 🌓 Light/Dark Theme System

The project includes a fully functional light/dark theme system with:
- **Automatic theme detection** based on system preference
- **Manual toggle button** in the top-right corner
- **Persistent theme selection** saved to localStorage
- **Dual syntax highlighting** that automatically switches between `github-light` and `github-dark` themes
- **Modern CSS** using `light-dark()` function and `color-scheme` property
- **Smooth transitions** between themes

### Theme Configuration

All theme settings are centralized in `/src/config/theme.config.ts`:

```typescript
export const themeConfig = {
  shiki: {
    light: "github-light",    // Shiki light theme
    dark: "github-dark",       // Shiki dark theme
  },
  defaultTheme: "system",      // "system" | "light" | "dark"
  storageKey: "theme",
  enableTransitions: true,
  transitionDuration: 300,
};
```

You can customize:
- **Shiki themes**: Change `light` and `dark` to any supported [Shiki theme](https://shiki.style/themes)
- **Default behavior**: Set to `"system"`, `"light"`, or `"dark"`
- **Storage key**: Change localStorage key name
- **Transitions**: Enable/disable smooth theme transitions

## 🚀 Installation

Install dependencies using your preferred package manager:

```sh
# Using npm
npm install

# Using pnpm
pnpm install

# Using bun
bun install
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

Replace `npm` with `pnpm` or `bun` as needed.

## 🎨 Customizing Theme Colors

Theme colors are defined as CSS custom properties in `src/styles/global.css`. To change the main theme colors, modify the values in the `@theme` block:

```css
@theme {
  --color-theme-500: hsl(283 91% 57%);  /* Primary theme color */
  --color-theme-600: hsl(283 91% 65%);  /* Lighter variant */
  --color-theme-200: hsl(279deg 92% 90%);  /* Background tint */
}
```

### Light/Dark Mode Colors

Colors automatically adapt to the theme using the modern `light-dark()` CSS function:

```css
/* Background colors */
--color-elephant-bone: hsl(48 20% 96%);  /* Light mode background */
--color-bg-primary: light-dark(var(--color-elephant-bone), hsl(0 0% 10%));
--color-bg-secondary: light-dark(hsl(48 20% 96% / 0.85), hsl(0 0% 10% / 0.85));

/* Text colors */
--color-text-primary: light-dark(hsl(0 0% 0%), hsl(0 0% 100%));
```

These colors are used throughout the presentation for:
- List markers and bullets
- Code block backgrounds
- Accent elements
- Slide backgrounds
- Text and headings

Simply update the HSL values to match your desired color scheme. The `light-dark()` function automatically switches values based on the active theme! 🚀

## 🔧 Monorepo Structure

```
packages/
└── source-ai-workflow/       # Slide source package (content + source config)

src/
├── config/
│   ├── app.config.ts         # Active source selection (slidesSource)
│   ├── slides-sources.ts     # Source registry
│   └── theme.config.ts       # Theme/shiki configuration
├── components/               # Shared presentation UI
├── pages/
│   └── index.astro           # Presentation app shell
├── styles/
│   └── global.css            # Global styles
└── utils/
    ├── shiki-helper.ts
    └── source-theme.ts       # Applies source theme overrides
```

## 🧩 Slide Sources

The presentation app consumes one source package at a time.

- Current source package: `@slides/source-ai-workflow`
- Source selector: `src/config/app.config.ts`

```ts
export const appConfig = {
  slidesSource: "ai-workflow",
} as const;
```

To add a new presentation source:

1. Create a new workspace package in `packages/` (for example `packages/source-new-topic`).
2. Export a source object from that package (metadata, theme, footer, ordered slides).
3. Register it in `src/config/slides-sources.ts`.
4. Change `slidesSource` in `src/config/app.config.ts`.
