import { fetchSanity } from '@/lib/sanity/fetch'
import { Project } from '@/lib/sanity/schema/project'
import { groq } from 'next-sanity'

type AllProjects = Pick<Project, '_id' | 'mainImage' | 'title'>

export const getAllProjects = async (): Promise<AllProjects[]> => {
	const query = groq`
    *[_type == "project"] {
      _id,
      title,
      mainImage
    }
  `

	return fetchSanity(query)
}
