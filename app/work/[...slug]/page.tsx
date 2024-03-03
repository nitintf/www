import { notFound } from 'next/navigation'
import AnimationWrapper from '@/components/animation/animation-wrapper'
import { Metadata } from 'next'
import { generateMeta, getOgImage, keywords } from '@/lib/meta'
import { allProjects as projects } from 'contentlayer/generated'
import Image from 'next/image'
import { ExternalLink } from '@/components/ui/external-link'

interface Props {
	params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug[0]

	const project = projects.find((project) => project.slug === slug)

	if (!project) {
		return {
			title: '404 — Not Found',
		}
	}

	const { title, overview } = project

	const ogImage = getOgImage(title, overview, {
		openGraph: {
			type: 'article',
			url: `https://nitinp.dev/note/${slug}`,
		},
	})

	return generateMeta({
		title: title + ' — Nitin Panwar',
		description: overview,
		keywords: [...keywords, 'Projects', 'Work', title],
		...ogImage,
	})
}

export default function Page({ params }: Props) {
	const project = projects.find((project) => project.slug === params.slug[0])

	if (!project) {
		notFound()
	}

	return (
		<AnimationWrapper backTo='/'>
			<section className='max-w-5xl mx-auto mt-l'>
				<div>
					<h2 className='text-h2'>{project.title}</h2>
					<div className='flex flex-col md:flex-row gap-l mt-xs'>
						<div className='flex-1'>
							<h3 className='text-h4 font-secondary'>{project.overview}</h3>
							<div className='flex gap-3 mt-xs'>
								{project.links?.map((link) => (
									<ExternalLink key={link.name} href={link.href}>
										{link.name}
									</ExternalLink>
								))}
							</div>
						</div>
						<div className='flex-1'>
							{project.content?.map((content, index) => (
								<p key={index} className='text-content text-secondary mb-xs'>
									{content}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>
			<div className='max-w-5xl mx-auto mt-m'>
				<div className='flex items-center w-full justify-center'>
					<Image
						src={project.cover}
						alt='Main Image'
						width={1000}
						height={620}
						priority
						quality={50}
						className='rounded-3xl mt-auto'
					/>
				</div>
			</div>
		</AnimationWrapper>
	)
}
