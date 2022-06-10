import { AxiosAdapter } from './axios-adapter'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosPostResult = {
  status: parseInt(faker.random.numeric()),
  data: { response: 'any_data' }
}
mockedAxios.post.mockResolvedValue(mockedAxiosPostResult)

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { random: 'random' }
})

describe('AxiosAdapter', () => {
  test('Should call axios with the correct PARAMS', async () => {
    const axiosAdapter = new AxiosAdapter()
    const postRequest = mockPostRequest()
    await axiosAdapter.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      postRequest.url,
      postRequest.body
    )
  })
  test('Should return the correct status code and body', async () => {
    const axiosAdapter = new AxiosAdapter()
    const postRequest = mockPostRequest()
    const httpResponse = await axiosAdapter.post(postRequest)
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosPostResult.status,
      body: mockedAxiosPostResult.data
    })
  })
})
