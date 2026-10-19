import { EASEL, type Box } from '@/components/work/projects/easel/constants';

function Field({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div
        className="rounded-[0.5cqw] px-[0.8cqw] py-[0.45cqw] text-[1.05cqw] tabular-nums"
        style={{ background: EASEL.field, color: EASEL.text }}
      >
        {value}
      </div>
      <p
        className="pt-[0.2cqw] text-center text-[0.85cqw]"
        style={{ color: EASEL.faint }}
      >
        {label}
      </p>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="pb-[0.6cqw] pt-[1.2cqw] text-[1.05cqw]"
      style={{ color: EASEL.text }}
    >
      {children}
    </p>
  );
}

const PRESETS = ['Desktop', 'Tablet', 'Mobile'];

export function DesignPanel({
  title,
  box,
  fill,
}: {
  title: string;
  box: Box;
  fill: string;
}) {
  return (
    <aside
      className="w-[22cqw] shrink-0 border-l p-[1.2cqw]"
      style={{ borderColor: EASEL.border }}
    >
      <p
        className="truncate text-[1.15cqw] font-medium"
        style={{ color: EASEL.text }}
      >
        # {title}
      </p>
      <div className="mt-[1cqw] flex gap-[0.6cqw] text-[1.05cqw]">
        {['Design', 'Layer', 'Export'].map((tab, i) => (
          <span
            key={tab}
            className="rounded-[0.5cqw] px-[0.8cqw] py-[0.3cqw]"
            style={
              i === 0
                ? { background: EASEL.selected, color: '#aebdff' }
                : { color: EASEL.muted }
            }
          >
            {tab}
          </span>
        ))}
      </div>
      <Heading>Frame preset</Heading>
      <div className="grid grid-cols-3 gap-[0.5cqw] text-center text-[0.95cqw]">
        {PRESETS.map((preset) => (
          <span
            key={preset}
            className="rounded-[0.6cqw] py-[0.8cqw]"
            style={
              preset === 'Mobile'
                ? { background: EASEL.selected, color: '#aebdff' }
                : { color: EASEL.muted }
            }
          >
            {preset}
          </span>
        ))}
      </div>
      <Heading>Position & size</Heading>
      <div className="grid grid-cols-2 gap-[0.6cqw]">
        <Field label="X" value={box.x} />
        <Field label="Y" value={box.y} />
        <Field label="Width" value={box.w} />
        <Field label="Height" value={box.h} />
      </div>
      <Heading>Fill</Heading>
      <div className="flex items-center gap-[0.6cqw]">
        <span
          className="size-[2cqw] rounded-[0.4cqw] border border-white/20"
          style={{ background: fill }}
        />
        <span
          className="flex-1 rounded-[0.5cqw] px-[0.8cqw] py-[0.45cqw] text-[1.05cqw] uppercase"
          style={{ background: EASEL.field, color: EASEL.text }}
        >
          {fill}
        </span>
      </div>
    </aside>
  );
}
