import { allDocuments } from '@/.contentlayer/generated'
import NoteWrapper from '@/components/animation/animation-wrapper'
import { Mdx } from '@/components/mdx'
import { ShareNote } from '@/components/share-note'
import { generateMeta } from '@/lib/meta'
import { formatDate } from '@/lib/utils/date'
import { getNoteLenghtIcon } from '@/lib/utils/note-length'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
	params: { slug: string[] }
}

// export const dynamic = 'force-static'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug[0]

	const note = allDocuments.find((doc) => doc.slug === slug)

	if (!note) {
		return {
			title: '404 — Not Found',
		}
	}

	const {
		title,
		summary: description,
		publishedAt: publishedTime,
		image,
	} = note

	const ogImage = note.image
		? `https://nitinp.dev${image}`
		: `https://nitinp.dev/og?title=${title}`

	return generateMeta({
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://nitinp.dev/note/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	})
}

export default function Page({ params }: Props) {
	const note = allDocuments.find((doc) => doc.slug === params.slug[0])

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
		</NoteWrapper>
	)
}
