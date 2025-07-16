import './globals.css';

import { Container, Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Footer } from '@/components/footer';
import { NoiseEffect } from '@/components/noise-effect';
import { Providers } from '@/components/providers';
import { generateSEO } from '@/lib/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = generateSEO({
  description:
    'Senior Software Engineer specializing in system design, user experience, and performance optimization. Explore my writings and projects.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NoiseEffect />
        <Providers>
          <div className="blur" />
          <Theme
            accentColor="gray"
            grayColor="gray"
            hasBackground={false}
            panelBackground="translucent"
            radius="none"
            scaling="100%"
          >
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Container
                size={{ initial: '1', sm: '2' }}
                pt={{ sm: '4', md: '6' }}
                px={{ initial: '5' }}
                style={{ flex: 1 }}
              >
                {children}
              </Container>
              <Footer />
            </div>
          </Theme>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
