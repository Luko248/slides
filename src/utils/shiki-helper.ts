import { codeToHtml } from "shiki";
import { themeConfig } from "../config/theme.config";

/**
 * Helper function to generate syntax-highlighted code with dual theme support (light/dark)
 * Uses theme configuration from theme.config.ts
 * @param code - The code string to highlight
 * @param lang - The language for syntax highlighting
 * @returns HTML string with dual theme support
 */
export async function highlightCode(code: string, lang: string = "css") {
  return await codeToHtml(code, {
    lang,
    themes: {
      light: themeConfig.shiki.light,
      dark: themeConfig.shiki.dark,
    },
    defaultColor: false,
  });
}
