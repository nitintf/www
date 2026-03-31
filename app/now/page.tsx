import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Nitin is currently up to in 2026.',
};

export default function NowPage() {
  return (
    <main role="main" aria-label="Now">
      <div className="w-full max-w-2xl mx-auto px-8 pt-5 pb-8 flex-1">
        <h1 className="sr-only">Now — Nitin Panwar</h1>
        <div className="pt-2">
          <p className="text-sm leading-relaxed text-ui-10">
            What I&apos;m focused on right now. Updated periodically.
          </p>
        </div>

        <section className="pt-20">
          <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
            Work
          </h2>
          <p className="text-sm leading-relaxed text-ui-10">
            Working at{' '}
            <a
              href="https://www.ampd.energy"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link"
            >
              Ampd Energy
            </a>
            , building software for clean energy systems. Day-to-day involves
            full-stack product work, system design, and keeping things running
            at scale.
          </p>
        </section>

        <section className="pt-12">
          <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
            Building
          </h2>
          <p className="text-sm leading-relaxed text-ui-10">
            Shipping{' '}
            <a
              href="https://dicta.nitin.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link"
            >
              dicta
            </a>
            , an on-device voice-to-text app for macOS. Focused on accuracy,
            privacy, and zero latency. Trying to make local AI transcription
            actually usable.
          </p>
        </section>

        <section className="pt-12">
          <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
            Learning
          </h2>
          <ul className="space-y-1.5 list-none">
            <li className="text-sm leading-relaxed text-ui-10">
              Go and low-level programming — understanding what happens closer
              to the metal.
            </li>
            <li className="text-sm leading-relaxed text-ui-10">
              Picking up Rust for systems-level side projects.
            </li>
            <li className="text-sm leading-relaxed text-ui-10">
              Exploring AI agents and LLM applications with LangChain and
              LangGraph.
            </li>
          </ul>
        </section>

        <section className="pt-12">
          <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
            Interested in
          </h2>
          <ul className="space-y-1.5 list-none">
            <li className="text-sm leading-relaxed text-ui-10">
              Operating systems and networking.
            </li>
            <li className="text-sm leading-relaxed text-ui-10">
              AI and its applications in developer tooling.
            </li>
            <li className="text-sm leading-relaxed text-ui-10">
              System design, infrastructure, and engineering at scale.
            </li>
            <li className="text-sm leading-relaxed text-ui-10">
              Developer tools that stay out of the way.
            </li>
          </ul>
        </section>

        <section className="pt-12">
          <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
            Life
          </h2>
          <p className="text-sm leading-relaxed text-ui-10">
            Outside of work, I spend most of my time chasing footballs and
            trying to run as much as I can — been playing and staying active
            since I was a kid and it&apos;s the one thing that never gets old. I
            love travelling to places I&apos;ve never been, especially anywhere
            with mountains — something about being up there just clears
            everything out. When I&apos;m home, I&apos;m probably deep into a
            game I&apos;ll never finish, watching a movie, or just sitting with
            a good cup of chai doing absolutely nothing.
          </p>
        </section>

        <figure className="pt-20 flex flex-col items-center">
          <video autoPlay loop muted playsInline className="w-3/4 rounded-lg">
            <source src="/Bruce Ping Pong.mp4" />
          </video>
          <figcaption className="text-sm mt-3 italic text-ui-9 w-3/4">
            Personal goal is to one day find work-life balance with the same
            grace Bruce Lee finds ping pong balls with a pair of nunchucks.
          </figcaption>
        </figure>

        <p className="pt-16 text-xs text-ui-8 italic">
          Last updated — 11 Jan, 2026
        </p>
      </div>
    </main>
  );
}
