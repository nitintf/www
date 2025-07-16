import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/cv.pdf',
        destination: '/resume.pdf',
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
