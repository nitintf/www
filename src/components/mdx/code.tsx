import { Box } from '@radix-ui/themes';

export const Pre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <Box asChild className="blog-block">
      <pre {...props}></pre>
    </Box>
  );
};
