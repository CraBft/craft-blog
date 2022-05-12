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
  return response.data?.body?.json()
}

type getContentsParameters = Omit<
  Omit<Endpoints['GET /repos/{owner}/{repo}/contents/{path}']['parameters'], 'owner'>,
  'repo'
> & {
  repoFullName: string
}

type getContentsResponse = Endpoints['GET /repos/{owner}/{repo}/contents/{path}']['response']['data']

export async function getContents(
  personalAccessToken: string,
  { repoFullName, path, ...params }: getContentsParameters
) {
  const response = await client<getContentsResponse>({
    method: 'GET',
    url: `${END_POINT}/repos/${repoFullName}/contents/${path}?${Object.entries(params)
      .map(([key, value]) => `${encodeURI(key)}=${encodeURI(value)}`)
      .join('&')}`,
    token: personalAccessToken,
  })

  const { status, headers, body } = response.data!

  return {
    status,
    headers,
    body: await body!.json(),
  }
}

type putContentsParameters = Omit<
  Omit<Endpoints[`PUT /repos/{owner}/{repo}/contents/{path}`]['parameters'], 'owner'>,
  'repo'
> & {
  repoFullName: string
}

type putContentsResponse = Endpoints[`PUT /repos/{owner}/{repo}/contents/{path}`]['response']['data']

export async function putContents(
  personalAccessToken: string,
  { repoFullName, path, ...params }: putContentsParameters
) {
  const response = await client<putContentsResponse>({
    method: 'PUT',
    url: `${END_POINT}/repos/${repoFullName}/contents/${path}`,
    token: personalAccessToken,
    body: {
      type: 'text',
      text: JSON.stringify(params),
    },
  })

  return response.data
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
