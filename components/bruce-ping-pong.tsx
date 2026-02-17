export default function BrucePingPong() {
  return (
    <figure className="mt-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-3/4 rounded-lg mx-auto"
      >
        <source src="/Bruce Ping Pong.mp4" />
      </video>
      <figcaption className="text-sm mt-3 text-neutral-500 italic">
        Personal goal is to one day find work-life balance with the same grace
        Bruce Lee finds ping pong balls with a pair of nunchucks.
      </figcaption>
    </figure>
  );
}
