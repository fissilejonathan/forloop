import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    tldr: z.string(),
    type: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    url: z.string().optional(),
  }),
});

export const collections = { blog };
