import { RequestHandler } from 'express'

export type HealthCheckController = {
  get: RequestHandler
}

const get: RequestHandler = (_, res) => {
  res.json({
    message: 'Up and running',
    uptime: process.uptime()
  })
}

export const HealthCheckController: HealthCheckController = { get }