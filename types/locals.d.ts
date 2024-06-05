declare global {
  namespace Express {
    interface Locals {
      query?: string
      page?: string
      perPage?: string
      total?: number
      data: Job[]
    }
  }
}