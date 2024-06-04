import express from 'express'
import { router } from './router'
import Monitor from 'express-status-monitor'

export const app = express()
const monitor = Monitor()

app.use(router)
app.use(monitor)

app.listen(3000, () => console.log('listening on port 3000'))