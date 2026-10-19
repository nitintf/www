import { motion } from 'motion/react';
import {
  EASEL,
  FRAME,
  type Layer,
} from '@/components/work/projects/easel/constants';

export function LayersPanel({
  layers,
  selected,
}: {
  layers: Layer[];
  selected: string;
}) {
  const rows = [
    { name: FRAME.name, depth: 0 },
    ...layers.map((l) => ({ name: l.name, depth: 1 })),
  ];

  return (
    <aside
      className="w-[17cqw] shrink-0 border-r p-[1.2cqw]"
      style={{ borderColor: EASEL.border }}
    >
      <p
        className="flex justify-between text-[1.1cqw]"
        style={{ color: EASEL.muted }}
      >
        Layers <span>{rows.length}</span>
      </p>
      <ul className="mt-[1cqw] space-y-[0.3cqw] text-[1.05cqw]">
        {rows.map((row) => (
          <motion.li
            key={row.name}
            layout
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="truncate rounded-[0.5cqw] py-[0.4cqw] pr-[0.6cqw]"
            style={{
              paddingLeft: `${0.8 + row.depth * 1.4}cqw`,
              background:
                row.name === selected ? EASEL.selected : 'transparent',
              color: row.name === selected ? EASEL.text : EASEL.muted,
            }}
          >
            {row.depth ? '▢' : '#'} {row.name}
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}
