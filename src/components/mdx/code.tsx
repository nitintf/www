import { Box } from '@radix-ui/themes';
import { JSX } from 'react';

export const Pre = (props: JSX.IntrinsicElements['pre']) => {
  return (
    <Box asChild className="blog-block">
      <pre {...props}></pre>
    </Box>
  );
};
