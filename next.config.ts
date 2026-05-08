import type { NextConfig } from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /\/wallpapers\/|\/icons\//,
        handler: 'CacheFirst' as const,
        options: { cacheName: 'static-assets', expiration: { maxEntries: 100 } },
      },
      {
        urlPattern: /\/_next\/static\//,
        handler: 'CacheFirst' as const,
        options: { cacheName: 'next-static' },
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst' as const,
        options: { cacheName: 'network', networkTimeoutSeconds: 3 },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  // Turbopack is the default in Next.js 16 dev. The `webpack` key below is
  // injected by @ducanh2912/next-pwa for production service-worker bundling;
  // it does not affect Turbopack dev builds. Adding an explicit `turbopack`
  // config silences the "webpack config but no turbopack config" warning.
  turbopack: {},
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
    ];
  },
};

export default withPWA(nextConfig);
