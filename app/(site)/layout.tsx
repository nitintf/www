import '../globals.css'
import { Providers } from '@/components/providers'
import Navbar from '@/components/atoms/navbar'
import { cn } from '@/lib/utils/cn'
import { moranga, silka } from '@/lib/fonts'
import { AnimateMain } from '@/components/animate'

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
					<AnimateMain>{children}</AnimateMain>
				</Providers>
			</body>
		</html>
	)
}
