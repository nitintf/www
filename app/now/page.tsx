import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-metadata';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { Section } from '@/components/layout/section';
import { RichText } from '@/components/ui/rich-text';
import { now, nowCaption } from '@/lib/now';

export const metadata: Metadata = pageMetadata({
  title: 'Now',
  description:
    'What Nitin Panwar is working on, building and learning right now.',
  path: '/now',
});

export default function NowPage() {
  return (
    <Page label="Now">
      <h1 className="sr-only">now: what nitin panwar is up to</h1>
      <PageIntro>
        {now.map((paragraph, i) => (
          <p key={i}>
            <RichText value={paragraph} />
          </p>
        ))}
      </PageIntro>

      <Section>
        <figure className="flex flex-col items-center">
          <video autoPlay loop muted playsInline className="w-3/4 rounded-md">
            <source src="/Bruce Ping Pong.mp4" />
          </video>
          <figcaption className="w-3/4 pt-3 text-sm leading-normal text-muted">
            {nowCaption}
          </figcaption>
        </figure>
      </Section>
    </Page>
  );
}
