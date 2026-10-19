import { BAR_COUNT } from '@/components/work/projects/dicta/constants';

// Each bar gets its own peak and rhythm so the wave moves like a voice
// rather than in lockstep.
const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  const envelope = Math.sin(Math.PI * (i / (BAR_COUNT - 1))) ** 0.7;
  return {
    height: 1 + envelope * 4.4,
    duration: 1100 + ((i * 263) % 700),
    delay: (i * 137) % 900,
  };
});

export function RecordingPill({ listening }: { listening: boolean }) {
  return (
    <div className="flex h-[8cqw] w-[44cqw] items-center gap-[1.8cqw] rounded-full border border-white/10 bg-[#0b0b0b] px-[1.6cqw] shadow-[0_2.5cqw_6cqw_-2cqw_rgb(0_0_0/0.45)]">
      <span className="flex size-[4.4cqw] shrink-0 items-center justify-center rounded-full bg-white/15 text-[2cqw] text-white">
        ×
      </span>
      <div className="flex h-full flex-1 items-center justify-between">
        {bars.map((bar, i) => (
          <span
            key={i}
            className={`w-[0.55cqw] rounded-full bg-[#e8e8e8] transition-[height,opacity] duration-700 ease-out ${listening ? 'dicta-bar' : ''}`}
            style={{
              height: listening ? `${bar.height}cqw` : '0.55cqw',
              animationDuration: `${bar.duration}ms`,
              animationDelay: `-${bar.delay}ms`,
              opacity: listening ? 1 : 0.35,
            }}
          />
        ))}
      </div>
      <span className="flex size-[4.4cqw] shrink-0 items-center justify-center rounded-full bg-[#8a2f3c]">
        <span className="size-[1.6cqw] rounded-[0.3cqw] bg-white/80" />
      </span>
    </div>
  );
}
