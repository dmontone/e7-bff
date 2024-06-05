import { RequestHandler } from 'express'

export const Pagination: RequestHandler = (req, res, next) => {
  const page = req.query.page
  const perPage = req.query.perPage

  if (!page || isNaN(+page) || !perPage || isNaN(+perPage))
    return next()

  const { data } = res.locals
  res.locals.page = page
  res.locals.perPage = perPage
  res.locals.total = data.length

  const startIndex = (+page - 1) * +perPage
  const endIndex = startIndex + +perPage
  const paginatedData = data.slice(startIndex, endIndex)

  res.locals.data = paginatedData

  next()
}