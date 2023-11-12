import projects from '@/data/projects'
import { notFound } from 'next/navigation'
import ProjectWrapper from '@/components/animation/project'
import { Metadata } from 'next'
import { generateMeta } from '@/lib/meta'

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
			<h2 className='text-h2'>{project.title}</h2>
		</ProjectWrapper>
	)
}
