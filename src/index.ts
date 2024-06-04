import express from 'express'
import Monitor from 'express-status-monitor'
import { logger } from './logger'
import { router } from './router'

export const app = express()
const monitor = Monitor({ title: 'e7 bff monitor'  })

app.use(logger)
app.use(monitor)
app.use(router)

export const server = app.listen(0, () => console.info('Server listening on port'))
