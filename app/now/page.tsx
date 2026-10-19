import type { Metadata } from 'next';
import { Page } from '@/components/layout/page';
import { PageIntro } from '@/components/layout/page-intro';
import { Section } from '@/components/layout/section';
import { TextLink } from '@/components/ui/text-link';

export const metadata: Metadata = {
  title: 'Now',
  description:
    'What Nitin Panwar is working on, building and learning right now.',
  alternates: { canonical: '/now' },
};

export default function NowPage() {
  return (
    <Page label="Now">
      <h1 className="sr-only">now: what nitin panwar is up to</h1>
      <PageIntro>
        <p>
          work is{' '}
          <TextLink href="https://www.ampd.energy">ampd energy</TextLink>. we
          make batteries that replace diesel generators, and i build the
          software around them. most days that means the customer app people use
          to watch their sites, the kafka and mqtt pipelines that bring in a
          reading from every device every second, and the backend that turns it
          all into something you can look at.
        </p>
        <p>
          after work i&apos;m building two apps of my own.{' '}
          <TextLink href="https://promptomato.app">promptomato</TextLink> lives
          in the mac notch: you hold fn and talk to write anywhere, it takes
          notes from your calls, and a small tomato nudges you when you drift.
          budly is a calm habit app for ios and android. a sprout called bud
          copies what you do, and after about 66 days a habit is learned and a
          new leaf grows. budly is coming soon.
        </p>
        <p>
          i&apos;m learning go and what happens closer to the metal, picking up
          rust for systems side projects, and building ai agents with langchain
          and langgraph. i keep coming back to operating systems, networking,
          and tools that stay out of the way.
        </p>
        <p>
          outside of all that it&apos;s football, running as much as i can, and
          travelling anywhere with mountains. on a slow day it&apos;s a game
          i&apos;ll never finish, a good movie, or chai and doing nothing.
        </p>
      </PageIntro>

      <Section>
        <figure className="flex flex-col items-center">
          <video autoPlay loop muted playsInline className="w-3/4 rounded-md">
            <source src="/Bruce Ping Pong.mp4" />
          </video>
          <figcaption className="w-3/4 pt-3 text-sm leading-normal text-muted">
            the goal is to one day find work-life balance with the same grace
            bruce lee finds ping pong balls with a pair of nunchucks.
          </figcaption>
        </figure>
      </Section>
    </Page>
  );
}
