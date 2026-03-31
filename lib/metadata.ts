import type { Metadata, Viewport } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';
const siteName = 'Nitin Panwar';
const title = 'Nitin Panwar';
const description =
  'Senior software engineer building web, mobile, and backend systems. Creator of Dicta, an on-device voice-to-text app for macOS.';
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
    template: `%s — ${siteName}`,
  },
  description,
  keywords: [
    'Nitin Panwar',
    'nitin panwar software engineer',
    'senior software engineer',
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
    'Dicta voice to text',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};
