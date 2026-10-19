import { EASEL } from '@/components/work/projects/easel/constants';

const TOOLS = ['↖', '◇', 'T', '#', '✋'];

export function ToolRail() {
  return (
    <div
      className="absolute left-[1.2cqw] top-[1.2cqw] z-10 flex flex-col items-center gap-[0.8cqw] rounded-[1cqw] border px-[0.6cqw] py-[1cqw] text-[1.2cqw]"
      style={{
        background: EASEL.panel,
        borderColor: EASEL.border,
        color: EASEL.muted,
      }}
    >
      {TOOLS.map((tool, i) => (
        <span
          key={tool}
          className="flex size-[2.4cqw] items-center justify-center rounded-[0.5cqw]"
          style={
            i === 0 ? { background: EASEL.field, color: EASEL.text } : undefined
          }
        >
          {tool}
        </span>
      ))}
      <span style={{ color: '#ef5350' }}>⌫</span>
    </div>
  );
}
