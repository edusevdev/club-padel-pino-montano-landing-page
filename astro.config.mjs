import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://urldefinitiva',
  integrations: [icon(), sitemap()],

  // Establece la salida para que sea 'server' en lugar de 'static'
  output: "server",

  adapter: vercel()
});