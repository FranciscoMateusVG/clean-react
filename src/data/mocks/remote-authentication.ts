import { AccountModel } from '@/domain/models/account-model'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { faker } from '@faker-js/faker'
import { RemoteAuthentication } from '../usecases/authentication/remote-authentication'
import { HttpPostClientSpy } from '.'

type MockRemoteAuthParams = {
  url: string
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
  remoteAuthenticationTest: RemoteAuthentication
}

const url = faker.internet.url()
const httpPostClientSpy = new HttpPostClientSpy<
  AuthenticationParams,
  AccountModel
>()

export const mockRemoteAuthentication = (): MockRemoteAuthParams => ({
  url,
  httpPostClientSpy,
  remoteAuthenticationTest: new RemoteAuthentication(url, httpPostClientSpy)
})
