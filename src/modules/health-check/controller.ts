import { RequestHandler } from 'express'

export type HealthCheckController = {
  get: RequestHandler
}

export const HealthCheckController: HealthCheckController = {
  get: (req, res) => {
    res.json({
      message: 'Up and running',
      uptime: process.uptime()
    })
  }
}