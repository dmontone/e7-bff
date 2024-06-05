import express from 'express'
import Monitor from 'express-status-monitor'
import { logger } from './logger'
import { router } from './router'

export const app = express()
const monitor = Monitor({ title: 'e7 bff monitor'  })

app.use(logger)
app.use(monitor)
app.use(router)

export const server = process.env.NODE_ENV !== 'test' && app.listen(3000, () => console.info('Server listening on port 3000'))
