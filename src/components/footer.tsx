'use client';

import { useState, useEffect } from 'react';
import { Box, Text, Flex, Separator, Container } from '@radix-ui/themes';

const formatDateTime = (date: Date) => {
  const dateStr = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const timeStr = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return `${dateStr} • ${timeStr}`;
};

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container size={{ initial: '1', sm: '2' }} px={{ initial: '5' }}>
      <Box mt="6">
        <Separator size="4" style={{ backgroundColor: '#333' }} />
        <Flex justify="center" align="center" py="4">
          <Text
            size="1"
            color="gray"
            style={{
              fontFamily: 'var(--font-geist-mono)',
              letterSpacing: '0.5px',
              fontSize: '10px',
            }}
          >
            {formatDateTime(currentTime)}
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};
