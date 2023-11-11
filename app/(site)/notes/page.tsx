import { generateMeta } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = generateMeta({
	title: 'Projects',
})

export default async function ProjectPage() {
	return <div></div>
}
