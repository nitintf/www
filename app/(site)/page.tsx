import { StarIcon } from '@/components/icons/StarIcon'
import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta()

export default function Home() {
	return (
		<div className='relative w-full h-full mb-[100rem]'>
			<h1 className='pt-32 text-secondary'>
				<span className='relative flex justify-center text-foreground'>
					Hi. I&apos;m Nitin.
					{/* <figure className='absolute -top-[2rem] right-[17rem]'>
						<StarIcon />
					</figure> */}
				</span>
				<span className='flex justify-center'>A Developer.</span>
			</h1>
			<div className='relative max-w-3xl m-auto px-6'>
				<p className='text-center text-body text-secondary'>
					I love building software that&apos;s functional, user-friendly,
					scalable, and ensures a seamless experience for end-users.
				</p>
			</div>
		</div>
	)
}
