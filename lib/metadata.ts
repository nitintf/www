import type { Metadata, Viewport } from 'next';

import {
  SITE_DESCRIPTION as description,
  SITE_NAME as siteName,
  SITE_TITLE as title,
  SITE_URL as siteUrl,
} from '@/lib/constants';

const twitterHandle = '@nitinpanwarrr';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbfa' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1918' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${siteName}`,
  },
  description,
  keywords: [
    'Nitin Panwar',
    'nitin panwar software engineer',
    'full-stack engineer',
    'full stack developer',
    'software engineer portfolio',
    'web development',
    'backend development',
    'system design',
    'AI agents',
    'TypeScript',
    'React',
    'Go',
    'Rust',
    'macOS developer',
    'promptomato',
    'budly habit app',
    'dicta voice to text',
    'nitin.sh',
  ],
  authors: [{ name: 'Nitin Panwar', url: siteUrl }],
  creator: 'Nitin Panwar',
  publisher: 'Nitin Panwar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};
