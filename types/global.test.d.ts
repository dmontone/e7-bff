import Request from 'supertest'

declare global {
  var request: ReturnType<typeof Request>;
}

export {}