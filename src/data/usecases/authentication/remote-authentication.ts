import { AuthenticationParams } from '@/domain/usecases/authentication'
import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-post-client'
import { InvalidCredentialsError } from '@/domain/erros/invalid-credentials-error'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    if (httpResponse.statusCode === HttpStatusCode.unauthorized)
      throw new InvalidCredentialsError()

    return httpResponse
  }
}
