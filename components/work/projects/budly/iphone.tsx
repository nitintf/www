import { BUDLY } from '@/components/work/projects/budly/constants';
import { StatusBar } from '@/components/work/projects/budly/status-bar';

export function IPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-[3.5cqw] h-[63cqw] w-[30cqw] -translate-x-1/2 rounded-[5.4cqw] bg-[#0a0b0b] p-[0.75cqw] shadow-[0_0_0_0.25cqw_#3a3d3c,0_3cqw_7cqw_-2cqw_rgb(0_0_0/0.55)]">
      <div
        className="relative size-full overflow-hidden rounded-[4.7cqw]"
        style={{ background: BUDLY.background, color: BUDLY.text }}
      >
        <StatusBar />
        {children}
        <span className="absolute bottom-[0.8cqw] left-1/2 h-[0.5cqw] w-[10cqw] -translate-x-1/2 rounded-full bg-white/70" />
      </div>
    </div>
  );
}
