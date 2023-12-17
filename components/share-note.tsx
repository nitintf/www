'use client'

import HeartIcon from './icons/HeartIcon'
import LinkIcon from './icons/LinkIcon'
import LinkedinIcon from './icons/LinkedIcon'
import TwitterIcon from './icons/TwitterIcon'

interface ShareNoteProps {
	noteSlug: string
}

export const ShareNote: React.FC<ShareNoteProps> = () => {
	const copyCurrentLink = () => {
		const currentLink = window.location.href
		navigator.clipboard.writeText(currentLink)
	}

	return (
		<div className='flex sm:flex-row flex-col items-center justify-between sm:px-l px-s py-m shadow-link  max-w-[95ch] mx-auto mt-xl rounded-xl mb-xl'>
			<div className='text-secondary text-link flex gap-2 items-center'>
				<HeartIcon />
				<p>Enjoy this note? Feel free to share!</p>
			</div>
			<div className='flex gap-2 items-center sm:mt-0 mt-m'>
				<button
					onClick={copyCurrentLink}
					className='cursor-pointer flex items-center justify-center w-16 h-16 border-0  rounded-xl bg-border hover:bg-highlight'>
					<LinkIcon />
				</button>
				<a
					href={`https://twitter.com/share?url=${window.location.href}`}
					target='_blank'
					rel='noopener noreferrer'
					className='cursor-pointer flex items-center justify-center w-16 h-16 border-0  rounded-xl bg-border  hover:bg-highlight'>
					<TwitterIcon />
				</a>
				<a
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
					target='_blank'
					rel='noopener noreferrer'
					className='cursor-pointer flex items-center justify-center w-16 h-16 border-0  rounded-xl bg-border  hover:bg-highlight'>
					<LinkedinIcon />
				</a>
			</div>
		</div>
	)
}
