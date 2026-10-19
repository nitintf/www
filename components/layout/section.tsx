export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-section">
      {title && <h2 className="pb-block text-base text-muted">{title}</h2>}
      {children}
    </section>
  );
}
