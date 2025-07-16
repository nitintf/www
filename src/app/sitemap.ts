import { MetadataRoute } from 'next';

import { allWritings } from 'contentlayer/generated';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const writings = allWritings.map((writing) => ({
    url: `${SITE_URL}${writing.url}`,
    lastModified: new Date(writing.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...writings,
  ];
}
