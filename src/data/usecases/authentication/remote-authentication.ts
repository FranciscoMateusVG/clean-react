import {
  Authentication,
  AuthenticationParams
} from '@/domain/usecases/authentication'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, InvalidCredentialsError } from '@/domain/erros'
import { AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    const status = httpResponse.statusCode

    const { ok, unauthorized } = HttpStatusCode

    if (status === ok && httpResponse.body) return httpResponse.body

    if (status === unauthorized) throw new InvalidCredentialsError()

    throw new UnexpectedError()
  }
}
