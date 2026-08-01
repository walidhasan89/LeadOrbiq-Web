import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const helpCategories = [
  "Getting started",
  "Installation",
  "Google Maps workflow",
  "Lead collection",
  "Exporting",
  "Account and billing",
  "Privacy",
  "Troubleshooting",
] as const;

const help = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/help" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(helpCategories),
    order: z.number().default(0),
    updatedDate: z.coerce.date(),
    verified: z.boolean().default(true),
  }),
});

export const collections = { help };
export { helpCategories };
