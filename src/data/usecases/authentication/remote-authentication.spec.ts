import { faker } from '@faker-js/faker'
import { mockAuthentication } from '@/domain/mocks/mock-authentication'
import { HttpPostClientSpy } from '@/data/mocks/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import {
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-post-client'
import { InvalidCredentialsError } from '@/domain/erros/invalid-credentials-error'

describe('RemoteAuthentication', () => {
  // Creates remoteAuthentication with a spy
  const url = faker.internet.url()
  const httpPostClientSpy = new HttpPostClientSpy()
  const remoteAuthenticationTest = new RemoteAuthentication(
    url,
    httpPostClientSpy
  )
  let params: AuthenticationParams
  let response: HttpResponse

  test('Should inject correct URL in HttpPostClient', async () => {
    params = mockAuthentication()
    response = await remoteAuthenticationTest.auth(params)
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should inject correct BODY in HttpPostClient', async () => {
    params = mockAuthentication()
    response = await remoteAuthenticationTest.auth(params)
    expect(httpPostClientSpy.body).toEqual(params)
  })

  test('Should throw InvalidCredentialsError if  HttpPostClient returns 401', async () => {
    params = mockAuthentication()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const action = async (): Promise<HttpResponse> => {
      return await remoteAuthenticationTest.auth(params)
    }
    await expect(action()).rejects.toThrow(new InvalidCredentialsError())
  })
})
