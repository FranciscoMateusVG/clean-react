export type HttpPostParams = {
  url: string
  body?: object
}

export enum HttpStatusCode {
  noContent = 204,
  ok = 200,
  unauthorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
