import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { projects } from '@/lib/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/now'].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  const work = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...pages, ...work];
}
