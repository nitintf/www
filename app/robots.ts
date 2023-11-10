import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/admin/',
		},
		sitemap: 'https://nitinp.dev/sitemap.xml',
		host: 'https://nitinp.dev',
	}
}
