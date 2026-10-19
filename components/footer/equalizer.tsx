// Three tiny bars that bounce while a song is playing.
export function Equalizer() {
  return (
    <span
      aria-hidden="true"
      className="ml-1.5 inline-flex h-[9px] items-end gap-px align-baseline"
    >
      {[0, 1, 2].map((bar) => (
        <span
          key={bar}
          className="equalizer-bar w-[2px] rounded-full bg-current"
          style={{ animationDelay: `${bar * -0.35}s` }}
        />
      ))}
    </span>
  );
}
