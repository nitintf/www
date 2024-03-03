import { defineDocumentType } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
	name: 'Project',
	filePathPattern: 'content/projects/*.json', // Adjust the path pattern as needed
	contentType: 'data',
	fields: {
		cover: {
			type: 'string',
			required: true,
		},
		title: {
			type: 'string',
			required: true,
		},
		slug: {
			type: 'string',
			required: true,
		},
		role: {
			type: 'string',
			required: true,
		},
		links: {
			type: 'list',
			of: {
				type: 'json',
				fields: {
					name: { type: 'string' },
					href: { type: 'string' },
				},
			},
		},
		overview: {
			type: 'string',
			required: true,
		},
		content: {
			type: 'list',
			of: { type: 'string' },
		},
	},
}))
