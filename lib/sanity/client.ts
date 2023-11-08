import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/lib/env'

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
})
