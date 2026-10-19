export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
    >
      skip to content
    </a>
  );
}
