import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const SITE_URL = 'https://nitin.sh';
const DEFAULT_AUTHOR_NAME = 'Nitin Panwar';
const PUBLISHER_NAME = 'Nitin Panwar';
const PUBLISHER_LOGO_URL = `${SITE_URL}/logo.png`;

export const Writing = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    keywords: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath },
    url: {
      type: 'string',
      resolve: (doc) => `/writing/${doc._raw.flattenedPath}`,
    },
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.date,
        description: doc.summary,
        keywords: doc.keywords,
        url: `${SITE_URL}/writing/${doc._raw.flattenedPath}`,
        author: {
          '@type': 'Person',
          name: DEFAULT_AUTHOR_NAME,
        },
        publisher: {
          '@type': 'Organization',
          name: PUBLISHER_NAME,
          logo: {
            '@type': 'ImageObject',
            url: PUBLISHER_LOGO_URL,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/writing/${doc._raw.flattenedPath}`,
        },
        wordCount: doc.body.raw.split(/\s+/).length,
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'writings',
  documentTypes: [Writing],
});
