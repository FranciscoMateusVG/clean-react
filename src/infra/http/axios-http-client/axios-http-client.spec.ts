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
  test('Should call axios with the correct PARAMS', async () => {
    const sut = new AxiosHttpClient()
    const postRequest = mockPostRequest()
    await sut.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      postRequest.url,
      postRequest.body
    )
  })
})
