'use client';

import Link from 'next/link';
import { Box, Text, Flex } from '@radix-ui/themes';

interface BackNavigationProps {
  href: string;
  label: string;
}

export const BackNavigation = ({ href, label }: BackNavigationProps) => {
  return (
    <Box mb="6">
      <Link
        href={href}
        style={{
          color: '#888',
          transition: 'color 0.2s ease',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff';
          const arrow = e.currentTarget.querySelector(
            '.back-arrow',
          ) as HTMLElement;
          if (arrow) {
            arrow.style.transform = 'translateX(-4px)';
          }
          const line = e.currentTarget.querySelector(
            '.back-line',
          ) as HTMLElement;
          if (line) {
            line.style.transform = 'scaleX(1.2)';
            line.style.transformOrigin = 'left';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#888';
          const arrow = e.currentTarget.querySelector(
            '.back-arrow',
          ) as HTMLElement;
          if (arrow) {
            arrow.style.transform = 'translateX(0)';
          }
          const line = e.currentTarget.querySelector(
            '.back-line',
          ) as HTMLElement;
          if (line) {
            line.style.transform = 'scaleX(1)';
          }
        }}
      >
        <Flex align="center" gap="2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              overflow: 'visible',
            }}
          >
            <path
              className="back-line"
              d="M19 12H5"
              style={{
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            <path
              className="back-arrow"
              d="M12 19l-7-7 7-7"
              style={{
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </svg>
          <Text size="3" weight="medium">
            {label}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
