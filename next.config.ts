import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is enabled via next dev --turbopack (already in scripts)
  images: {
    // Allow any domain for iframe app thumbnails and icons
    remotePatterns: [],
    // Unoptimized so local SVG icons work without config
    unoptimized: true,
  },
  // Allow same-origin iframes and cross-origin images
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
