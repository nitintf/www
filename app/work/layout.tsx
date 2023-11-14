export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div className='container max-w-content'>{children}</div>
}
