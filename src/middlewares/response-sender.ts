import { RequestHandler } from 'express'

export const ResponseSender: RequestHandler = (_, res) => {
  const { status, data, page, perPage, total } = res.locals

  const message: { [key: string]: any } = { status, data }

  if (page)
    message.meta = { page, perPage, total }

  res.status(200)
  res.json(message)
}