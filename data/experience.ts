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
			'In my tenure as a Software Development Engineer at BITCS, I took the lead in crafting the innovative Raven system—an internal tool dedicated to optimizing issue management within the organization. I ensured its end-to-end functionality, empowering users to seamlessly handle issue incidents for the Operations Team through a streamlined process. The implementation of a robust error handling framework improved system stability, while comprehensive testing protocols resulted in a +75% increase in test coverage, reducing bugs and enhancing software reliability.',
		company: 'BITCS',
		duration: '2022 - Present',
	},
	{
		title: 'Frontend Developer Intern',
		link: 'https://sapioanalytics.com/',
		content:
			'During my stint as a Frontend Developer Intern at Sapio Analytics, I spearheaded the development of an interactive frontend dashboard, offering users insightful analytics and statistics through a visually appealing interface. Collaborating seamlessly with cross-functional teams, including Backend and Database, I ensured data integration and real-time updates to enhance the user experience. The addition of an intuitive map feature using MapBox allowed users to navigate through different states of India, providing region-specific analytics and statistics for a powerful data exploration tool.',
		company: 'Sapio Analytics',
		duration: '2022 - Present',
	},
]
