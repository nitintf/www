import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'
import { allNotes } from 'contentlayer/generated'
import NodeAnimate from '@/components/animation/node'
import { NoteItem } from '@/components/note'

export const metadata: Metadata = generateMeta({
	title: 'Notes' + ' — Nitin Panwar',
	description: 'Diving into Dev: Thoughts on code, design, and more.',
})

export default async function NotesPage() {
	const notes = allNotes.map((note) => note)

	return (
		<div className='relative container w-full h-full mb-xl'>
			<NodeAnimate>
				<h2 className='pt-32 text-center text-h2'>Notes</h2>
			</NodeAnimate>
			<NodeAnimate delay={0.2} className='relative max-w-3xl m-auto'>
				<p className='text-center text-body text-secondary'>
					Diving into Dev: Thoughts on code, design and more.
				</p>
			</NodeAnimate>

			<section className='px-xxs md:px-l pb-l'>
				<div className='max-w-4xl grid grid-cols-1 grid-rows-[auto] gap-6 mt-l mx-auto'>
					{allNotes.map((note, index) => {
						return (
							<NodeAnimate delay={index * 0.2 + 0.4} key={note._id}>
								<NoteItem note={note} />
							</NodeAnimate>
						)
					})}
				</div>
			</section>
		</div>
	)
}
