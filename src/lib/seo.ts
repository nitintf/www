import { Metadata } from 'next';

import { SITE_URL } from './constants';

export const SITE_CONFIG = {
  name: 'Nitin Panwar',
  description:
    'Senior Software Engineer specializing in system design, user experience, and performance optimization. Explore my writings and projects.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/api/og`,
  creator: 'Nitin Panwar',
  creatorTwitter: '@nitinpanwarr',
  keywords: [
    'Software Engineer',
    'System Design',
    'Frontend Development',
    'Backend Development',
    'React',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Performance Optimization',
    'User Experience',
    'Tech Blog',
    'Programming',
    'Software Architecture',
  ],
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noIndex?: boolean;
}

interface PersonData {
  name?: string;
  url?: string;
  jobTitle?: string;
  worksFor?: {
    '@type': string;
    name: string;
  };
  sameAs?: string[];
}

interface ArticleData {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
}

interface WebsiteData {
  name?: string;
  url?: string;
  description?: string;
  author?: {
    '@type': string;
    name: string;
  };
}

type StructuredData = PersonData | ArticleData | WebsiteData;

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  image,
  url = SITE_CONFIG.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const seoUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`;

  // Generate dynamic OG image URL
  const ogImageUrl =
    image ||
    `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(seoTitle)}&description=${encodeURIComponent(description)}`;

  const metadata: Metadata = {
    title: seoTitle,
    description,
    keywords: tags ? [...SITE_CONFIG.keywords, ...tags] : SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.creator,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type,
      title: seoTitle,
      description,
      url: seoUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
      creator: SITE_CONFIG.creatorTwitter,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: seoUrl,
    },
  };

  if (publishedTime && metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      type: 'article', // Ensure type is present
    };
  }

  return metadata;
}

export function generateStructuredData(
  type: 'person',
  data: PersonData,
): Record<string, unknown>;
export function generateStructuredData(
  type: 'article',
  data: ArticleData,
): Record<string, unknown>;
export function generateStructuredData(
  type: 'website',
  data: WebsiteData,
): Record<string, unknown>;
export function generateStructuredData(
  type: 'person' | 'article' | 'website',
  data: StructuredData,
): Record<string, unknown> {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'person':
      return {
        ...baseStructuredData,
        '@type': 'Person',
        name: SITE_CONFIG.creator,
        url: SITE_CONFIG.url,
        jobTitle: 'Senior Software Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Bitcs',
        },
        sameAs: [
          'https://github.com/nitintf',
          'https://linkedin.com/in/nitin-panwarr',
        ],
        ...data,
      };

    case 'article':
      const articleData = data as ArticleData;
      return {
        ...baseStructuredData,
        '@type': 'BlogPosting',
        headline: articleData.title,
        description: articleData.description,
        url: articleData.url,
        datePublished: articleData.publishedTime,
        dateModified: articleData.modifiedTime || articleData.publishedTime,
        author: {
          '@type': 'Person',
          name: SITE_CONFIG.creator,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.creator,
        },
      };

    case 'website':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        author: {
          '@type': 'Person',
          name: SITE_CONFIG.creator,
        },
        ...data,
      };

    default:
      return baseStructuredData;
  }
}
