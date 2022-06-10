import { mockAuthentication } from '@/domain/mocks/mock-authentication'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import {
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-post-client'
import { InvalidCredentialsError } from '@/domain/erros/invalid-credentials-error'
import { UnexpectedError } from '../../../domain/erros/unexpected-error'
import { AccountModel } from '@/domain/models/account-model'
import { mockRemoteAuthentication } from '@/data/mocks/remote-authentication'

const { url, httpPostClientSpy, remoteAuthenticationTest } =
  mockRemoteAuthentication()

describe('RemoteAuthentication injections', () => {
  let response: HttpResponse<AccountModel>
  let params: AuthenticationParams
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
})

describe('RemoteAuthentication errors', () => {
  let action: () => Promise<HttpResponse<AccountModel>>
  let params: AuthenticationParams
  beforeEach(() => {
    params = mockAuthentication()
    action = async (): Promise<HttpResponse<AccountModel>> => {
      return await remoteAuthenticationTest.auth(params)
    }
  })

  test('Should throw InvalidCredentialsError if  HttpPostClient returns 401', async () => {
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    await expect(action()).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpecetedError if  HttpPostClient returns status code diferent from 200 or 401', async () => {
    httpPostClientSpy.response = {
      statusCode: 501
    }
    await expect(action()).rejects.toThrow(new UnexpectedError())
  })
})
