export interface Experience {
	title: string
	company: string
	link?: string
	duration?: string
	content: any
}

export const experiences: Array<Experience> = [
	{
		title: 'Software Engineer',
		link: 'https://bitcs.in',
		content:
			'led Raven system creation for streamlined issue management. Ensured end-to-end functionality, improved stability by implementing error handling, and achieved a +75% increase in test coverage for enhanced reliability.',
		company: 'BITCS',
		duration: '2022 - Present',
	},
	{
		title: 'Frontend Developer Intern',
		link: 'https://sapioanalytics.com/',
		content:
			'As a Frontend Developer Intern at Sapio Analytics, led the creation of an interactive dashboard for insightful analytics. Collaborated with cross-functional teams for real-time updates, integrated MapBox for intuitive map features, enhancing the user experience.',
		company: 'Sapio Analytics',
		duration: '2022 - Present',
	},
]
