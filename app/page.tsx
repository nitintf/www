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
              Nitin Panwar—Software Engineer
            </h1>
          </header>
          <div className="w-full">
            <section aria-labelledby="about-heading">
              <h2 id="about-heading" className="sr-only">
                About
              </h2>
              <p className="text-secondary mt-4">
                I have 4+ years of experience building scalable web, mobile, and
                backend systems with a focus on system design, performance, and
                user experience. I work across AI agents, data pipelines, and
                cloud-native applications.
              </p>
              <p className="text-secondary mt-4">
                When I&apos;m not shipping features, you&apos;ll find me chasing
                a football, trekking up mountains, or planning my next escape
                into the hills. I like my code clean, my systems fast, and my
                weekends above the clouds.
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

            <Footer />
          </div>
        </article>
      </div>
    </main>
  );
}
