import process from 'process'

describe('GET /', () => {
  it('should return message and current uptime', async () => {
    const spy = jest.spyOn(process, 'uptime')
    spy.mockReturnValue(500)
    const response = await global.request.get('/')
    expect(response.type).toEqual('application/json')
    expect(response.body).toEqual({
      message: 'Up and running',
      uptime: 500
    })
  })
})