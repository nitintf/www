import '../globals.css'
import { Providers } from '@/components/providers'
import Navbar from '@/components/atoms/navbar'
import { cn } from '@/lib/utils/cn'
import { moranga, silka } from '@/lib/fonts'
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
					moranga.variable,
					silka.variable,
					'container bg-background text-foreground text-[14px] font-silka'
				)}>
				<Providers>
					<Navbar />
					<main className='relative max-w-[1300px] w-full flex items-center justify-center md:container md:mt-20 mt-10'>
						{children}
					</main>
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
