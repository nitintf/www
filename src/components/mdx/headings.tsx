import { Heading, IconButton, Box, HeadingProps } from '@radix-ui/themes';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w300/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M10 19.0004L9.82843 19.1719C8.26634 20.734 5.73368 20.734 4.17158 19.1719L3.82843 18.8288C2.26634 17.2667 2.26633 14.734 3.82843 13.1719L7.17158 9.8288C8.73368 8.2667 11.2663 8.2667 12.8284 9.8288L13.1716 10.1719C13.8252 10.8256 14.2053 11.6491 14.312 12.5004"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.68799 12.5004C9.79463 13.3516 10.1748 14.1752 10.8284 14.8288L11.1715 15.1719C12.7336 16.734 15.2663 16.734 16.8284 15.1719L20.1715 11.8288C21.7336 10.2667 21.7336 7.73404 20.1715 6.17194L19.8284 5.8288C18.2663 4.2667 15.7336 4.2667 14.1715 5.8288L14 6.00037"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const MdxHeading = (props: HeadingProps) => {
  const { id, children, ...rest } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      position="relative"
      mt="9"
      mb="5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heading {...rest} id={id}>
        {children}
      </Heading>
      {id && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '22%',
                zIndex: 1,
              }}
            >
              <IconButton
                variant="ghost"
                color="gray"
                onClick={() => {
                  window.location.hash = `#${id}`;
                }}
                aria-label="Copy link to heading"
              >
                <LinkIcon />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Box>
  );
};
