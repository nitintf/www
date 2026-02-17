import { MetadataRoute } from 'next';
import { getAllLogs } from '@/lib/logs';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/logs'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const logRoutes = getAllLogs().map((log) => ({
    url: `${siteUrl}/logs/${log.slug}`,
    lastModified: new Date(log.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...logRoutes];
}
