import { app } from './src'
import Request from 'supertest'

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: { jobs: [{ title: 'MOCK_JOB' }] }}))
  }))
}))

jest.useFakeTimers()

global.request = Request(app)