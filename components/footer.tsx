import CurrentTime from '@/components/current-time';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-24" aria-label="Site footer">
      <div className="max-w-2xl mx-auto px-8">
        <p className="text-sm leading-relaxed text-ui-9">
          <CurrentTime /> I&apos;m on{' '}
          <a
            href="https://github.com/nitintf"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/nitin-panwarr/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            LinkedIn
          </a>
          , and{' '}
          <a
            href="https://x.com/nitintf_"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            X
          </a>{' '}
          — or just{' '}
          <a href="mailto:contact@nitin.sh" className="pill-link">
            email
          </a>{' '}
          me. Grab my{' '}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            CV
          </a>
          . Like terminals? Try{' '}
          <code className="text-xs bg-ui-3 px-1.5 py-0.5 rounded font-mono text-ui-11">
            npx nitintf
          </code>
        </p>

        <p className="text-xs text-ui-8 mt-6 italic font-serif">
          &copy; {new Date().getFullYear()}, Nitin Panwar
        </p>
      </div>
    </footer>
  );
}
