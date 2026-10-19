import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-metadata';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { TextLink } from '@/components/ui/text-link';

const PDF = '/cv.pdf';

export const metadata: Metadata = pageMetadata({
  title: 'Resume',
  description:
    'Resume of Nitin Panwar, full-stack engineer: experience at AMPD Energy, BITCS and Codersera, projects and skills.',
  path: '/resume',
});

// A page in front of the PDF so a shared link gets a proper preview; the
// PDF itself can't carry one.
export default function ResumePage() {
  return (
    <Page label="Resume">
      <h1 className="sr-only">resume of nitin panwar</h1>
      <PageIntro>
        <p>
          my resume, as a <TextLink href={PDF}>pdf</TextLink> if you&apos;d
          rather download it.
        </p>
      </PageIntro>
      <object
        data={PDF}
        type="application/pdf"
        aria-label="Resume of Nitin Panwar"
        className="mt-block hidden h-[80vh] w-full rounded-[var(--theme-radius-card)] border border-line sm:block"
      >
        <p className="p-4 text-base text-muted">
          your browser can&apos;t show the pdf here.{' '}
          <TextLink href={PDF}>open it instead</TextLink>.
        </p>
      </object>
    </Page>
  );
}
