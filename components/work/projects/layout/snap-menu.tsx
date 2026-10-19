import { motion } from 'motion/react';
import { MENU_ITEMS } from '@/components/work/projects/layout/constants';

export function SnapMenu({ highlighted }: { highlighted: string | null }) {
  return (
    <motion.ul
      className="absolute right-[1.4cqw] top-[3.8cqw] z-10 w-[20cqw] rounded-[1.2cqw] bg-white/90 p-[0.8cqw] text-[1.45cqw] text-black/80 shadow-[0_1.5cqw_4cqw_-1cqw_rgb(0_0_0/0.35)] backdrop-blur"
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18 }}
    >
      {MENU_ITEMS.map((item) => (
        <li
          key={item}
          className={`rounded-[0.6cqw] px-[1cqw] py-[0.45cqw] ${
            item === highlighted ? 'bg-[#2f6fde] text-white' : ''
          }`}
        >
          {item}
        </li>
      ))}
    </motion.ul>
  );
}
