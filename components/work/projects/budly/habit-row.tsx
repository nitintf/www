import { CheckCircle } from '@/components/work/projects/budly/check-circle';
import { BUDLY, type Habit } from '@/components/work/projects/budly/constants';
import { HabitIcon } from '@/components/work/projects/budly/habit-icon';

export function HabitRow({
  habit,
  checked,
}: {
  habit: Habit;
  checked: boolean;
}) {
  return (
    <li
      className="flex items-center gap-[1.1cqw] rounded-[1.6cqw] p-[0.9cqw]"
      style={{ background: BUDLY.row }}
    >
      <span
        className="flex size-[3.3cqw] items-center justify-center rounded-[1cqw]"
        style={{ background: habit.tint }}
      >
        <HabitIcon name={habit.icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[1.15cqw] font-semibold">{habit.name}</span>
        <span className="block text-[0.9cqw]" style={{ color: BUDLY.muted }}>
          {habit.detail}
        </span>
      </span>
      <CheckCircle checked={checked} />
    </li>
  );
}
