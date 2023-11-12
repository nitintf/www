import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'Notes',
})

export default async function NotesPage() {
	return <div></div>
}
