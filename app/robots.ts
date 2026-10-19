import { MetadataRoute } from 'next';

import { SITE_URL as siteUrl } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
