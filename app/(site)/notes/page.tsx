import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'Notes' + ' — Nitin Panwar',
})

export default async function NotesPage() {
	return <div></div>
}
