// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCallout from "@r4ai/remark-callout";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCallout, remarkMath,],
    rehypePlugins: [rehypeKatex,],
    // kanagawa-dragon, catppuccin-mocha, github-dark-default looks nice too
    shikiConfig: { theme: 'catppuccin-mocha' },
  },
  site: 'https://anukindipa.github.io',
  integrations: [sitemap()],
});
