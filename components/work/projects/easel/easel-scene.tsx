'use client';

import { useSequence } from '@/hooks/use-sequence';
import { AgentCursor } from '@/components/work/projects/easel/agent-cursor';
import { AiChat } from '@/components/work/projects/easel/ai-chat';
import {
  BUILD_DURATIONS,
  DONE_STEP,
  EASEL,
  FRAME,
  LAYERS,
} from '@/components/work/projects/easel/constants';
import { DesignPanel } from '@/components/work/projects/easel/design-panel';
import { FrameLayer } from '@/components/work/projects/easel/frame-layer';
import { LayersPanel } from '@/components/work/projects/easel/layers-panel';
import { TitleBar } from '@/components/work/projects/easel/title-bar';
import { ToolRail } from '@/components/work/projects/easel/tool-rail';

export function EaselScene() {
  const { ref, step } = useSequence(BUILD_DURATIONS, DONE_STEP);
  const added = LAYERS.slice(0, Math.min(step, LAYERS.length));
  const building = step >= 1 && step < DONE_STEP;
  const current = building ? added[added.length - 1] : null;

  const status =
    step === 0
      ? 'Thinking…'
      : building
        ? `Adding ${current?.name.toLowerCase()}…`
        : `Done. Added ${LAYERS.length} layers to Frame 1.`;

  return (
    <div ref={ref} className="absolute inset-0">
      <div
        className="absolute inset-[3cqw] flex flex-col overflow-hidden rounded-[1.6cqw] border shadow-[0_2cqw_5cqw_-2cqw_rgb(0_0_0/0.4)]"
        style={{
          background: EASEL.window,
          borderColor: EASEL.border,
          color: EASEL.text,
        }}
      >
        <TitleBar />
        <div className="flex min-h-0 flex-1">
          <LayersPanel layers={added} selected={current?.name ?? FRAME.name} />
          <div
            className="relative flex flex-1 items-center justify-center"
            style={{ background: '#181818' }}
          >
            <ToolRail />
            <div className="relative">
              <p
                className="absolute -top-[2cqw] left-0 text-[1cqw]"
                style={{ color: EASEL.muted }}
              >
                {FRAME.name}
              </p>
              <div
                className="relative h-[44cqw] w-[20.3cqw] bg-white"
                style={{
                  outline: current ? 'none' : `1.5px solid ${EASEL.accent}`,
                }}
              >
                {added.map((layer) => (
                  <FrameLayer
                    key={layer.name}
                    layer={layer}
                    selected={layer === current}
                  />
                ))}
                {current && <AgentCursor target={current.box} />}
              </div>
            </div>
            <AiChat status={status} />
          </div>
          <DesignPanel
            title={current?.name ?? FRAME.name}
            box={current?.box ?? FRAME.box}
            fill={current?.kind === 'button' ? '#7C6CFF' : '#FFFFFF'}
          />
        </div>
      </div>
    </div>
  );
}
