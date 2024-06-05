import { RequestHandler } from 'express'

export const ResponseSender: RequestHandler = (_, res) => {
  const { status, data, page, perPage, total } = res.locals

  const message: { [key: string]: any } = { status, data, meta: { total } }

  if (page)
    message.meta = { page, perPage }

  res.status(200)
  res.json(message)
}