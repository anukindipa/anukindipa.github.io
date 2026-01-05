// @ts-check
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // kanagawa-dragon, catppuccin-mocha, github-dark-default looks nice too
    shikiConfig: { theme: 'catppuccin-mocha' },
  },
  site: 'https://anukindipa.github.io',
});
