// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://PredaZGZ.github.io/services",
  base: "/services/",
  output: "static",
  trailingSlash: "always",
  integrations: [tailwind(), sitemap()]
});
