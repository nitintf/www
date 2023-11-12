export interface Project {
	cover: string
	title: string
	slug: string
}

const projects: Project[] = [
	{
		cover: '/images/projects/poly/poly.webp',
		title: 'Poly',
		slug: 'poly',
	},
	{
		cover: '/images/projects/task/task.webp',
		title: 'Task Manager',
		slug: 'task-manager',
	},
	{
		cover: '/images/projects/zaars/zaars.webp',
		title: 'Zaars',
		slug: 'zaars',
	},
]

export default projects
