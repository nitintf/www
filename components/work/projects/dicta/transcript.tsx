import { DICTA_GREEN } from '@/components/work/projects/dicta/constants';

export function Transcript({ text }: { text: string }) {
  return (
    <div className="w-full rounded-[2cqw] border border-line bg-bg p-[3cqw] shadow-[0_2cqw_5cqw_-3cqw_rgb(0_0_0/0.25)]">
      <p className="min-h-[9cqw] text-[2.5cqw] leading-snug text-fg">
        {text}
        <span
          className="dicta-caret ml-[0.2cqw] inline-block h-[2.6cqw] w-[0.3cqw] translate-y-[0.4cqw]"
          style={{ background: DICTA_GREEN }}
        />
      </p>
      <p className="mt-[1.6cqw] flex items-center gap-[1cqw] text-[1.5cqw] text-muted">
        <span
          className="size-[1cqw] rounded-full"
          style={{ background: DICTA_GREEN }}
        />
        transcribed on this mac
      </p>
    </div>
  );
}
