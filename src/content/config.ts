import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  title: z.string(),
  tldr: z.string(),
  type: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()),
  published: z.boolean(),
});

const article = defineCollection({
  schema: articleSchema,
});

const linkSchema = z.object({
  title: z.string(),
  tldr: z.string(),
  type: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()),
  url: z.string(),
});

const link = defineCollection({
  schema: linkSchema,
});

export const collections = { article, link };
