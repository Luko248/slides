# Light/Dark Theme Implementation

## Overview
Successfully implemented a comprehensive light/dark theme system using modern CSS `light-dark()` function with the following features:

- ✅ Light and dark mode support using CSS `light-dark()` function
- ✅ Dual-theme syntax highlighting with Shiki
- ✅ User preference detection (system preference via `color-scheme`)
- ✅ Theme toggle button in top-right corner
- ✅ Persistent theme selection (localStorage)
- ✅ Smooth transitions between themes
- ✅ No flash of wrong theme on page load
- ✅ Elephant bone color for light mode background
- ✅ Pure white text in dark mode

## Implementation Details

### 1. Theme Toggle Component
**Location**: `/src/components/theme-toggle/ThemeToggle.astro`

- Absolute positioned button in top-right corner (top: 2rem, right: 2rem)
- Animated sun/moon icons with smooth transitions
- Matches application design with theme colors
- Z-index: 200 to stay on top
- Uses `color-scheme` property for theme switching

### 2. Modern CSS with `light-dark()` Function
**Location**: `/src/styles/global.css`

Using the modern `light-dark()` CSS function for clean, efficient theming:
```css
/* Elephant bone color for light mode */
--color-elephant-bone: hsl(48 20% 96%);

/* Theme colors using light-dark() */
--color-bg-primary: light-dark(var(--color-elephant-bone), hsl(0 0% 10%));
--color-bg-secondary: light-dark(hsl(48 20% 96% / 0.85), hsl(0 0% 10% / 0.85));
--color-text-primary: light-dark(hsl(0 0% 0%), hsl(0 0% 100%));
--color-gray-700: light-dark(hsl(0 0% 40%), hsl(0 0% 70%));
--color-gray-900: light-dark(hsl(0 0% 10%), hsl(0 0% 90%));
--color-code-bg: light-dark(hsl(279deg 92% 90%), hsl(283 91% 20%));

/* Direct usage in CSS */
h1, h2, h3, h4, h5, h6 {
  color: light-dark(black, white);
}

p {
  color: light-dark(black, white);
}
```

### 3. Shiki Syntax Highlighting
**Location**: `/src/utils/shiki-helper.ts`

Created helper function for dual-theme syntax highlighting:
- Light theme: `github-light`
- Dark theme: `github-dark`
- Uses Shiki's built-in dual theme support
- Updated all slide files to use the helper

**Files Updated**:
- AdvancedSyntax.astro
- BasicSyntax.astro
- BestPractices.astro
- ScrollableState.astro
- ScrollableStateAdvanced.astro
- SnappedState.astro
- SnappedStateAdvanced.astro
- StuckState.astro
- StuckStateAdvanced.astro

### 4. Astro Config
**Location**: `/astro.config.mjs`

Updated MDX integration to support dual themes:
```javascript
shikiConfig: {
  themes: {
    light: "github-light",
    dark: "github-dark",
  },
  defaultColor: false,
}
```

### 5. Theme Initialization Script
**Location**: `/src/pages/index.astro`

Added inline script in `<head>` to prevent flash of wrong theme:
- Runs before page renders
- Reads from localStorage or system preference
- Sets `color-scheme` property on `<html>` element

### 6. Color Scheme Property
The entire theme system works through the CSS `color-scheme` property:
- `<html>` element has `color-scheme: light dark` declared
- JavaScript toggles between `light` and `dark` via `document.documentElement.style.colorScheme`
- The `light-dark()` CSS function automatically responds to the color-scheme

### 7. Component Updates

**Slide Component** (`/src/components/slide/Slide.astro`):
- Background uses `var(--color-bg-secondary)` with `light-dark()` function
- Smooth color transitions

**Footer Component** (`/src/components/footer/Footer.astro`):
- Background uses `light-dark(black, hsl(0 0% 5%))`
- Smooth transitions

**Body Element** (`/src/pages/index.astro`):
- Background uses `var(--color-bg-primary)` 
- Sets `color-scheme: light dark`

**Theme Toggle** (`/src/components/theme-toggle/ThemeToggle.astro`):
- Icons and background use `light-dark()` function
- Icons switch based on `prefers-color-scheme` media query

## User Experience

1. **Default Behavior**: Matches user's system color scheme preference
2. **Toggle**: Click the button in top-right corner to switch themes
3. **Persistence**: Theme choice saved to localStorage
4. **No Flash**: Theme applied before page renders via inline script
5. **Smooth Transitions**: All color changes animate smoothly (300ms)
6. **Light Mode**: Elephant bone background (#F7F5F0) with black text
7. **Dark Mode**: Dark gray background with pure white text

## Technical Stack

- **Modern CSS `light-dark()` Function**: Clean, efficient theme switching
- **CSS `color-scheme` Property**: Native browser theme support
- **Tailwind CSS 4**: Using modern `@theme` directive
- **Astro 5**: Server-side rendering with client-side hydration
- **Shiki 3**: Dual-theme syntax highlighting
- **localStorage**: Theme persistence
- **CSS Custom Properties**: Dynamic theming with `light-dark()`

## Browser Support

Works in all modern browsers that support:
- CSS `light-dark()` function (Chrome 123+, Safari 17.5+, Firefox 120+)
- CSS `color-scheme` property
- CSS custom properties
- `prefers-color-scheme` media query
- localStorage
- ES6+ JavaScript

**Fallback**: Browsers without `light-dark()` support will default to light mode values.

## Key Advantages of This Approach

1. **Cleaner CSS**: No need for duplicate styles with `.dark` classes
2. **Better Performance**: Browser-native theme switching
3. **More Maintainable**: Single source of truth in `light-dark()` function
4. **Standards-Based**: Uses official CSS specifications
5. **Automatic**: `light-dark()` automatically responds to `color-scheme` changes
6. **Elegant**: Elephant bone (#F7F5F0) in light mode, pure white text in dark mode

## Future Enhancements

Potential improvements:
- Add transition preferences for accessibility (`prefers-reduced-motion`)
- Support for high contrast modes
- Additional theme options (e.g., auto-schedule based on time)
- Theme preference sync across tabs using BroadcastChannel API
