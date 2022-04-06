import { CraftHttpRequestBody } from '@craftdocs/craft-extension-api'
import { logToInPageConsole } from './console'
import { Base64 } from 'js-base64'

export const GITHUB_CONFIG = 'GithubConfig'

export interface GithubConfig {
  owner: string
  repo: string
  token: string
}

export interface CommitterOption {
  name: string
  email: string
}
export interface UploadContentDto {
  message: string
  path: string // Don't start with '\';
  content: string // Not encode to base64 yet
  sha?: string
  commiter?: CommitterOption
}

export interface GitHubContentData {
  type: string
  size: string
  name: string
  path: string
  sha: string
  url: string
}

export interface DispatchDto {
  workflowName: string
  content: string
}

export async function getStorageDataOf(key: string) {
  const result = await craft.storageApi.get(key)
  if (result.status === 'error') {
    logToInPageConsole(`Failed to get storage data of ${key}: ${result.message}`)
    throw new Error(result.message)
  } else {
    return JSON.parse(result.data)
  }
}

export async function isExistContent(path: string) {
  const { owner, repo, token } = (await getStorageDataOf(GITHUB_CONFIG)) as GithubConfig
  const response = await craft.httpProxy.fetch({
    method: 'GET',
    url: `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
  if (response.status === 'error') throw new Error(response.message)
  return response.data.status === 404 ? false : true
}

export async function getExistContent(path: string) {
  const { owner, repo, token } = (await getStorageDataOf(GITHUB_CONFIG)) as GithubConfig
  const response = await craft.httpProxy.fetch({
    method: 'GET',
    url: `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
  if (response.status === 'error') throw new Error()
  if (response.data) return (await response.data.body?.json()) as GitHubContentData
}

export async function triggerGithubActions(dispatchDto: DispatchDto) {
  const { owner, repo, token } = (await getStorageDataOf(GITHUB_CONFIG)) as GithubConfig
  const { workflowName, content } = dispatchDto

  const apiParameters = {
    ref: 'main',
    inputs: {
      craftDocument: content,
    },
  }

  const body: CraftHttpRequestBody = {
    type: 'text',
    text: JSON.stringify(apiParameters),
  }

  const response = await craft.httpProxy.fetch({
    method: 'POST',
    url: `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowName}/dispatches`,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
    body: body,
  })

  if (response.status === 'error') {
    logToInPageConsole(`Response have error ${response.message}`)
  } else {
    logToInPageConsole(response.data.status.toString())
    logToInPageConsole(JSON.stringify(await response.data.body!.text(), null, 2))
  }
}

export async function createContent(uploadContentDto: UploadContentDto) {
  const { owner, repo, token } = (await getStorageDataOf(GITHUB_CONFIG)) as GithubConfig
  try {
    uploadContentDto.content = Base64.encode(uploadContentDto.content)
  } catch (e) {
    logToInPageConsole(JSON.stringify(e))
  }

  const body: CraftHttpRequestBody = {
    type: 'text',
    text: JSON.stringify(uploadContentDto),
  }
  logToInPageConsole(JSON.stringify(body))
  const response = await craft.httpProxy.fetch({
    method: 'PUT',
    url: `https://api.github.com/repos/${owner}/${repo}/contents/${uploadContentDto.path}`,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
    body: body,
  })
  if (response.status === 'error') {
    logToInPageConsole(`Response have error ${response.message}`)
    throw new Error(response.message)
  } else {
    logToInPageConsole(response.data.status.toString())
    logToInPageConsole(JSON.stringify(await response.data.body!.text(), null, 2))
  }
}
