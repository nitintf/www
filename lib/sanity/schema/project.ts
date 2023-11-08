import { Image, Reference, SchemaTypeDefinition } from 'sanity'

export interface Project {
	_id: string
	title: string
	slug: {
		current: string
	}
	mainImage: Image
	role: string
	gitHubUrl: string
	liveSiteUrl: string
	tags: Reference
}

export const ProjectSchema: SchemaTypeDefinition = {
	name: 'project',
	type: 'document',
	title: 'Projects',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Project Title',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input: string) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
		},
		{
			name: 'mainImage',
			type: 'image',
			title: 'Main Project Image',
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
		},
		{
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'links',
					fields: [
						{
							name: 'title',
							type: 'string',
							title: 'Link Title',
						},
						{
							name: 'url',
							type: 'url',
							title: 'URL',
						},
					],
				},
			],
		},
	],
}
