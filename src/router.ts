import { Router } from 'express'
import { HealthCheckModule, JobsModule } from './modules'

export const router = Router()

router.use('/',       HealthCheckModule)
router.use('/jobs',   JobsModule)

