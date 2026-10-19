const ITEM_WIDTHS = [5, 3, 3, 4];

export function MenuBar() {
  return (
    <div className="flex h-[3.4cqw] items-center gap-[2.2cqw] bg-black/25 px-[2.4cqw]">
      {ITEM_WIDTHS.map((width, i) => (
        <span
          key={i}
          className="h-[0.9cqw] rounded-full bg-white/50"
          style={{ width: `${width}cqw` }}
        />
      ))}
      <span className="ml-auto h-[0.9cqw] w-[7cqw] rounded-full bg-white/50" />
    </div>
  );
}
