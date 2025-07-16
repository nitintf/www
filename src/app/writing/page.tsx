import { Box, Heading, Text } from '@radix-ui/themes';
import { compareDesc, getYear } from 'date-fns';
import { Metadata } from 'next';

import { allWritings, Writing } from 'contentlayer/generated';
import { WritingListItem } from '@/components/writing-list-item';
import { BackNavigation } from '@/components/back-button';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Writing',
  description:
    'Thoughts on software engineering, system design, and building products.',
  url: '/writing',
});

export default function WritingsPage() {
  const writings = allWritings.sort((a: Writing, b: Writing) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  // Group writings by year
  const writingsByYear = writings.reduce(
    (acc, writing) => {
      const year = getYear(new Date(writing.date));
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(writing);
      return acc;
    },
    {} as Record<number, Writing[]>,
  );

  const years = Object.keys(writingsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Sort years in descending order

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
        <BackNavigation href="/" label="Home" />
        <Box asChild mb="6" style={{ marginBottom: '120px' }}>
          <section aria-labelledby="writings-heading">
            <Heading
              as="h2"
              id="writings-heading"
              size="4"
              weight="bold"
              mb="4"
              tabIndex={-1}
              style={{
                textDecoration: 'none',
              }}
            >
              Writing
            </Heading>
            <Text size="3" color="gray" as="p" mb="6">
              Thoughts on software engineering, system design, and building
              products.
            </Text>
            {writings.length > 0 ? (
              <>
                {years.map((year) => (
                  <Box key={year} mb="8">
                    <Heading
                      as="h3"
                      size="3"
                      weight="medium"
                      mb="4"
                      color="gray"
                      style={{ textDecoration: 'none' }}
                    >
                      {year}
                    </Heading>
                    {writingsByYear[year].map((writing, idx) => (
                      <WritingListItem
                        key={writing._id}
                        writing={writing}
                        isLastItem={idx === writingsByYear[year].length - 1}
                      />
                    ))}
                  </Box>
                ))}
              </>
            ) : (
              <Text color="gray">No writings yet. Check back soon!</Text>
            )}
          </section>
        </Box>
      </main>
    </Box>
  );
}
