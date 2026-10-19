import type { Metadata } from 'next';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { Section } from '@/components/layout/section';
import { LinkRow } from '@/components/ui/link-row';
import { TextLink } from '@/components/ui/text-link';
import { Timeline } from '@/components/ui/timeline';
import { Greeting } from '@/components/ui/greeting';
import { RichText } from '@/components/ui/rich-text';
import { WorkSection } from '@/components/work/work-section';
import { intro } from '@/lib/home';
import { profiles } from '@/lib/links';
import { timeline } from '@/lib/timeline';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <Page label="Home">
      <h1 className="sr-only">nitin panwar, full-stack engineer</h1>
      <Greeting />
      <PageIntro>
        {intro.map((paragraph, i) => (
          <p key={i}>
            <RichText value={paragraph} />
          </p>
        ))}
      </PageIntro>

      <LinkRow>
        {profiles.map((link) => (
          <TextLink key={link.label} href={link.href}>
            {link.label}
          </TextLink>
        ))}
      </LinkRow>

      <WorkSection />

      <Section title="timeline">
        <Timeline label="Timeline" groups={timeline} />
      </Section>
    </Page>
  );
}
