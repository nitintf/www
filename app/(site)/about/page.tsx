import NodeAnimate from '@/components/animation/node'
import { StarIcon } from '@/components/icons/StarIcon'
import { ExperienceItem } from '@/components/timeline'
import { ExternalLink } from '@/components/ui/external-link'
import { experiences } from '@/data/experience'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'About' + ' — Nitin Panwar',
})

export default function AboutPage() {
	return (
		<div className='relative w-full h-full mb-xl'>
			<NodeAnimate>
				<h1 className='pt-32 text-secondary'>
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

			<NodeAnimate as='section' delay={0.4} className='max-w-[1800px] m-auto'>
				<div className='flex flex-wrap gap-16 md:gap-y-12 bg-highlight md:rounded-[64px] p-xl md:mx-l mt-xl'>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>01</span>
						<h3 className='text-h3'>Crafting Solutions in Code</h3>
						<p className='mt-xxs text-body text-secondary'>
							I turn ideas into digital reality. From wireframes to prototypes,
							I bring designs to life in the browser. Design tools set the
							stage, but the real magic happens with a link that unites my team.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>02</span>
						<h3 className='text-h3'>Collaborative Coding</h3>
						<p className='mt-xxs text-body text-secondary'>
							I believe in teamwork for great software. I create a collaborative
							space, involving stakeholders in coding. Feedback and iteration
							thrive, ensuring our software meets user needs and business goals
							as we build together.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>03</span>
						<h3 className='text-h3'>Coding for Accessibility</h3>
						<p className='mt-xxs text-body text-secondary'>
							I prioritize accessibility in my coding, aiming to make every
							software inclusive. It&apos;s not just beneficial; it&apos;s the
							right thing to do. Accessible software empowers a broader
							audience, fostering a more inclusive digital landscape.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>04</span>
						<h3 className='text-h3'>Embracing the Agile Mindset</h3>
						<p className='mt-xxs text-body text-secondary'>
							Each code line is an ongoing experiment. Not every approach works,
							but the process of trying and learning is invaluable. Embracing an
							agile mindset ensures continuous improvement, keeping the software
							adaptive and resilient.
						</p>
					</div>
				</div>
			</NodeAnimate>

			<NodeAnimate
				delay={0.6}
				as='section'
				className='container mt-xl md:px-xl'>
				<StarIcon height={38} className='my-l mx-auto' />
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
				className='max-w-2xl m-auto mt-xl mx-m'>
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
