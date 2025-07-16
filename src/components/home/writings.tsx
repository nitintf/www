import { Box, Text, Flex, Code, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import { format } from 'date-fns';

import { Writing } from 'contentlayer/generated';

interface WritingPreviewItemProps {
  writing: Writing;
  isLastItem: boolean;
}

interface WritingSectionProps {
  writings: Writing[];
}

export const WritingSection = ({ writings }: WritingSectionProps) => {
  return (
    <section aria-labelledby="writing-heading">
      <Heading
        as="h2"
        id="writing-heading"
        size="4"
        weight="bold"
        mb="4"
        tabIndex={-1}
      >
        Writing
      </Heading>
      {writings.length > 0 ? (
        <>
          {writings.map((writing, idx) => (
            <WritingPreviewItem
              key={writing._id}
              writing={writing}
              isLastItem={idx === writings.length - 1}
            />
          ))}
          <Flex direction="column" gap="1" mt="6">
            <Link href="/writing" className="writing-link">
              <Heading as="h3" size="3" weight="medium">
                <span id={`all-writings`}>View all writings</span>
              </Heading>
            </Link>
            <Text size="3" color="gray" as="p">
              Read about what I&apos;m learning, writing, and exploring.
            </Text>
          </Flex>
        </>
      ) : (
        <Text color="gray">No writings yet. Check back soon!</Text>
      )}
    </section>
  );
};

export const WritingPreviewItem = ({
  writing,
  isLastItem,
}: WritingPreviewItemProps) => {
  return (
    <Box asChild mb={!isLastItem ? '5' : undefined}>
      <article aria-labelledby={`writing-title-${writing._id}`}>
        <Flex direction="column" gap="1">
          <Flex gap="2" align="center">
            <Heading as="h3" size="3" weight="medium">
              <Link
                href={writing.url}
                className="writing-link"
                aria-describedby={`writing-summary-${writing._id}`}
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
          <Text
            size="3"
            color="gray"
            as="p"
            id={`writing-summary-${writing._id}`}
          >
            {writing.summary}
          </Text>
        </Flex>
      </article>
    </Box>
  );
};
