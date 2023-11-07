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
	},
	twitter: {
		creator: twitter,
		card: 'summary_large_image',
		site,
		title,
	},
	icons: {
		icon: '/images/logo_gradient.webp',
		username: 'nitintf',
	},
}

export const generateMeta = (meta?: Metadata) => ({ ...seo, ...meta })
