import type { Metadata } from 'next'

const title = `Nitin Panwar`
const description = `Fullstack Software engineer & Designer from India`
const domain = `nitinp.dev`
const twitter = `@nitinpanwarr`
const meta = `Software Engineer`
const site = `https://${domain}`

export const seo: Metadata = {
	title: title + ' — ' + meta,
	description,
	openGraph: {
		title,
		type: 'website',
		url: site,
		siteName: title,
		description,
		images: [
			{
				url: `https://nitinp.dev/og?title=${title}-${meta}`,
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
	},
	twitter: {
		creator: twitter,
		card: 'summary_large_image',
		site,
		title,
		images: [`https://nitinp.dev/og?title=${title}-${meta}`],
	},
	metadataBase: new URL('https://nitinp.dev'),
	icons: {
		icon: '/favicon.ico',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const generateMeta = (meta?: Metadata) => ({ ...seo, ...meta })
