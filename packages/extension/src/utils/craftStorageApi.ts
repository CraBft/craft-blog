export type GithubBlogInfo = {
  apiToken: string
  repoFullName: string
  blogName: string
}

const BLOG_STORAGE_KEY = 'blog'

class CraftStorageApiError extends Error {
  constructor(message: string) {
    super()
    this.message = message
  }
}

const craftStorageApi = {
  CraftStorageApiError,

  async getBlog(): Promise<GithubBlogInfo> {
    const { status, data } = await craft.storageApi.get(BLOG_STORAGE_KEY)
    if (status === 'error') throw new CraftStorageApiError('There are no blog data')
    return JSON.parse(data) as GithubBlogInfo
  },

  async setBlog(blogInfo: GithubBlogInfo): Promise<GithubBlogInfo> {
    const { data, status } = await craft.storageApi.put(BLOG_STORAGE_KEY, JSON.stringify(blogInfo))
    if (status === 'error') throw new CraftStorageApiError('Failed to put blog')
    return blogInfo
  },

  async updateBlog(blogInfo: Partial<GithubBlogInfo>): Promise<GithubBlogInfo> {
    const prev = await this.getBlog()
    const updateInfo = { ...prev, ...blogInfo }
    const { status } = await craft.storageApi.put(BLOG_STORAGE_KEY, JSON.stringify(updateInfo))

    if (status === 'error') throw new CraftStorageApiError('Failed to update blog')

    return updateInfo
  },
}

export default craftStorageApi
