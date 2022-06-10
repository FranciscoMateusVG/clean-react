import { HttpStatusCode } from '.'

export type HttpResponse<R> = {
  statusCode: HttpStatusCode
  body?: R
}
