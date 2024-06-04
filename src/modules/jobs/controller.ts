import { RequestHandler } from 'express'

export type JobsController = {
  get: RequestHandler
}

const get: RequestHandler = (_, res) => {
  res.json({
    message: 'Jobs',
  })
}

export const JobsController: JobsController = { get }