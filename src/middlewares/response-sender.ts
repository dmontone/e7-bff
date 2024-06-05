import { RequestHandler } from 'express'

export const ResponseSender: RequestHandler = (_, res) => {
  const { status, data, meta } = res.locals

  const message = { status, data, meta }

  res.status(200)
  res.json(message)
}