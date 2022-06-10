import { AuthenticationParams } from '@/domain/usecases/authentication'
import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-post-client'
import { InvalidCredentialsError } from '@/domain/erros/invalid-credentials-error'
import { UnexpectedError } from '@/domain/erros/unexpected-error'
import { AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(
    params: AuthenticationParams
  ): Promise<HttpResponse<AccountModel>> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    if (httpResponse.statusCode === HttpStatusCode.ok) return httpResponse

    if (httpResponse.statusCode === HttpStatusCode.unauthorized)
      throw new InvalidCredentialsError()

    throw new UnexpectedError()
  }
}
