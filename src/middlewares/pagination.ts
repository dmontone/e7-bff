import { RequestHandler } from 'express'

export const Pagination: RequestHandler = (req, res, next) => {
  const page = req.query.page
  const perPage = req.query.perPage
  
  const { data } = res.locals
  res.locals.total = data.length

  if (!page || isNaN(+page) || !perPage || isNaN(+perPage))
    return next()

  res.locals.page = page
  res.locals.perPage = perPage

  const startIndex = (+page - 1) * +perPage
  const endIndex = startIndex + +perPage
  const paginatedData = data.slice(startIndex, endIndex)

  res.locals.data = paginatedData

  next()
}