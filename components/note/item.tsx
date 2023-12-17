import { Note } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	note: Note
}

export function NoteItem({ note }: Props) {
	return (
		<Link
			className='cursor-pointer overflow-hidden relative'
			href={`/note/${note.slug}`}>
			<div className='p-4 md:p-5 flex justify-between items-center gap-14 h-full bg-highlight rounded-base backdrop-blur-[10px] backdrop-saturate-[1.3] hover:bg-border ease-custom transition-all duration-300'>
				<div className='flex-1 flex flex-col gap-2'>
					<h5 className='text-h5 font-secondary font-[700] relative flex text-secondary'>
						{note.title}
					</h5>
					<p className='text-link'>{note.summary}</p>
				</div>
				<div className='rounded-[50%] w-20 h-20 flex bg-opaque flex items-center justify-center'>
					<figure className='relative m-0'>
						<Image
							src={`/images/notes/${note.image}.webp`}
							alt={note.title}
							width={80}
							height={80}
							className='w-8'
						/>
					</figure>
				</div>
			</div>
		</Link>
	)
}
