import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv.pdf',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/cv.pdf',
        permanent: true,
      },
      {
        source: '/cv.pdf',
        destination: '/cv.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
