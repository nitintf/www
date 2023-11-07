/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
        source: '/studio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/studio/:any*',
        destination: '/',
        permanent: true,
      },
      ...commonRedirects
    ];
  },
}

module.exports = nextConfig
