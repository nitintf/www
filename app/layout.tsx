import '../styles/globals.css'
import '../styles/prose.css'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils/cn'
import { primary, secondary } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
					'bg-background text-foreground text-[14px] font-secondary'
				)}>
				<Providers>{children}</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
