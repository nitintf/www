import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// Models
import { Note } from './models/note'
import { Project } from './models/project'
import { Experience } from './models/experience'

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Note, Project, Experience],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'nord',
					onVisitLine(node: any) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine(node: any) {
						node.properties.className = ['line--highlighted']
					},
					onVisitHighlightedChars(node: any) {
						node.properties.className = ['word--highlighted']
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
		],
	},
})
