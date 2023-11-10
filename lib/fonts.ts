import localFont from 'next/font/local'

export const primary = localFont({
	src: '../public/fonts/acorn.woff',
	variable: '--font-primary',
})

export const secondary = localFont({
	src: [
		{
			path: '../public/fonts/gt.woff',
			weight: '500',
		},
	],
	variable: '--font-secondary',
})
