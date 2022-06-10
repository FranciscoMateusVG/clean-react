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
import { UnexpectedError } from '../../../domain/erros/unexpected-error'

describe('RemoteAuthentication injections', () => {
  // Creates remoteAuthentication with a spy
  const url = faker.internet.url()
  const httpPostClientSpy = new HttpPostClientSpy()
  const remoteAuthenticationTest = new RemoteAuthentication(
    url,
    httpPostClientSpy
  )
  let params: AuthenticationParams
  let response: HttpResponse

  beforeEach(async () => {
    params = mockAuthentication()
    response = await remoteAuthenticationTest.auth(params)
  })

  test('Should inject correct URL in HttpPostClient', () => {
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should inject correct BODY in HttpPostClient', () => {
    expect(httpPostClientSpy.body).toEqual(params)
  })
})

describe('RemoteAuthentication errors', () => {
  // Creates remoteAuthentication with a spy
  const url = faker.internet.url()
  const httpPostClientSpy = new HttpPostClientSpy()
  const remoteAuthenticationTest = new RemoteAuthentication(
    url,
    httpPostClientSpy
  )
  let params: AuthenticationParams

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

  test('Should throw UnexpecetedError if  HttpPostClient returns status code diferent from 200 or 401', async () => {
    params = mockAuthentication()
    httpPostClientSpy.response = {
      statusCode: 500
    }
    const action = async (): Promise<HttpResponse> => {
      return await remoteAuthenticationTest.auth(params)
    }
    await expect(action()).rejects.toThrow(new UnexpectedError())
  })
})
