export function Page({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <main
      id="main"
      aria-label={label}
      className="flex-1 outline-none"
      tabIndex={-1}
    >
      <div className="w-full max-w-content mx-auto px-gutter pt-block pb-page-bottom">
        {children}
      </div>
    </main>
  );
}
