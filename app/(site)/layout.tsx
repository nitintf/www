import '../globals.css'
import { Providers } from '@/components/providers'
import Navbar from '@/components/atoms/navbar'
import { cn } from '@/lib/utils/cn'
import { primary, secondary } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={cn(
					primary.variable,
					secondary.variable,
					'container bg-background text-foreground text-[14px] font-secondary'
				)}>
				<Providers>
					<Navbar />
					<main className='relative w-full h-full'>{children}</main>
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
