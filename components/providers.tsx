'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
}
