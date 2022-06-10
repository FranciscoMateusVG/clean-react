import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { random: 'random' }
})

describe('AxiosHttpClient', () => {
  test('Should call axios with the correct URL', async () => {
    const sut = new AxiosHttpClient()
    const portRequest = mockPostRequest()
    await sut.post(portRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(portRequest.url)
  })

  test('Should call axios with the correct BODY', async () => {
    const sut = new AxiosHttpClient()
    const portRequest = mockPostRequest()
    await sut.post(portRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(portRequest.url)
  })
})
