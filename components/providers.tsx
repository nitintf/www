'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	useLenis()

	return (
		<ReactLenis root>
			<ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
		</ReactLenis>
	)
}
