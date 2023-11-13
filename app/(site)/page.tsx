import WorkCard from '@/components/atoms/work-card'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'
import projects from '@/data/projects'
import NodeAnimate from '@/components/animation/node'

export const metadata: Metadata = generateMeta()

export default function Home() {
	return (
		<div className='relative container w-full h-full mb-xl'>
			<NodeAnimate>
				<h1 className='pt-32 text-secondary'>
					<span className='relative flex justify-center text-foreground'>
						Hi. I&apos;m Nitin.
						{/* <figure className='absolute -top-[2rem] right-[14rem]'>
						<StarIcon />
					</figure> */}
					</span>
					<span className='flex justify-center'>A Developer.</span>
				</h1>
			</NodeAnimate>
			<NodeAnimate delay={0.2} className='relative max-w-3xl m-auto px-6'>
				<p className='text-center text-body text-secondary'>
					I love building software that&apos;s functional, user-friendly,
					scalable, and ensures a seamless experience for end-users.
				</p>
			</NodeAnimate>
			<NodeAnimate
				delay={0.4}
				as='section'
				className='flex gap-6 md:mt-l mt-xl px-3 md:px-7'>
				<div className='max-w-content flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-10 md:gap-y-20 mx-auto'>
					{projects.map((project) => {
						return (
							<WorkCard
								key={project.title}
								to={project.slug}
								src={project.cover}
								alt={project.title}
							/>
						)
					})}
				</div>
			</NodeAnimate>
		</div>
	)
}
