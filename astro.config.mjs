import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import storyblok from "@storyblok/astro";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://forloop.dev",
  integrations: [
    mdx(),
    sitemap(),
    storyblok({
      accessToken: "MdccNU2eW06iEVcr3RIJlwtt",
    }),
  ],
});
