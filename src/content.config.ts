import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const writings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/writings" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.date(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { writings };
