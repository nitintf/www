import type { Metadata, Viewport } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';
const siteName = 'Nitin Panwar';
const title = "hey! i'm nitin :)";
const description =
  'software engineer | turning coffee into code and mountains into memories';
const twitterHandle = '@nitinpanwarrr';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'software engineer',
    'web development',
    'backend development',
    'system design',
    'AI agents',
    'data pipelines',
    'cloud-native',
    'Nitin Panwar',
    'full stack developer',
    'software architect',
    'life',
    'hobbies',
    'interests',
    'goals',
    'dreams',
    'aspirations',
    'ambitions',
    'aspirations',
    'personal website',
    'personal blog',
    'personal portfolio',
    'personal projects',
    'personal achievements',
    'personal goals',
    'personal dreams',
    'personal aspirations',
  ],
  authors: [{ name: 'Nitin Panwar' }],
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
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: twitterHandle,
    images: [`${siteUrl}/og-image.png`],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
  category: 'personal',
};
