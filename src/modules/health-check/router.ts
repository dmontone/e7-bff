import { Router } from 'express'
import { HealthCheckController } from './controller'

export const HealthCheckModule = Router()

HealthCheckModule.get('/', HealthCheckController.get)