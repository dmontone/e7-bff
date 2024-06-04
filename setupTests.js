import { app, server } from './src'
import Request from 'supertest'

jest.useFakeTimers()

global.request = Request(app)

afterAll(async () => {
  await server.close()
})