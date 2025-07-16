import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import { Box, Container, Heading, Text } from '@radix-ui/themes';

import { allWritings, Writing } from 'contentlayer/generated';
import { SITE_URL } from '@/lib/constants';
import { Mdx } from '@/components/mdx/mdx-components';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const writing = allWritings.find((writing: Writing) => writing.slug === slug);

  if (!writing) {
    return {};
  }

  return {
    title: writing.title,
    description: writing.summary,
    openGraph: {
      title: writing.title,
      description: writing.summary,
      publishedTime: writing.date,
      url: `${SITE_URL}${writing.url}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: writing.title,
      description: writing.summary,
    },
    alternates: {
      canonical: `${SITE_URL}${writing.url}`,
    },
    other: {
      'structured-data': writing.structuredData,
    },
  };
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
        <article
          aria-labelledby={`writing-title-${writing._id}`}
          className="prose"
        >
          <Box>
            <Heading
              mt="6"
              as="h1"
              size="5"
              id={`writing-title-${writing._id}`}
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
