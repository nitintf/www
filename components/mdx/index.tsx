import * as React from 'react'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'mdx/types'

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
	props
) => {
	const href = props.href

	if (href?.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href?.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const RoundedImage: React.FC<ImageProps> = (props) => {
	const { alt, ...rest } = props
	return <Image alt={props.alt} className='rounded-lg' {...rest} />
}

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
