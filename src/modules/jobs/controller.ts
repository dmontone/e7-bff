import { RequestHandler, Response } from 'express'
import { JobsService } from './service'

export type JobsController = {
  get: RequestHandler
}

const get: RequestHandler = async (_, res, next) => {
  const svc = JobsService()
  const { jobs } = await svc.get()

  res.locals.status = 200
  res.locals.data = jobs

  next()
}

export const JobsController: JobsController = { get }