import { generateMeta } from '@/lib/meta'
import { urlForImage } from '@/lib/sanity'
import { getAllProjects } from '@/queries/projects'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = generateMeta({
	title: 'Projects',
})

export default async function ProjectPage() {
	const projects = await getAllProjects()

	return (
		<div>
			{projects?.map((project) => {
				return (
					<div key={project._id}>
						<Image
							src={urlForImage(project.mainImage).url()}
							alt={project.title}
							width={200}
							height={200}
						/>
					</div>
				)
			})}
		</div>
	)
}
