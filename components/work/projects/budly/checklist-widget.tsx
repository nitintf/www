import { HABITS, WIDGET } from '@/components/work/projects/budly/constants';
import { WidgetShell } from '@/components/work/projects/budly/widget-shell';

export function ChecklistWidget({ done }: { done: number }) {
  return (
    <WidgetShell className="right-[5cqw] top-[30cqw] w-[22cqw] rotate-[4deg] p-[1.8cqw]">
      <p
        className="text-[1.05cqw] font-semibold tracking-[0.1em]"
        style={{ color: WIDGET.faint }}
      >
        TODAY
      </p>
      <ul className="mt-[0.8cqw] space-y-[0.7cqw]">
        {HABITS.map((habit, i) => {
          const checked = i < done;
          return (
            <li
              key={habit.name}
              className="flex items-center gap-[0.8cqw] text-[1.2cqw] font-medium"
            >
              <span
                className="size-[1.6cqw] shrink-0 rounded-full border-[0.2cqw] transition-colors duration-300"
                style={{
                  borderColor: checked ? WIDGET.ink : WIDGET.ring,
                  background: checked ? WIDGET.ink : 'transparent',
                }}
              />
              <span className={checked ? 'line-through opacity-50' : ''}>
                {habit.name}
              </span>
            </li>
          );
        })}
      </ul>
    </WidgetShell>
  );
}
