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
  // Don't copy public/ (wallpapers, icons, live-wallpaper mp4s — tens of MB)
  // into the library build. The host app supplies its own assets and points
  // <DeviceLayout assetBaseUrl="..."> at them (see src/lib/asset-base.ts).
  publicDir: false,
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: 'src',
      include: ['src/lib.tsx', 'src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/app/**', 'src/electron/**', 'src/**/__tests__/**', '**/*.test.ts', '**/*.example.ts'],
      outDirs: ['dist-lib'],
      insertTypesEntry: true,
      // store/index.ts's `import { immer } from 'zustand/middleware/immer'`
      // carries a module augmentation zustand's own Mutate<...> type needs
      // (the `'zustand/immer'` key on StoreMutators) — but the dts bundler
      // only keeps imports it can see referenced from a public signature, so
      // it silently drops this one, collapsing `useStore`'s exported type to
      // `never` for every consumer of the built package. Re-insert the
      // side-effect import into just that one emitted file (safe: it's a
      // bare `import 'x'`, not a value import, so it can't collide with
      // anything else already in the file).
      beforeWriteFile: (filePath, content) => {
        if (!filePath.endsWith('store/index.d.ts')) return;
        return { content: `import 'zustand/middleware/immer';\n${content}` };
      },
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
