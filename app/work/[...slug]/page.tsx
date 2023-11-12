import projects from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectWrapper from '@/components/animation/project'
import { Metadata } from 'next'
import { generateMeta } from '@/lib/meta'
import Image from 'next/image'

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

	return generateMeta({ title: project.title + ' — Nitin Panwar' })
}

export default function Page({ params }: Props) {
	const project = projects.find((project) => project.slug === params.slug[0])

	if (!project) {
		notFound()
	}

	return (
		<ProjectWrapper>
			<h1 className='text-center my-0'>{project.title}.</h1>
			<div className='mt-xl md:mt-l flex flex-col md:flex-row items-center justify-center text-h6 gap-m md:gap-xl'>
				<div>
					<p className='text-body text-secondary'>
						{project.role} • {project.platforms.join(' / ')} •{' '}
						{project.links?.map((link, index) => (
							<a
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								key={link.name}
								className='underline'>
								{link.name} {index + 1 !== project.links?.length ? ',' : ''}
							</a>
						))}
					</p>
				</div>
			</div>
			<div>
				<p className='text-body mt-l text-secondary'>{project.overview}</p>
			</div>

			<div className='mt-l flex items-center w-full justify-center'>
				<Image
					src={project.cover}
					alt='Main Image'
					width={1000}
					height={220}
					className='rounded-3xl mt-auto'
				/>
			</div>

			<div className='mt-xl flex md:flex-row flex-col text-h6 gap-5'>
				<div className='w-[50%]'>
					<h6 className='mb-xxs'>Frontend</h6>
					<p className='text-secondary'>{project.tech?.frontend.join(', ')}</p>
				</div>
				<div className='w-[50%]'>
					<h6 className='mb-xxs'>Backend</h6>
					<p className='text-secondary'>{project.tech?.backend.join(', ')}</p>
				</div>
			</div>

			<div className='mt-l'>
				<h3 className='text-h3'>Key Features</h3>
				<ul className='text-secondary text-body list-disc px-xs mt-xxs gap-4'>
					{project.keyFeatures?.map((feature, index) => (
						<li className='mb-xxs' key={index}>
							{feature}
						</li>
					))}
				</ul>
			</div>
		</ProjectWrapper>
	)
}
