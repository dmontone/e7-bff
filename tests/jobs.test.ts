describe('GET /jobs', () => {
  it('should return message and current uptime', async () => {
    const response = await global.request.get('/jobs')
    expect(response.type).toEqual('application/json')
    expect(response.body).toEqual({
      message: 'Jobs'
    })
  })
})