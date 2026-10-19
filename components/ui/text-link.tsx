import Link from 'next/link';
import { NewTabHint } from '@/components/ui/new-tab-hint';

// The one link style on the site. External links open in a new tab.
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (/^(https?:|mailto:)/.test(href) || href.endsWith('.pdf')) {
    return (
      <a
        href={href}
        className="line-link"
        {...(!href.startsWith('mailto:')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
        {!href.startsWith('mailto:') && <NewTabHint />}
      </a>
    );
  }
  return (
    <Link href={href} className="line-link">
      {children}
    </Link>
  );
}
