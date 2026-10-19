import { EASEL, PROMPT } from '@/components/work/projects/easel/constants';

export function AiChat({ status }: { status: string | null }) {
  return (
    <div
      className="absolute bottom-[1.2cqw] right-[1.2cqw] z-10 w-[25cqw] rounded-[1.2cqw] border text-[1.05cqw]"
      style={{
        background: EASEL.panel,
        borderColor: EASEL.border,
        color: EASEL.text,
      }}
    >
      <p
        className="border-b px-[1.2cqw] py-[0.8cqw]"
        style={{ borderColor: EASEL.border }}
      >
        ✦ AI Chat
      </p>
      <div className="space-y-[0.8cqw] p-[1.2cqw]">
        <p
          className="ml-auto w-fit max-w-[90%] rounded-[0.8cqw] px-[1cqw] py-[0.5cqw]"
          style={{ background: EASEL.selected }}
        >
          {PROMPT}
        </p>
        {status && (
          <p
            className="flex items-center gap-[0.6cqw]"
            style={{ color: EASEL.muted }}
          >
            <span
              className="size-[0.8cqw] rounded-full"
              style={{ background: EASEL.agent }}
            />
            {status}
          </p>
        )}
      </div>
      <div
        className="flex gap-[1cqw] border-t px-[1.2cqw] py-[0.7cqw] text-[0.95cqw]"
        style={{ borderColor: EASEL.border, color: EASEL.muted }}
      >
        <span>Claude Sonnet ▾</span>
        <span>1 Agent ▾</span>
        <span>Attach</span>
      </div>
    </div>
  );
}
