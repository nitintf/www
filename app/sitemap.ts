import projects from '@/data/projects'

export default async function sitemap() {
	const projectsRoutes = projects.map((project) => ({
		url: `https://nitinp.dev/work/${project.slug}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	const routes = ['', '/about', '/codelabs', '/notes'].map((route) => ({
		url: `https://nitinp.dev${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...projectsRoutes]
}
