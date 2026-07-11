import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

/**
 * Library build pipeline — separate from Next.js (next.config.ts / next dev).
 * Produces an ESM component library (dist-lib/) that a host app (e.g. an
 * Electron shell) can import as a normal dependency: `import { DeviceLayout }
 * from '@sonth87/device-layout'`.
 *
 * Run: `pnpm build:lib`. Does not affect `pnpm dev` / `pnpm build` (Next.js).
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: 'src',
      include: ['src/lib.tsx', 'src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/app/**'],
      outDirs: ['dist-lib'],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL('./src/lib.tsx', import.meta.url)),
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
