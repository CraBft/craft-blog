import { ApiResponse, CraftHttpHeaders, CraftHttpTextRequestBody } from '@craftdocs/craft-extension-api'
import { Endpoints } from '@octokit/types'

const END_POINT = 'https://api.github.com'

type RequestOptionsType = {
  token: string
  method: string
  url: string
  body?: CraftHttpTextRequestBody
  headers?: {
    [key: string]: string
  }
}

export interface CraftHttpResponseBody<JSON> {
  arrayBuffer(): Promise<ArrayBuffer>
  json(): Promise<JSON>
  text(): Promise<string>
}

export interface CraftHttpResponse<T> {
  status: number
  headers: CraftHttpHeaders
  body?: CraftHttpResponseBody<T>
}

const client = async <T>({ token, method, url, body, headers = {} }: RequestOptionsType) => {
  const response = await craft.httpProxy.fetch({
    method,
    url,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      ...headers,
    },
    body,
  })
  return response as unknown as ApiResponse<CraftHttpResponse<T>>
}

export async function getUser(personalAccessToken: string) {
  const response = await client<Endpoints['GET /user']['response']>({
    method: 'GET',
    url: `${END_POINT}/user`,
    token: personalAccessToken,
  })
  return await response.data?.body?.json()
}

type UserRepoResponse = Endpoints[`GET /user/repos`]['response']['data']

export type UserRepo = UserRepoResponse[0]

export async function getUserRepos(personalAccessToken: string) {
  const response = await client<UserRepoResponse>({
    method: 'GET',
    url: `${END_POINT}/user/repos`,
    token: personalAccessToken,
  })
  // TODO 예외 케이스 처리 하기
  return response.data!.body!.json()
}
