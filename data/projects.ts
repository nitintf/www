export interface Project {
	cover: string
	title: string
	slug: string
	role: string
	platforms: string[]
	links: { name: string; href: string }[]
	overview: string
	keyFeatures: string[]
	tech: Record<'frontend' | 'backend', string[]>
}

const projects: Project[] = [
	{
		cover: '/images/projects/poly/poly.webp',
		title: 'Poly',
		slug: 'poly',
		role: 'Fullstack Developer',
		platforms: ['web'],
		links: [
			{
				name: 'Github',
				href: 'https://github.com/nitintf/poly-client',
			},
		],
		overview:
			'Poly is a robust project management tool designed to streamline collaboration and enhance efficiency within teams. Drawing inspiration from Jira, Poly goes beyond conventional project management, offering a user-friendly experience for overseeing entire projects.',
		keyFeatures: [
			'Task Management: Poly simplifies task tracking, enabling teams to break down projects into manageable tasks. Assign, prioritize, and monitor progress effortlessly.',

			'Collaborative Workspace: Foster real-time collaboration with a centralized workspace where team members can share ideas, updates, and resources seamlessly.',

			'User-Friendly Interface: With an intuitive and visually appealing interface, Poly ensures that team members can navigate and contribute without a steep learning curve.',
		],
		tech: {
			frontend: ['React', 'GraphQL', 'Apollo', 'Tailwind', 'Vite'],
			backend: ['NestJs', 'PostgreSQL', 'Prisma', 'GraphQL', 'Resend'],
		},
	},
	{
		cover: '/images/projects/task/task.webp',
		title: 'Task Manager',
		slug: 'task-manager',
		role: 'App Developer',
		platforms: ['ios', 'android'],
		links: [
			{
				name: 'Github',
				href: 'https://github.com/nitintf/poly',
			},
		],
		overview:
			'Poly Task Manager is a mobile application designed for both iOS and Android, offering a seamless experience for individuals to efficiently manage tasks, create workspaces, and stay organized. Built with React Native and backed by MobX for state management, Poly Task Manager brings a dynamic and responsive task management solution to your fingertips.',
		keyFeatures: [
			"Poly Task Manager empowers users to manage tasks effortlessly, whether you're on iOS or Android. Create, edit, and mark tasks as complete from the convenience of your mobile device.",
			'Organize your tasks efficiently by creating workspaces. Group tasks based on projects, teams, or any custom category that suits your workflow.',
		],
		tech: {
			frontend: ['React Native', 'Expo', 'MobX'],
			backend: ['Supabase'],
		},
	},
	{
		cover: '/images/projects/zaars/zaars.webp',
		title: 'Zaars',
		slug: 'zaars',
		role: 'Lead Developer',
		platforms: ['web'],
		links: [
			{
				name: 'Live',
				href: 'https://zaars.co',
			},
		],
		overview:
			'Zaars is a vibrant and dynamic multivendor ecommerce platform that celebrates diversity in ethnic fashion. Built on WordPress and powered by PHP, Zaars provides a unique marketplace where individuals can sign up, become sellers, and showcase a stunning array of both new and preused ethnic wears, Zaars is your one-stop destination for all things ethnic and fashionable.',
		keyFeatures: [
			'Zaars transforms the traditional ecommerce experience by allowing individuals to become sellers. This creates a diverse and expansive marketplace for ethnic fashion enthusiasts.',
			'Seamlessly onboard sellers who can sign up, create their stores, and start showcasing their curated collection of ethnic wears.',
			'Keep customers informed and engaged with real-time order tracking. From processing to shipping, customers can monitor their purchases every step of the way.',
			'From secure payment gateways to a user-friendly interface, Zaars includes all the essential features of a modern ecommerce platform.',
			'Zaars takes customization to the next level with its own set of custom plugins. These plugins manage a plethora of features, adding unique functionalities tailored to the specific needs of the platform.',
		],
		tech: {
			frontend: ['Wordpress (CMS), Elementor'],
			backend: ['PHP', 'Bluehost Hosting'],
		},
	},
]

export default projects
