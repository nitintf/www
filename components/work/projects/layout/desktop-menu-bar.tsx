const ITEM_WIDTHS = [4, 3, 3, 4];

export function DesktopMenuBar() {
  return (
    <div className="flex h-[3.4cqw] items-center gap-[2cqw] bg-white/55 px-[2cqw] backdrop-blur">
      {ITEM_WIDTHS.map((width, i) => (
        <span
          key={i}
          className="h-[0.8cqw] rounded-full bg-black/35"
          style={{ width: `${width}cqw` }}
        />
      ))}
      <span className="ml-auto grid size-[2.2cqw] grid-cols-2 gap-[0.3cqw]">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="rounded-[0.2cqw] bg-black/55" />
        ))}
      </span>
    </div>
  );
}
