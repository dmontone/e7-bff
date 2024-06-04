import { app } from './src'
import Request from 'supertest'

jest.useFakeTimers()

global.request = Request(app)