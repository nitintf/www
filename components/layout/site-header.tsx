'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NameDoodle } from '@/components/layout/name-doodle';

export function SiteHeader() {
  const isHome = usePathname() === '/';

  return (
    <header className="w-full max-w-content mx-auto px-gutter pt-page-top">
      <Link
        href="/"
        aria-current={isHome ? 'page' : undefined}
        className="group relative inline-block text-base text-fg"
      >
        nitin panwar
        <NameDoodle />
      </Link>
    </header>
  );
}
