import { Router } from 'express'
import { JobsController } from './controller'
import { ResponseSender } from '../../middlewares/response-sender'

export const JobsModule = Router()

JobsModule.get('/', JobsController.get, ResponseSender)