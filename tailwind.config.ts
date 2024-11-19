import type { Config } from 'tailwindcss';
import { iconsPlugin, dynamicIconsPlugin } from '@egoist/tailwindcss-icons';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [dynamicIconsPlugin(), iconsPlugin()],
} satisfies Config;
