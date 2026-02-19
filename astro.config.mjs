import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { themeConfig } from "./src/config/theme.config";
import { fileURLToPath } from "node:url";

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
          light: themeConfig.shiki.light,
          dark: themeConfig.shiki.dark,
        },
        defaultColor: false,
        wrap: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@presentation": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
