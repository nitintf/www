import Navbar from '@/components/atoms/navbar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<main className='relative w-full h-full'>{children}</main>
		</>
	)
}
