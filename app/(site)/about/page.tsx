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
				<div className='flex flex-row justify-around'>
					<figure className='pl-xl hidden md:inline-flex'>
						<Image
							src='/images/character1.png'
							alt='Character'
							width={400}
							height={400}
						/>
					</figure>
					<div className='md:ml-l mt-l'>
						<h2 className='text-h2 leading-[110%] text-secondary text-center md:text-left'>
							I&apos;m a Software Engineer working remotely from the tech hub of
							India.
						</h2>
						<p className='text-body text-secondary mt-xxs text-center md:text-left'>
							Over the past 12+ years, I've worked in various areas of digital
							design, including front-end development, email, marketing, and app
							UI/UX. I'm proud to have worn many hats.
						</p>
					</div>
				</div>
			</NodeAnimate>
		</div>
	)
}
