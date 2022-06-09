import { faker } from '@faker-js/faker'
import { mockAuthentication } from '@/domain/mocks/mock-authentication'
import { HttpPostClientSpy } from '@/data/mocks/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpResponse } from '@/data/protocols/http/http-post-client'

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

  // Async needed to wait for response of remoteAuthenticationTest
  beforeAll(async () => {
    params = mockAuthentication()
    response = await remoteAuthenticationTest.auth(params)
  })

  test('Should inject correct URL in HttpPostClient', () => {
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should inject correct BODY in HttpPostClient', () => {
    expect(httpPostClientSpy.body).toEqual(params)
  })

  // test('Should throw InvalidCredentialsError if  HttpPostClient returns 401', () => {
  //   expect(response).rejects.toThrow(new InvalidCredentialsError())
  // })
})
