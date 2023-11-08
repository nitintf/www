/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  async redirects() {
    const isProd = process.env.NODE_ENV === 'production'
    const commonRedirects = [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      }
    ]

    if (!isProd) {
      return commonRedirects
    }

    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin/:any*',
        destination: '/',
        permanent: true,
      },
      ...commonRedirects
    ];
  },
}

module.exports = nextConfig
