'use client';

import { Box, Text, Flex, Code, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import { format } from 'date-fns';

import { Writing } from 'contentlayer/generated';

interface WritingListItemProps {
  writing: Writing;
  isLastItem: boolean;
}

export const WritingListItem = ({
  writing,
  isLastItem,
}: WritingListItemProps) => {
  return (
    <Box asChild mb={!isLastItem ? '5' : undefined}>
      <article aria-labelledby={`writing-title-${writing._id}`}>
        <Flex gap="2" align="center">
          <Heading
            as="h3"
            size="3"
            weight="medium"
            style={{
              transition: 'color 0.2s ease',
            }}
          >
            <Link
              href={writing.url}
              style={{
                textDecoration: 'none',
                color: '#888',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#888';
              }}
            >
              <span id={`writing-title-${writing._id}`}>{writing.title}</span>
            </Link>
          </Heading>
          <Box asChild>
            <time dateTime={new Date(writing.date).toISOString()}>
              <Text size="1" color="gray">
                <Code>{format(new Date(writing.date), 'MM.dd.yyyy')}</Code>
              </Text>
            </time>
          </Box>
        </Flex>
      </article>
    </Box>
  );
};
