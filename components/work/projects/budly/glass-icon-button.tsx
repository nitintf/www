import { GlassSurface } from '@/components/work/projects/budly/glass-surface';

const ICONS = {
  profile: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 20a7 7 0 0 1 14 0',
  add: 'M12 5v14M5 12h14',
};

export function GlassIconButton({ icon }: { icon: keyof typeof ICONS }) {
  return (
    <GlassSurface className="relative size-[4.2cqw] rounded-full">
      <svg viewBox="0 0 24 24" className="w-[2cqw]">
        <path
          d={ICONS[icon]}
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </GlassSurface>
  );
}
