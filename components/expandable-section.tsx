'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export function MoreAboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-4">
      <AnimatePresence mode="wait">
        {!showMore ? (
          <motion.div
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-label="Show more about me"
              className="group inline-block cursor-pointer"
              onClick={() => setShowMore(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowMore(true);
                }
              }}
            >
              <span className="inline-block px-2 rounded-md bg-ui-3 group-hover:bg-ui-4 text-ui-9 group-hover:text-ui-11 italic transition-colors duration-200">
                &bull;&bull;&bull;
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            role="button"
            tabIndex={0}
            aria-label="Show less"
            className="cursor-pointer"
            onClick={() => setShowMore(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setShowMore(false);
              }
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm leading-relaxed text-ui-10 bg-ui-3 rounded-md px-3 py-2 hover:bg-ui-4 transition-colors duration-200">
              I&apos;m currently working at Ampd Energy, building software for
              clean energy systems. Before that, I spent 5+ years shipping
              products across web, mobile, and backend — from real-time data
              pipelines to developer tools.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
