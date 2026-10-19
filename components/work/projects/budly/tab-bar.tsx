import { TABS, type TabName } from '@/components/work/projects/budly/constants';
import { GlassSurface } from '@/components/work/projects/budly/glass-surface';

const ICONS: Record<TabName, string> = {
  Today:
    'M12 20v-8M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z',
  Focus: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2 2M10 3h4',
  Journal: 'M6 3h12v18H6zM10 3v18',
  Progress: 'M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5',
};

export function TabBar({ active }: { active: TabName }) {
  return (
    <GlassSurface className="absolute inset-x-[1.8cqw] bottom-[2.6cqw] h-[5.6cqw] justify-between rounded-full px-[0.8cqw]">
      {TABS.map((tab) => (
        <span
          key={tab}
          className={`flex h-[4.2cqw] flex-1 flex-col items-center justify-center gap-[0.2cqw] rounded-full text-[0.8cqw] ${
            tab === active ? 'bg-white/12 text-[#8fd3a9]' : 'text-white/80'
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-[1.7cqw]">
            <path
              d={ICONS[tab]}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {tab}
        </span>
      ))}
    </GlassSurface>
  );
}
