import type { Config } from 'tailwindcss';
import { iconsPlugin, dynamicIconsPlugin } from '@egoist/tailwindcss-icons';
import { createThemes } from 'tw-colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    dynamicIconsPlugin(),
    iconsPlugin(),
    createThemes({
      shadow: {
        text: '#FFFFFF',
        background: '#0A0A0A',
        primary: '#FF0000',
        secondary: '#808080',
        accent: '#B22222',
        gradient: {
          start: '#1A1A1A',
          end: '#FF0000',
        },
      },
      'sonic-classic': {
        text: '#FFFFFF',
        background: '#1A237E',
        primary: '#2196F3',
        secondary: '#FFD700',
        accent: '#FF3D00',
        gradient: {
          start: '#1A237E',
          end: '#0D47A1',
        },
      },
      'sonic-modern': {
        text: '#E0E0E0',
        background: '#000B2E',
        primary: '#4FC3F7',
        secondary: '#FFEB3B',
        accent: '#F44336',
        gradient: {
          start: '#000B2E',
          end: '#1A237E',
        },
      },
      'green-hill': {
        text: '#FFFFFF',
        background: '#7CB342',
        primary: '#1B5E20',
        secondary: '#FFD54F',
        accent: '#D32F2F',
        gradient: {
          start: '#7CB342',
          end: '#1B5E20',
        },
      },
      tails: {
        text: '#FFFFFF',
        background: '#FF8C00',
        primary: '#FFFFFF',
        secondary: '#4169E1',
        accent: '#FF4500',
        gradient: {
          start: '#FF8C00',
          end: '#FFD700',
        },
      },
    }),
  ],
} satisfies Config;
