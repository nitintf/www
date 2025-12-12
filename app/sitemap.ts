import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/logs',
    // Add more routes as you create them
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
