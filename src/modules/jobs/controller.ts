import { RequestHandler, Response } from 'express'
import { JobsService } from './service'

export type JobsController = {
  get: RequestHandler
}

const filterActive = (job: Job) => job.is_active
const mapLocation = (job: Job) => ({ ...job, location: job.location || 'remoto' })

const get: RequestHandler = async (_, res, next) => {
  const svc = JobsService()
  const { jobs } = await svc.get()

  res.locals.status = 200
  res.locals.data = jobs
    .filter(filterActive)
    .map(mapLocation)

  next()
}

export const JobsController: JobsController = { get }