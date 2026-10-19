import type { HabitIconName } from '@/components/work/projects/budly/constants';

const ICONS: Record<HabitIconName, { d: string; color: string }> = {
  drop: {
    d: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
    color: '#8ec5e8',
  },
  book: {
    d: 'M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z',
    color: '#e9c46a',
  },
  gym: { d: 'M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12', color: '#8fd3a9' },
  heart: {
    d: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
    color: '#c4a7e7',
  },
};

export function HabitIcon({ name }: { name: HabitIconName }) {
  const { d, color } = ICONS[name];
  return (
    <svg viewBox="0 0 24 24" className="w-[1.9cqw]">
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
