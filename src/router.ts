import { Router } from 'express'
import { HealthCheckModule } from './modules'

export const router = Router()

router.get('/',  HealthCheckModule)