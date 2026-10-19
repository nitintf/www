import { EASEL } from '@/components/work/projects/easel/constants';

const LIGHTS = ['#ff5f57', '#febc2e', '#28c840'];

export function TitleBar() {
  return (
    <div
      className="flex h-[3.6cqw] shrink-0 items-center gap-[1cqw] border-b px-[1.4cqw]"
      style={{ borderColor: EASEL.border }}
    >
      {LIGHTS.map((color) => (
        <span
          key={color}
          className="size-[1cqw] rounded-full"
          style={{ background: color }}
        />
      ))}
      <span
        className="ml-[1.4cqw] rounded-[0.6cqw] px-[1cqw] py-[0.3cqw] text-[1.1cqw]"
        style={{ background: EASEL.selected, color: EASEL.text }}
      >
        Untitled 1 ×
      </span>
      <span className="text-[1.3cqw]" style={{ color: EASEL.faint }}>
        +
      </span>
      <span
        className="ml-auto rounded-[0.6cqw] px-[1cqw] py-[0.3cqw] text-[1.1cqw]"
        style={{ background: '#2d3a66', color: '#aebdff' }}
      >
        ✦ Agents
      </span>
    </div>
  );
}
