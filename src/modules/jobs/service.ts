import { get as originGet } from '../../utils'

type Job = {
  title: string
  is_active: boolean
}

const get: () => Promise<{ jobs: Job[] }> = async () => {
  const { data } = await originGet('https://run.mocky.io/v3/c6f61e8e-6395-409b-af7e-c0fcedf40492')
  return data
}
export const JobsService = () => ({ get })