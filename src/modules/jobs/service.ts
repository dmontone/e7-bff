import { get } from '../../utils'

export const JobsService = () => ({
  get: async () => {
    const response = await get('https://run.mocky.io/v3/c6f61e8e-6395-409b-af7e-c0fcedf40492')
    return response.data.jobs
  }
})