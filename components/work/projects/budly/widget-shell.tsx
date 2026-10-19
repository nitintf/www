import { WIDGET } from '@/components/work/projects/budly/constants';

export function WidgetShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[3cqw] shadow-[0_2cqw_5cqw_-2cqw_rgb(0_0_0/0.35)] ${className ?? ''}`}
      style={{ background: WIDGET.cream, color: WIDGET.ink }}
    >
      {children}
    </div>
  );
}
