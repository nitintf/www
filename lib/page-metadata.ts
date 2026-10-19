import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

// Page metadata with matching share tags. Next replaces the parent's
// openGraph and twitter objects instead of merging them, so each page sets
// its own; the share image comes from the page's opengraph-image file.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const shareTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: { 'text/markdown': `${path}.md` },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: shareTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@nitinpanwarrr',
      title: shareTitle,
      description,
    },
  };
}
