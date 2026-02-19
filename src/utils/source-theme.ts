import type { SlidesSource } from "../types/slides-source";

export function getThemeStyleAttribute(theme: SlidesSource["theme"]): string {
  if (!theme) {
    return "";
  }

  const styleParts: string[] = [];

  if (theme.colorTheme500) {
    styleParts.push(`--color-theme-500: ${theme.colorTheme500};`);
  }

  if (theme.colorTheme600) {
    styleParts.push(`--color-theme-600: ${theme.colorTheme600};`);
  }

  if (theme.colorTheme200) {
    styleParts.push(`--color-theme-200: ${theme.colorTheme200};`);
  }

  if (theme.codeBgLight && theme.codeBgDark) {
    styleParts.push(
      `--color-code-bg: light-dark(${theme.codeBgLight}, ${theme.codeBgDark});`,
    );
  }

  if (styleParts.length === 0) {
    return "";
  }

  return styleParts.join(" ");
}
