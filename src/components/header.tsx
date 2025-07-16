import { Box, Heading, Text, Flex } from '@radix-ui/themes';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box asChild mt="9" mb="6" className="mb-16">
      <header>
        <Flex direction="column" gap="2">
          <Flex gap="4" align="center">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Heading as="h1" size="3">
                Nitin Panwar
              </Heading>
            </Link>
          </Flex>
          <Text size="3" color="gray">
            Software Engineer
          </Text>
        </Flex>
      </header>
    </Box>
  );
};
