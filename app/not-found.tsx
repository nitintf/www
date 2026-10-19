import type { Metadata } from 'next';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { TextLink } from '@/components/ui/text-link';

export const metadata: Metadata = {
  title: 'Not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Page label="Not found">
      <h1 className="sr-only">page not found</h1>
      <PageIntro>
        <p>
          this page doesn&apos;t exist, or it wandered off somewhere. the{' '}
          <TextLink href="/">home page</TextLink> is still here though.
        </p>
      </PageIntro>
    </Page>
  );
}
