import { Router } from 'express'
import { JobsController } from './controller'

export const JobsModule = Router()

JobsModule.get('/', JobsController.get)