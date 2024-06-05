import { Router } from 'express'
import { JobsController } from './controller'
import { Pagination, ResponseSender, Search } from '../../middlewares'

export const JobsModule = Router()

const afterControllerMiddlewares = [Search, Pagination, ResponseSender]

JobsModule.get('/', JobsController.get, afterControllerMiddlewares)