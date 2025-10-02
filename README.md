# Slides Project

A modern presentation framework built with Astro, featuring smooth scroll-based navigation and beautiful syntax highlighting.

## 📋 About

This project uses **Astro** with **MDX** for creating interactive slide presentations. Code blocks are highlighted using **Shiki** with support for multiple themes.

The slider is built on **pure CSS** using a combination of three modern CSS technologies:
- **CSS Container Scroll-State Queries**
- **CSS Scroll-Driven Animations**
- **CSS Carousel**

No JavaScript is required for the slide navigation and animations—everything is powered by cutting-edge CSS features combined with Tailwind CSS for styling.

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
  --color-theme-500: oklch(65% 0.25 310);  /* Primary theme color */
  --color-theme-600: oklch(70% 0.22 310);  /* Lighter variant */
  --color-theme-200: oklch(92% 0.08 310);  /* Background tint */
}
```

These colors are used throughout the presentation for:
- List markers
- Code block backgrounds
- Accent elements

Simply update the OKLCH values to match your desired color scheme. Enjoy! 🚀
