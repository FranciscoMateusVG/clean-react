export type HttpPostParams<T> = {
  url: string
  body?: T
}

export enum HttpStatusCode {
  noContent = 204,
  ok = 200,
  unauthorized = 401
}

export type HttpResponse<R> = {
  statusCode: HttpStatusCode
  body?: R
}

export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
