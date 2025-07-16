import { Box, Heading, Text, Link } from '@radix-ui/themes';
import { compareDesc } from 'date-fns';

import { allWritings, Writing } from 'contentlayer/generated';
import { ProjectsSection } from '@/components/home/projects';
import { WritingSection } from '@/components/home/writings';
import { Header } from '@/components/header';

export default function HomePage() {
  const writings = allWritings
    .sort((a: Writing, b: Writing) =>
      compareDesc(new Date(a.date), new Date(b.date)),
    )
    .slice(0, 2);

  return (
    <Box
      style={{
        margin: '0 auto',
      }}
      asChild
      pt="9"
      minHeight="100vh"
      role="main"
    >
      <main>
        <Header />
        <Box asChild mb="6" style={{ marginBottom: '120px' }}>
          <section aria-labelledby="now-heading">
            <Heading
              as="h2"
              id="now-heading"
              size="4"
              weight="bold"
              mb="4"
              tabIndex={-1}
            >
              Now
            </Heading>
            <Text size="3" color="gray" as="p">
              I work as a senior software engineer at Bitcs. I enjoy building
              solutions and thinking deeply about system design, user
              experience, and performance.
            </Text>
          </section>
        </Box>
        <Box asChild mb="9" style={{ marginBottom: '120px' }}>
          <ProjectsSection />
        </Box>
        <Box asChild mb="9" style={{ marginBottom: '120px' }}>
          <WritingSection writings={writings} />
        </Box>
        <Box asChild mb="9" style={{ marginBottom: '120px' }}>
          <section aria-labelledby="connect-heading">
            <Heading
              as="h2"
              id="connect-heading"
              size="4"
              weight="bold"
              mb="4"
              tabIndex={-1}
            >
              Connect
            </Heading>
            <Text size="3" color="gray" as="p">
              Find me on{' '}
              <Link
                href="https://github.com/nitintf"
                target="_blank"
                rel="noopener noreferrer"
                className="thick-underline"
              >
                GitHub
              </Link>
              ,{' '}
              <Link
                href="https://linkedin.com/in/nitin-panwarr"
                target="_blank"
                rel="noopener noreferrer"
                className="thick-underline"
              >
                LinkedIn
              </Link>
              , or check out my{' '}
              <Link
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="thick-underline"
              >
                CV
              </Link>
              . Reach out at{' '}
              <Link href="mailto:me@nitin.sh" className="thick-underline">
                me@nitin.sh
              </Link>
              .
            </Text>
          </section>
        </Box>
      </main>
    </Box>
  );
}
