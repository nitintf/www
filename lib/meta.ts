import type { Metadata } from 'next'
import { IsDev } from './env'

const title = `Nitin Panwar`
const description = `Fullstack Software engineer & Designer from India`
const domain = `nitinp.dev`
const twitter = `@nitinpanwarr`
const meta = `Software Engineer`
const site = `https://${domain}`
const ogUrl = IsDev ? 'http://localhost:3000' : 'https://nitinp.dev'
export const keywords = [
	'Nitin',
	'Nitin Panwar',
	'Software Engineer',
	'Fullstack Developer',
]

export const getOgImage = (
	title: string,
	desc: string,
	meta?: Pick<Metadata, 'openGraph'>
) => {
	const ogImg = `${ogUrl}/og?title=${title}&desc=${desc}`

	return {
		openGraph: {
			title,
			type: 'website',
			url: site,
			siteName: title,
			description: desc,
			images: [
				{
					url: ogImg,
					width: 1920,
					height: 1080,
					alt: title,
				},
			],
			locale: 'en-US',
			...meta?.openGraph,
		},
		twitter: {
			creator: twitter,
			card: 'summary_large_image',
			site: twitter,
			title,
			images: [
				{
					url: ogImg,
					alt: title,
				},
			],
		},
	}
}

export const seo: Metadata = {
	title: title + ' — ' + meta,
	description,
	...getOgImage(title + ' — ' + meta, description),
	metadataBase: new URL('https://nitinp.dev'),
	icons: {
		icon: '/favicon.ico',
	},
	keywords,
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

export const generateMeta = (meta?: Metadata) => ({
	...seo,
	...meta,
})
