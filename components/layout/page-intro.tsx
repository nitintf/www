// The top of a page: an optional title with a muted subtitle, then a few
// lines of plain text. The signature above it lives in the root layout.
export function PageIntro({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header>
      {title && (
        <div>
          <h1 className="text-base text-fg">{title}</h1>
          {subtitle && <div className="text-base text-muted">{subtitle}</div>}
        </div>
      )}
      {children && (
        <div
          className={`space-y-paragraph text-base leading-body text-fg ${title ? 'pt-block' : ''}`}
        >
          {children}
        </div>
      )}
    </header>
  );
}
