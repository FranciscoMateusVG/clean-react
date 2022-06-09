import { AuthenticationParams } from '@/domain/usecases/authentication'
import {
  HttpPostClient,
  HttpResponse
} from '@/data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<HttpResponse> {
    return await this.httpPostClient.post({ url: this.url, body: params })
  }
}
