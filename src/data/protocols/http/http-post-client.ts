export type HttpPostParams = {
  url: string
  body?: object
}

export enum HttpStatusCode {
  unauthorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
