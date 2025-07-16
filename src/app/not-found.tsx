'use client';

import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        height: '100%',
        minHeight: '60vh',
      }}
    >
      <Heading size="9" mb="8" style={{ fontSize: '8rem', fontWeight: 'bold' }}>
        404
      </Heading>
      <Heading size="6" mb="2">
        Page Not Found
      </Heading>
      <Text
        size="4"
        mb="6"
        style={{ color: 'var(--gray-11)', textAlign: 'center' }}
      >
        Sorry, the page you are looking for doesn&apos;t exist.
      </Text>
      <Link href="/">
        <Button size="3" variant="outline">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }}
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Home
        </Button>
      </Link>
    </Flex>
  );
}
