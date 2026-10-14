import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 3456,
    strictPort: true,
    hmr: false,
    fs: {
      strict: true,
      allow: [rootDir],
    },
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 3456,
    strictPort: true,
  },
});
