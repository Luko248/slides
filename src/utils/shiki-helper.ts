import { codeToHtml } from "shiki";

/**
 * Helper function to generate syntax-highlighted code with dual theme support (light/dark)
 * @param code - The code string to highlight
 * @param lang - The language for syntax highlighting
 * @returns HTML string with dual theme support
 */
export async function highlightCode(code: string, lang: string = "css") {
  return await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });
}
