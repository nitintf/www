import NodeAnimate from '@/app/_components/animate/node'
import { StarIcon } from '@/app/_components/icons/StarIcon'
import { ExperienceItem } from '@/app/_components/timeline'
import { ExternalLink } from '@/app/_components/external-link'
import { generateMeta, keywords, getOgImage } from '@/lib/meta'
import { allExperiences as experiences } from '@/.contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'About' + ' — Nitin Panwar',
	description: 'Get to know Nitin Panwar, a Software Engineer from India.',
	keywords: [...keywords, 'About'],
	...getOgImage(
		'About',
		'Get to know Nitin Panwar, a Software Engineer from India.'
	),
})

export default function AboutPage() {
	return (
		<div className='relative w-full h-full mb-xl mt-32'>
			<NodeAnimate>
				<h1 className='pt-xl text-secondary'>
					<span className='relative flex justify-center text-foreground'>
						<p className='relative'>
							I&apos;m Nitin.
							<span className='absolute -top-[2rem] -right-[5.5rem] scale-50'>
								<StarIcon />
							</span>
						</p>
					</span>
				</h1>
			</NodeAnimate>

			<NodeAnimate delay={0.2} className='relative container max-w-4xl m-auto'>
				<div className='flex justify-around'>
					<div className=' mt-m'>
						<h2 className='text-h2 leading-[110%] text-secondary text-center'>
							I&apos;m a Software Engineer working remotely from the tech hub of
							India.
						</h2>
						<p className='text-body text-secondary mt-xxs text-center'>
							In my dynamic 2+ years as a software developer, I&apos;ve engaged
							in diverse areas, from coding efficiency to elevating user
							experiences. My journey includes front-end development, software
							architecture, and refining app UI/UX. I take pride in navigating
							various roles in this ever-evolving tech landscape.
						</p>
					</div>
				</div>
			</NodeAnimate>

			<NodeAnimate
				delay={0.6}
				as='section'
				className='container mt-xl md:px-xl'>
				<StarIcon height={38} className='my-l mx-auto' />
				<h3 className='text-h3 my-s'>Experience</h3>
				{experiences.map((exp, index) => {
					return <ExperienceItem key={index} exp={exp} />
				})}
				<div className='flex mt-m'>
					<ExternalLink href='/resume'>View Resume</ExternalLink>
				</div>
			</NodeAnimate>

			<NodeAnimate
				delay={0.8}
				as='section'
				className='max-w-5xl m-auto mt-xl px-l'>
				<p className='text-body leading-[160%] text-secondary'>
					Outside work, my downtime is a mix of pure enjoyment. Whether
					it&apos;s the thrill of a football match, the strategic game of pool,
					or just the laid-back moments hanging out with friends and family,
					each experience adds its own touch to the canvas of my life. These are
					the simple pleasures that keep the rhythm of my days vibrant and
					fulfilling.
				</p>
			</NodeAnimate>
		</div>
	)
}
