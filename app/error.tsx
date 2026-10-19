'use client';

import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { TextLink } from '@/components/ui/text-link';

export default function Error() {
  return (
    <Page label="Error page">
      <PageIntro title="something broke" subtitle="sorry about that">
        <p>
          this page hit a bug. even good code has off days, a bit like my ping
          pong with nunchucks. try again, or{' '}
          <TextLink href="/">go home</TextLink>.
        </p>
      </PageIntro>
    </Page>
  );
}
