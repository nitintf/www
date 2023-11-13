import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'Codelabs' + ' — Nitin Panwar',
})

export default function CodelabsPage() {
	return <div></div>
}
