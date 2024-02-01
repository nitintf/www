'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ReactLenis root>
			<ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
		</ReactLenis>
	)
}
