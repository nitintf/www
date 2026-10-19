'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

const routeLabels: Record<string, string> = {
  '/': 'Engineer',
  '/logs': 'Logs',
  '/now': 'Now',
  '/reading': 'Reading',
  '/resume': 'Resume',
  '/works': 'Works',
};

export function SiteHeader() {
  const pathname = usePathname();

  let label = routeLabels[pathname];
  if (!label && pathname.startsWith('/logs/')) label = 'Logs';
  if (!label) label = 'Engineer';

  const isHome = pathname === '/';

  return (
    <header className="w-full max-w-2xl mx-auto px-8 pt-12 sm:pt-32 flex items-center justify-between">
      <nav aria-label="Breadcrumb">
        <div className="flex flex-row items-center gap-1.5">
          {isHome ? (
            <h1 className="font-serif italic text-base tracking-wide font-medium text-ui-12">
              Nitin Panwar
            </h1>
          ) : (
            <Link
              href="/"
              className="plain-link font-serif italic text-base tracking-wide font-medium text-ui-12 hover:text-ui-10 transition-colors"
            >
              Nitin Panwar
            </Link>
          )}
          <span className="text-base text-ui-9">—</span>
          <span className="font-serif text-base tracking-wide text-ui-10 italic">
            {label}
          </span>
        </div>
      </nav>
      <ThemeToggle />
    </header>
  );
}
