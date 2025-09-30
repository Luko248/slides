// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://luko248.github.io",
  base: "/slides",
  server: {
    port: 4444,
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
        wrap: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
