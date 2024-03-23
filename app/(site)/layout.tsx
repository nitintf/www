import Navbar from '@/app/_components/navbar'

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
