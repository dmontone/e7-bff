import { Router } from 'express'
import { JobsController } from './controller'
import { Pagination, ResponseSender } from '../../middlewares'

export const JobsModule = Router()

JobsModule.get('/', JobsController.get, Pagination, ResponseSender)