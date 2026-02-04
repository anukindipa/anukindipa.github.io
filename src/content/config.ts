import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const posts = defineCollection({
    // ignore files that start with an underscore. search for everything else
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog-files/posts" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        pinned: z.boolean().optional(),
    }),
});

export const collections = { posts };