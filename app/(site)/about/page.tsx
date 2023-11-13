import NodeAnimate from '@/components/animation/node'
import { StarIcon } from '@/components/icons/StarIcon'
import { ExperienceItem } from '@/components/timeline'
import { ExternalLink } from '@/components/ui/external-link'
import { experiences } from '@/data/experience'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({ title: 'About' })

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

			<NodeAnimate as='section' delay={0.4}>
				<div className='flex flex-wrap gap-16 md:gap-y-32 bg-highlight md:rounded-[64px] p-xl md:mx-l mt-xl'>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>01</span>
						<h3 className='text-h3'>Crafting Solutions in Code</h3>
						<p className='mt-xxs text-body text-secondary'>
							I specialize in translating ideas into tangible digital solutions.
							Whether it&apos;s sketching wireframes or developing prototypes, I
							believe in the power of bringing designs to life within the
							browser. Design tools set the stage, but the true realization
							happens through a link that my team can unite around.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>02</span>
						<h3 className='text-h3'>Collaborative Coding</h3>
						<p className='mt-xxs text-body text-secondary'>
							Recognizing that good software is a result of collaborative
							efforts, I foster a shared space for development. I actively
							involve stakeholders in the coding process, creating an
							environment that thrives on feedback and iteration. Building
							together ensures the software meets both user needs and business
							goals.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>03</span>
						<h3 className='text-h3'>Coding for Accessibility</h3>
						<p className='mt-xxs text-body text-secondary'>
							In my coding endeavors, I prioritize accessibility as a
							fundamental principle. I strive to make every software product
							accessible to all, driven by the belief that inclusivity is not
							just beneficial; it&apos;s the right thing to do. Accessible
							software empowers a wider audience and contributes to a more
							inclusive digital landscape.
						</p>
					</div>
					<div className='flex flex-col w-full md:w-[46%]'>
						<span className='opacity-50 mb-xxs text-h2 font-primary'>04</span>
						<h3 className='text-h3'>Embracing the Agile Mindset</h3>
						<p className='mt-xxs text-body text-secondary'>
							Every line of code I write is a part of an ongoing experiment. I
							understand that not every approach will yield the desired outcome,
							but the process of trying and learning is invaluable. Embracing an
							agile mindset allows for continuous improvement, ensuring that the
							software I develop remains adaptive and resilient.
						</p>
					</div>
				</div>
			</NodeAnimate>

			<NodeAnimate delay={0.6} as='section' className='container mt-xl md:px-l'>
				<StarIcon height={38} className='my-l' />
				{experiences.map((exp, index) => {
					return <ExperienceItem key={index} exp={exp} />
				})}
				<div className='flex mt-m'>
					<ExternalLink href='/resume'>View Resume</ExternalLink>
				</div>
			</NodeAnimate>
		</div>
	)
}
