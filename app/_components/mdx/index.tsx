import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'mdx/types'
import { CustomLink } from './link'
import { RoundedImage } from './image'

const components: MDXComponents = {
	Image: RoundedImage,
	a: CustomLink,
}

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code)

	return (
		<article className='prose text-secondary text-[1.3em] max-w-[65ch] prose-sky prose-a:text-link prose-headings:text-foreground prose-headings:font-secondary prose-h2:mt-xl prose-h3:mt-l dark:prose-invert mx-auto mt-l'>
			<Component components={components} />
		</article>
	)
}
