import BrucePingPong from '@/components/bruce-ping-pong';
import Footer from '@/components/footer';
import Work from '@/components/work';

export default function Home() {
  return (
    <main className="min-h-screen" role="main" aria-label="Main content">
      <div className="w-full max-w-3xl mx-auto p-8 pt-16">
        <article className="py-8" aria-labelledby="profile-heading">
          <header>
            <h1 id="profile-heading" className="text-primary">
              Nitin Panwar—Engineer
            </h1>
          </header>
          <div className="w-full">
            <section aria-labelledby="about-heading">
              <h2 id="about-heading" className="sr-only">
                About
              </h2>
              <p className="text-secondary mt-4">
                For the past 5+ years, I&apos;ve been building web, mobile, and
                backend systems that scale beyond{' '}
                <q className="text-neutral-600 dark:text-neutral-400 italic">
                  works on my machine
                </q>
                . I obsess over clean system design, performance, and UX, and
                I&apos;ve been diving deep into AI agents, data workflows, and
                cloud-native engineering to build smarter, faster, more reliable
                products. Currently building{' '}
                <a
                  href="https://dicta.nitin.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dicta
                </a>
                .
              </p>
              <p className="text-secondary mt-4">
                When I&apos;m not debugging production at 2 AM, I like football,
                playing games, and travelling. I keep my code clean, my systems
                fast, and my weekends screen-free.
              </p>
            </section>

            <div className="py-8">
              <Work />
            </div>

            <section className="py-8" aria-labelledby="inspiration-heading">
              <h2 id="inspiration-heading" className="sr-only">
                Inspiration
              </h2>
              <BrucePingPong />
            </section>

            <p className="text-sm text-neutral-400 dark:text-neutral-500 py-6">
              Like terminals? Try{' '}
              <code className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-1.5 py-0.5 rounded text-xs">
                npx nitintf
              </code>
            </p>

            <Footer />
          </div>
        </article>
      </div>
    </main>
  );
}
