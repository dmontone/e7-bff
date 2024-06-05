import { JobsService } from './service'

jest.mock('./service')

describe('GET /jobs', () => {
  it('should return message and current uptime', async () => {
    (JobsService as jest.Mock).mockReturnValue({ nope: 1 })
    const response = await global.request.get('/jobs')
    expect(response.type).toEqual('application/json')
    expect(response.body).toEqual({
      data: [
        { title: 'MOCK_JOB' }
      ]
    })
  })
})