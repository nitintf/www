import { MoreAboutMe } from '@/components/expandable-section';
import Link from 'next/link';

const featuredWork = [
  {
    title: 'promptomato',
    description: 'A tiny tomato companion that keeps you focused.',
    url: 'https://promptomato.app',
  },
  {
    title: 'dicta',
    description: 'On-device voice-to-text for macOS.',
    url: 'https://dicta.nitin.sh',
  },
  {
    title: 'easel',
    description: 'Open-source design studio powered by Claude via MCP.',
    url: 'https://github.com/nitintf/easel',
  },
];

export default function Home() {
  return (
    <main role="main" aria-label="Main content">
      <div className="w-full max-w-2xl mx-auto px-8 pb-8">
        <article>
          <div className="pt-5">
            <p className="text-sm leading-relaxed text-ui-10 pt-2">
              I care about well-crafted software, clear thinking, and building
              things that hold up over time.
            </p>

            <p className="text-sm leading-relaxed text-ui-10 pt-2">
              I build web, mobile, and backend systems — currently making{' '}
              <a
                href="https://dicta.nitin.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                dicta
              </a>
              , an on-device voice-to-text app for macOS. When I&apos;m not
              coding, I&apos;m probably watching football, exploring mountains,
              or watching a good movie.
            </p>

            <p className="text-sm leading-relaxed text-ui-10 pt-2">
              Read my{' '}
              <Link href="/logs" className="pill-link">
                logs
              </Link>
              . Check what I&apos;m up to{' '}
              <Link href="/now" className="pill-link">
                now
              </Link>
              . Or reach me through{' '}
              <a href="mailto:contact@nitin.sh" className="pill-link">
                email
              </a>
              .
            </p>

            <MoreAboutMe />
          </div>

          <section className="pt-20" aria-labelledby="work-heading">
            <Link
              href="/works"
              className="plain-link group inline-flex items-center gap-2 mb-4"
            >
              <h2
                id="work-heading"
                className="font-serif italic text-base tracking-wide font-medium text-ui-12 group-hover:text-accent-500 transition-colors"
              >
                Work
              </h2>
              <span className="text-xs text-ui-7 group-hover:text-accent-500 transition-colors">
                [↗]
              </span>
            </Link>
            <ul className="list-none divide-y divide-ui-4/40">
              {featuredWork.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plain-link group flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <div className="min-w-0 flex items-baseline gap-2">
                      <span className="text-sm font-medium text-ui-12 group-hover:text-accent-500 transition-colors shrink-0">
                        {item.title}
                      </span>
                      <span className="text-xs text-ui-8">
                        {item.description}
                      </span>
                    </div>
                    <span className="text-ui-7 group-hover:text-ui-10 transition-colors shrink-0 text-sm">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
