import { Box, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box asChild mt="9" mb="6">
      <header>
        <Link href="/">
          <Heading as="h1" size="3">
            Nitin Panwar
          </Heading>
        </Link>
        <Text size="3" color="gray">
          Software Engineer
        </Text>
      </header>
    </Box>
  );
};
