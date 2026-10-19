export function StatusBar() {
  return (
    <div className="relative flex h-[4.4cqw] items-center justify-between px-[2.6cqw] pt-[0.6cqw] text-[1.2cqw] font-semibold text-white">
      <span>9:41</span>
      <span className="absolute left-1/2 top-[0.9cqw] h-[2.4cqw] w-[8.6cqw] -translate-x-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-[0.5cqw]">
        <svg viewBox="0 0 18 12" className="w-[1.6cqw] fill-white">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" className="w-[1.5cqw]">
          <path
            d="M1 4.5a10 10 0 0 1 14 0M3.5 7a6.5 6.5 0 0 1 9 0M6 9.5a3 3 0 0 1 4 0"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span className="flex h-[1.2cqw] w-[2.4cqw] items-center rounded-[0.35cqw] border border-white/50 p-[0.15cqw]">
          <span className="h-full w-[75%] rounded-[0.2cqw] bg-white" />
        </span>
      </span>
    </div>
  );
}
