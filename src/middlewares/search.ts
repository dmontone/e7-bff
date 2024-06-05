import { RequestHandler } from 'express'

export const Search: RequestHandler = (req, res, next) => {
  const query = req.query.search as string

  if (!query)
    return next()

  const { data } = res.locals
  
  const filteredData = (data as Job[]).filter(item => item.title.indexOf(query) >= 0)

  res.locals.data = filteredData

  next()
}