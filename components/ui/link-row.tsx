export function LinkRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-5 flex flex-wrap gap-x-inline gap-y-2 text-base">
      {children}
    </div>
  );
}
