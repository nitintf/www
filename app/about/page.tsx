import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({ title: 'About' })

export default function AboutPage() {
	return <div></div>
}
