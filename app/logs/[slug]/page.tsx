import { getLogBySlug, getAllLogSlugs } from '@/lib/logs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { mdxComponents } from '@/components/mdx-components';
import TableOfContents from '@/components/table-of-contents';
import { notFound } from 'next/navigation';
import { blogPostingSchema } from '@/lib/schema';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const log = getLogBySlug(slug);
  if (!log) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';

  return {
    title: log.meta.title,
    description: log.meta.description,
    alternates: {
      canonical: `${siteUrl}/logs/${slug}`,
    },
    openGraph: {
      title: log.meta.title,
      description: log.meta.description,
      type: 'article',
      publishedTime: log.meta.date,
      authors: ['Nitin Panwar'],
      url: `${siteUrl}/logs/${slug}`,
    },
  };
}

export default async function LogPage({ params }: PageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema({
              title: log.meta.title,
              description: log.meta.description,
              date: log.meta.date,
              slug,
            }),
          ),
        }}
      />
      <div className="page-fog-top" />
      <div className="page-fog-bottom" />
      <TableOfContents content={log.content} />
      <main role="main" aria-label={log.meta.title}>
        <div className="w-full max-w-2xl mx-auto px-8 pt-5 pb-32">
          <article>
            <header className="mb-8">
              <h1 className="text-ui-12 font-medium tracking-tight">
                {log.meta.title}
              </h1>
              <time
                className="text-ui-8 text-xs mt-2 block tabular-nums"
                dateTime={log.meta.date}
              >
                {new Date(log.meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </header>

            <div className="mt-8">
              <MDXRemote
                source={log.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [
                        rehypePrettyCode,
                        {
                          theme: 'vesper',
                          keepBackground: false,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
