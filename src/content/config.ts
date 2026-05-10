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
    awardUrl: z.string().optional(),
    // Right-hand image in the case study header
    heroImage: z.string().optional(),
    // Images shown in the olive "Final production" section
    finalProductionImages: z.array(z.string()).optional(),
    // Process diagram shown at the top of "The process" section
    processImage: z.string().optional(),
    // Image shown before the Discovery section in the prose
    competitorImage: z.string().optional(),
    // Short paragraph rendered below the process image
    processNote: z.string().optional(),
    // Hide the "The process" h2 heading (e.g. when text is used as processNote instead)
    hideProcessHeading: z.boolean().optional(),
    // Override "Final production" heading per case study
    finalProductionTitle: z.string().optional(),
    // Side-by-side layout: first image right, description text left
    finalProductionSideBySide: z.boolean().optional(),
    // Text shown in the left column when using side-by-side layout
    finalProductionText: z.array(z.string()).optional(),
    // Lower number = appears first in Select Works list
    order: z.number(),
  }),
});

export const collections = { projects };
