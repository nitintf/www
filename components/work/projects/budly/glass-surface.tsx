// iOS liquid glass: a frosted, slightly lit surface with a bright top edge.
export function GlassSurface({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`flex items-center justify-center border border-white/20 bg-[linear-gradient(180deg,rgb(255_255_255/0.2),rgb(255_255_255/0.05))] shadow-[inset_0_0.15cqw_0_rgb(255_255_255/0.35),0_0.8cqw_1.8cqw_rgb(0_0_0/0.4)] backdrop-blur-md ${className ?? ''}`}
    >
      {children}
    </span>
  );
}
