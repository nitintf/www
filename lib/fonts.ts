import localFont from 'next/font/local'

export const moranga = localFont({
	src: '../public/fonts/Moranga-Bold.woff',
	variable: '--font-moranga',
	weight: 'bold',
})

export const silka = localFont({
	src: [
		{
			path: '../public/fonts/Silka-Medium.woff',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Silka-Regular.woff',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-silka',
})
