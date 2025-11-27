import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Removed generateBuildId to prevent chunk loading issues
  // Next.js will use default build ID generation which is more stable
  
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
      // CSS dosyaları için cache control (CSS'lerin güncellenmesi için)
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Diğer static assets için cache
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
