import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Generate build ID for cache busting
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  async headers() {
    return [
      // HTML sayfaları için cache control - deploy sonrası anında güncelleme
      {
        source: '/((?!api|_next|static|.*\\..*|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate, stale-while-revalidate=60',
          },
        ],
      },
      // Static assets için cache
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // API routes için no cache
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
