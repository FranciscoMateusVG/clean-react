import { faker } from '@faker-js/faker'
import { mockAuthentication } from '@/domain/mocks/mock-authentication'
import { HttpPostClientSpy } from '@/data/mocks/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import { AuthenticationParams } from '@/domain/usecases/authentication'

describe('RemoteAuthentication', () => {
  let remoteAuthenticationTest: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy,
    url: string,
    params: AuthenticationParams

  beforeEach(async () => {
    url = faker.internet.url()
    httpPostClientSpy = new HttpPostClientSpy()
    remoteAuthenticationTest = new RemoteAuthentication(url, httpPostClientSpy)
    params = mockAuthentication()
    await remoteAuthenticationTest.auth(params)
  })

  test('Should injetct correct URL in HttpPostClient', () => {
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should injetct correct BODY in HttpPostClient', () => {
    expect(httpPostClientSpy.body).toEqual(params)
  })
})
