'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <main className="min-h-screen" role="main" aria-label="Error page">
      <div className="w-full max-w-3xl mx-auto p-8 pt-16">
        <div className="py-4">
          <h1 className="text-primary">Oops! Something went wrong</h1>
          <p className="text-secondary mt-4">
            Looks like we hit a bug in production. Even the best code has its
            off days—kind of like my ping pong skills with nunchucks.
          </p>
          <p className="text-secondary mt-4">
            Don&apos;t worry, I&apos;ve been notified (probably). In the
            meantime, you can try again or <Link href="/">go home</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
