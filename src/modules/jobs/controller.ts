import { RequestHandler } from 'express'
import { JobsService } from './service'

export type JobsController = {
  get: RequestHandler
}

const get: RequestHandler = async (_, res) => {
  const svc = JobsService()
  const response = await svc.get()

  res.json({
    data: response,
  })
}

export const JobsController: JobsController = { get }