import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/goit-test',
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      components: new URL('./src/components', import.meta.url).pathname,
      assets: new URL('./src/assets', import.meta.url).pathname,
      api: new URL('./src/api', import.meta.url).pathname,
      constants: new URL('./src/constants', import.meta.url).pathname,
      hooks: new URL('./src/hooks', import.meta.url).pathname,
      store: new URL('./src/store', import.meta.url).pathname,
      pages: new URL('./src/pages', import.meta.url).pathname,
      public: new URL('./public', import.meta.url).pathname,
    },
  },
});
