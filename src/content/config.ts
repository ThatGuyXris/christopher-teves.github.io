import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    // Longer text shown in MetaRow — optional, falls back to role string
    roleDetail: z.string().optional(),
    // Project overview paragraph shown in MetaRow
    description: z.string().optional(),
    platform: z.string(),
    workDone: z.string(),
    timeframe: z.string().optional(),
    award: z.string().optional(),
    // Right-hand image in the case study header
    heroImage: z.string().optional(),
    // Images shown in the olive "Final production" section
    finalProductionImages: z.array(z.string()).optional(),
    // Process diagram shown at the top of "The process" section
    processImage: z.string().optional(),
    // Lower number = appears first in Select Works list
    order: z.number(),
  }),
});

export const collections = { projects };
