import { RichText } from '@/components/ui/rich-text';
import type { TimelineYear } from '@/lib/timeline';

// Rows of a muted year and the things that happened in it.
export function Timeline({
  groups,
  label,
}: {
  groups: TimelineYear[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="list-none space-y-row">
      {groups.map((group) => (
        <li
          key={group.label}
          className="grid grid-cols-[var(--spacing-label)_1fr] gap-x-4"
        >
          <span className="text-base text-muted tabular-nums">
            {group.label}
          </span>
          <ul className="list-none space-y-row">
            {group.items.map((item, i) => (
              <li key={i} className="text-base leading-normal text-fg">
                <RichText value={item} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
