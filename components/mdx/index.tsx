import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'mdx/types'

const CustomLink = (props) => {
	const href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

function RoundedImage(props) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />
}

const components: MDXComponents = {
	Image: RoundedImage,
	a: CustomLink,
}

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code)

	return (
		<article className='prose text-secondary text-[1.3em] max-w-[65ch] prose-sky prose-a:text-link prose-headings:text-foreground prose-headings:font-secondary prose-headings:mt-xl dark:prose-invert mx-auto mt-l'>
			<Component components={components} />
		</article>
	)
}
