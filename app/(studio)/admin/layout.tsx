import type { Metadata } from 'next'
import '@/app/globals.css'

export async function generateMetadata(): Promise<Metadata | undefined> {
	return {
		title: 'Studio',
		description: 'CMS',
		icons: {
			icon: '/sanity-studio.ico',
		},
	}
}

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
