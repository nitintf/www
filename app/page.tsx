import type { Metadata } from 'next';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { Section } from '@/components/layout/section';
import { LinkRow } from '@/components/ui/link-row';
import { TextLink } from '@/components/ui/text-link';
import { Timeline } from '@/components/ui/timeline';
import { Greeting } from '@/components/ui/greeting';
import { WorkSection } from '@/components/work/work-section';
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
        <p>
          i&apos;m nitin, a full-stack engineer from india. i&apos;ve spent 5+
          years building web, mobile and backend systems, and these days i work
          at <TextLink href="https://www.ampd.energy">ampd energy</TextLink> on
          clean energy software.
        </p>
        <p>
          on the side i build my own apps for the web, the mac and phones. right
          now that&apos;s{' '}
          <TextLink href="https://promptomato.app">promptomato</TextLink>, and
          budly, which is coming soon. off the screen i&apos;m chasing
          footballs, running, or somewhere in the mountains. see what i&apos;m
          doing <TextLink href="/now">now</TextLink>.
        </p>
      </PageIntro>

      <LinkRow>
        <TextLink href="https://github.com/nitintf">github</TextLink>
        <TextLink href="https://x.com/nitinpanwarrr">X</TextLink>
        <TextLink href="https://www.linkedin.com/in/nitin-panwarr/">
          linkedin
        </TextLink>
        <TextLink href="mailto:contact@nitin.sh">email</TextLink>
        <TextLink href="/resume">resume</TextLink>
      </LinkRow>

      <WorkSection />

      <Section title="timeline">
        <Timeline label="Timeline" groups={timeline} />
      </Section>
    </Page>
  );
}
