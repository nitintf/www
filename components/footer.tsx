import CurrentTime from '@/components/current-time';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="mt-4 flex flex-col sm:flex-row sm:items-center items-start justify-start gap-3 text-sm text-neutral-500"
      aria-label="Site footer"
    >
      <CurrentTime />
      <span aria-hidden="true" className="text-neutral-400 hidden sm:inline">
        •
      </span>
      <nav
        aria-label="Social links and resources"
        className="flex flex-wrap items-center gap-3"
      >
        <a
          href="https://www.linkedin.com/in/nitin-panwarr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Nitin Panwar on LinkedIn (opens in new tab)"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nitintf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Nitin Panwar on GitHub (opens in new tab)"
        >
          GitHub
        </a>
        <a
          href="mailto:contact@nitin.sh"
          aria-label="Send email to contact@nitin.sh"
        >
          Email
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV or Resume (opens in new tab)"
        >
          CV/Resume
        </a>
        <Link href="/logs" aria-label="View logs">
          Logs
        </Link>
      </nav>
    </footer>
  );
}
