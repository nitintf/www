import NoteWrapper from '@/components/animation/animation-wrapper'

interface Props {
	params: { slug: string[] }
}

export default function Page({ params }: Props) {
	return (
		<NoteWrapper backTo='/notes'>
			<h1>Page</h1>
		</NoteWrapper>
	)
}
