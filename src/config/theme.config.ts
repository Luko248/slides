/**
 * Theme Configuration
 * Centralized configuration for the light/dark theme system
 */

export const themeConfig = {
  /**
   * Shiki syntax highlighting themes
   */
  shiki: {
    light: "github-light",
    dark: "github-dark",
  },

  /**
   * Default theme behavior
   * - 'system': Match user's system preference
   * - 'light': Always start with light theme
   * - 'dark': Always start with dark theme
   */
  defaultTheme: "system" as "system" | "light" | "dark",

  /**
   * LocalStorage key for persisting theme preference
   */
  storageKey: "theme",

  /**
   * Enable smooth transitions when switching themes
   */
  enableTransitions: true,

  /**
   * Transition duration in milliseconds
   */
  transitionDuration: 300,
} as const;

/**
 * Get the initial theme based on configuration
 */
export function getInitialTheme(): "light" | "dark" {
  // Check localStorage first
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(themeConfig.storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  }

  // Use default theme config
  if (themeConfig.defaultTheme !== "system") {
    return themeConfig.defaultTheme;
  }

  // Fall back to system preference
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
}

/**
 * Apply theme to the document
 * Sets both color-scheme property (for light-dark() CSS) and dark class (for Tailwind)
 */
export function applyTheme(theme: "light" | "dark"): void {
  if (typeof document === "undefined") return;

  const html = document.documentElement;
  
  // Toggle dark class for Tailwind 4 (recommended approach)
  html.classList.toggle("dark", theme === "dark");
  
  // Set color-scheme property for light-dark() CSS function
  html.style.colorScheme = theme;

  // Save to localStorage
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(themeConfig.storageKey, theme);
  }
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";

  const html = document.documentElement;
  
  // Toggle the class and determine new theme
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  const newTheme = isDark ? "dark" : "light";
  
  // Set color-scheme and save to localStorage
  html.style.colorScheme = newTheme;
  localStorage.setItem(themeConfig.storageKey, newTheme);
  
  return newTheme;
}

/**
 * Listen for system theme changes
 */
export function watchSystemTheme(
  callback: (theme: "light" | "dark") => void
): () => void {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = (e: MediaQueryListEvent) => {
    // Only apply system changes if user hasn't set a preference
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem(themeConfig.storageKey);
      if (!stored) {
        callback(e.matches ? "dark" : "light");
      }
    }
  };

  mediaQuery.addEventListener("change", handler);

  // Return cleanup function
  return () => mediaQuery.removeEventListener("change", handler);
}
