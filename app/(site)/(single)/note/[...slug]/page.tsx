import { allNotes } from '@/.contentlayer/generated'
import NoteWrapper from '@/app/_components/animate/wrapper'
import { BackToTop } from '@/app/_components/back-to-top'
import { Mdx } from '@/app/_components/mdx'
import { ShareNote } from '@/app/_components/note/share-note'
import { generateMeta, getOgImage } from '@/lib/meta'
import { formatDate } from '@/lib/utils/date'
import { getNoteLenghtIcon } from '@/lib/utils/note-length'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
	params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug[0]

	const note = allNotes.find((doc) => doc.slug === slug)

	if (!note) {
		return {
			title: '404 — Not Found',
		}
	}

	const { title, summary: description, publishedAt: publishedTime } = note

	const ogImage = getOgImage(title, description, {
		openGraph: {
			type: 'article',
			publishedTime,
			url: `https://nitinp.dev/note/${slug}`,
		},
	})

	return generateMeta({
		title,
		description,
		...ogImage,
	})
}

export const dynamic = 'force-static'

export default function Page({ params }: Props) {
	const note = allNotes.find((doc) => doc.slug === params.slug[0])

	if (!note) {
		notFound()
	}

	const formattedDate = formatDate(note.publishedAt)

	return (
		<NoteWrapper backTo='/notes'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(note.structuredData),
				}}></script>
			<div></div>
			<h2 className='text-h2Display text-center max-w-lg mx-auto'>
				{note.title}
			</h2>
			<div className='flex items-center justify-center mt-m text-link text-secondary gap-[7px]'>
				<span>
					<time title={note.publishedAt} dateTime={note.publishedAt}>
						{formattedDate}
					</time>
				</span>
				<span>•</span>
				<span className='flex items-center gap-[5px]'>
					{getNoteLenghtIcon(note.length)}
					<p>{note.length}</p>
				</span>
			</div>
			<Mdx code={note.body.code} />
			<ShareNote noteSlug={note.slug} />
			<BackToTop />
		</NoteWrapper>
	)
}
