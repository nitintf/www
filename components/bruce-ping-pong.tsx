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
        Personal goal is to one day be as good at finding balance as Bruce Lee
        is at ping pong with a pair of nunchucks.
      </figcaption>
    </figure>
  );
}
