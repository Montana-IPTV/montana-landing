import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Removed generateBuildId to prevent chunk loading issues
  // Next.js will use default build ID generation which is more stable
  
  async headers() {
    return [
      // HTML sayfaları için NO CACHE - her zaman yeni versionu yükle
      {
        source: '/((?!api|_next|static|.*\\..*|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, max-age=0',
          },
        ],
      },
      // Static assets için cache (chunk'lar hash'li olduğu için güvenli)
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
