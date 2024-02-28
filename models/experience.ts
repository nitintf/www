import { defineDocumentType } from 'contentlayer/source-files'

export const Experience = defineDocumentType(() => ({
	name: 'Experience',
	filePathPattern: 'data/experiences/*.json',
	bodyType: 'data',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		company: {
			type: 'string',
			required: true,
		},
		link: {
			type: 'string',
		},
		content: {
			type: 'string',
			required: true,
		},
		location: {
			type: 'string',
		},
		startDate: {
			type: 'date',
			required: true,
		},
		endDate: {
			type: 'date',
		},
		skillsUsed: {
			type: 'list',
			of: {
				type: 'string',
			},
		},
	},
}))
