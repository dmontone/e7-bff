import { RequestHandler, Response } from 'express'
import { JobsService } from './service'

export type JobsController = {
  get: RequestHandler
}

const get: RequestHandler = async (_, res, next) => {
  const svc = JobsService()
  const response = await svc.get()

  res.locals.status = 200
  res.locals.data = response

  next()
}

export const JobsController: JobsController = { get }