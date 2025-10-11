// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://TU_USUARIO.github.io",
  base: "/web-revolut/",
  output: "static",
  integrations: [tailwind(), sitemap()]
});
