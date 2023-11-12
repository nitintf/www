import './globals.css'
import { Providers } from '@/components/providers'
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
				<Providers>{children}</Providers>
				<Analytics />
			</body>
		</html>
	)
}
