import NodeAnimate from '@/components/animation/node'
import { StarIcon } from '@/components/icons/StarIcon'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'
import Image from 'next/image'

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

			<NodeAnimate delay={0.2} className='relative max-w-5xl m-auto'>
				<div className='flex justify-around'>
					<div className='md:ml-l mt-m'>
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
		</div>
	)
}
