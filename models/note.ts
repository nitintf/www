import { Document } from 'contentlayer/core'
import { ComputedFields, defineDocumentType } from 'contentlayer/source-files'

const computedFields: ComputedFields<'Note'> = {
	slug: {
		type: 'string',
		resolve: (doc: Document) => {
			const notesPrefix = 'notes/'
			let pathWithoutPrefix = doc._raw.flattenedPath.replace(notesPrefix, '')
			let pathParts = pathWithoutPrefix.split('/')
			pathParts.pop() // use .shift() to remove the first "note-name"
			pathWithoutPrefix = pathParts.join('/')
			return pathWithoutPrefix
		},
	},
	structuredData: {
		type: 'json',
		resolve: (doc: Document) => ({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: doc.title,
			datePublished: doc.publishedAt,
			dateModified: doc.publishedAt,
			description: doc.summary,
			image: doc.image
				? `https://nitinp.dev/${doc.image}`
				: `https://nitinp.dev/og?title=${doc.title}`,
			url: `https://nitinp.dev/note/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Nitin Panwar',
			},
		}),
	},
}

export const Note = defineDocumentType(() => ({
	name: 'Note',
	filePathPattern: `content/notes/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
			required: true,
		},
		length: {
			options: ['Medium', 'Long', 'Short'],
			default: 'Medium',
			type: 'enum',
		},
	},
	computedFields,
}))
