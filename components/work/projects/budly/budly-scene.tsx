'use client';

import { useSequence } from '@/hooks/use-sequence';
import {
  BUDLY,
  HABITS,
  LOG_DURATIONS,
} from '@/components/work/projects/budly/constants';
import { ChecklistWidget } from '@/components/work/projects/budly/checklist-widget';
import { DaySummary } from '@/components/work/projects/budly/day-summary';
import { GlassIconButton } from '@/components/work/projects/budly/glass-icon-button';
import { HabitRow } from '@/components/work/projects/budly/habit-row';
import { IPhone } from '@/components/work/projects/budly/iphone';
import { ProgressWidget } from '@/components/work/projects/budly/progress-widget';
import { TabBar } from '@/components/work/projects/budly/tab-bar';

export function BudlyScene() {
  const { ref, step: done } = useSequence(LOG_DURATIONS, 2);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <ProgressWidget done={done} total={HABITS.length} />
      <ChecklistWidget done={done} />
      <IPhone>
        <div className="px-[2.2cqw] pt-[1.2cqw]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[1.05cqw]" style={{ color: BUDLY.muted }}>
                Monday, October 19
              </p>
              <p className="text-[2.6cqw] font-bold tracking-tight">Today</p>
            </div>
            <div className="flex gap-[0.8cqw] pt-[0.6cqw]">
              <GlassIconButton icon="profile" />
              <GlassIconButton icon="add" />
            </div>
          </div>
          <DaySummary done={done} total={HABITS.length} />
          <p
            className="mt-[1.8cqw] text-[0.85cqw] font-semibold tracking-[0.12em]"
            style={{ color: BUDLY.muted }}
          >
            ALL HABITS
          </p>
          <ul className="mt-[0.8cqw] space-y-[0.7cqw]">
            {HABITS.map((habit, i) => (
              <HabitRow key={habit.name} habit={habit} checked={i < done} />
            ))}
          </ul>
        </div>
        <TabBar active="Today" />
      </IPhone>
    </div>
  );
}
