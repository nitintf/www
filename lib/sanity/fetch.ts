import { client } from './client'

export const fetchSanity = (query: string, params?: any) => {
	return client.fetch(query, params, {
		next: {
			revalidate: 30,
		},
	})
}
