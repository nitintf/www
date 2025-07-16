import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import { Box, Container, Heading, Text } from '@radix-ui/themes';

import { allWritings, Writing } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-components';
import { BackNavigation } from '@/components/back-button';
import { generateSEO } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const writing = allWritings.find((writing: Writing) => writing.slug === slug);

  if (!writing) {
    return {};
  }

  return generateSEO({
    title: writing.title,
    description: writing.summary,
    url: writing.url,
    type: 'article',
    publishedTime: writing.date,
    tags: writing.keywords,
  });
}

const WritingLayout = async ({ params }: Props) => {
  const { slug } = await params;
  const writing = allWritings.find((writing: Writing) => writing.slug === slug);

  if (!writing) {
    redirect('/');
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(writing.structuredData),
        }}
      />
      <Container size="3">
        <Box mt="9">
          <BackNavigation href="/writing" label="Writing" />
        </Box>
        <article
          aria-labelledby={`writing-title-${writing._id}`}
          className="prose"
        >
          <Box>
            <Heading
              as="h1"
              size="5"
              id={`writing-title-${writing._id}`}
              style={{ textDecoration: 'none' }}
            >
              {writing.title}
            </Heading>
            <Text asChild align="center" color="gray" size="2">
              <time
                title={format(new Date(writing.date), 'LLLL d, yyyy')}
                dateTime={new Date(writing.date).toISOString()}
              >
                {format(new Date(writing.date), 'LLLL d, yyyy')}
              </time>
            </Text>
          </Box>
          <Box mt="8">
            {writing.body.code ? <Mdx code={writing.body.code} /> : null}
          </Box>
        </article>
      </Container>
    </>
  );
};

export default WritingLayout;
