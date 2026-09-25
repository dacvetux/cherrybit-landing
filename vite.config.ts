import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { seoPlugin } from './scripts/seo.js';

export default defineConfig({
  plugins: [
    seoPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Use root path for custom domain (remove /cherrybit-landing/)
  base: '/',

  assetsInclude: ['**/*.svg', '**/*.csv'],
});
