import type { SlidesSource } from "../types/slides-source";

export function getThemeCssVariables(theme: SlidesSource["theme"]): string {
  if (!theme) {
    return "";
  }

  const cssVars: string[] = [];

  if (theme.colorTheme500) {
    cssVars.push(`--color-theme-500: ${theme.colorTheme500};`);
  }

  if (theme.colorTheme600) {
    cssVars.push(`--color-theme-600: ${theme.colorTheme600};`);
  }

  if (theme.colorTheme200) {
    cssVars.push(`--color-theme-200: ${theme.colorTheme200};`);
  }

  if (cssVars.length === 0) {
    return "";
  }

  return `:root { ${cssVars.join(" ")} }`;
}
