import React, { createContext, ReactChild, useContext, useState } from 'react'
import { useReducer } from 'react'
import craftStorageApi, { GithubBlogInfo } from '../utils/craftStorageApi'

// 블로그 인포 컨텍스트
type LoadStatus = 'loading' | 'fail' | 'success'
type BlogInfoContextType = {
  getBlogInfo: () => Promise<void>
  loadStatus: LoadStatus
  setLoadStatus: React.Dispatch<React.SetStateAction<LoadStatus>>
  blogInfo: GithubBlogInfo
  dispatchBlogInfo: React.Dispatch<BlogInfoActionType>
}

export const BlogInfoContext = createContext<BlogInfoContextType>(undefined as unknown as BlogInfoContextType)

type BlogInfoActionType = SetBlogInfo

type SetBlogInfo = {
  type: 'SET_BLOG_INFO'
  value: GithubBlogInfo
}

function blogInfoReducer(state: GithubBlogInfo, action: BlogInfoActionType): GithubBlogInfo {
  switch (action.type) {
    case 'SET_BLOG_INFO':
      return action.value
    default:
      return state
  }
}

export function BlogInfoContextProvider(props: { children: ReactChild }): JSX.Element {
  const [blogInfo, dispatchBlogInfo] = useReducer<typeof blogInfoReducer>(blogInfoReducer, {
    apiToken: 'empty',
    repoName: 'empty',
    repoOwner: 'empty',
    blogName: 'empty',
  })
  const [loadStatus, setLoadStatus] = useState<LoadStatus>('loading')

  async function getBlogInfo(): Promise<void> {
    try {
      const githubBlogInfo = await craftStorageApi.getBlog()
      dispatchBlogInfo({ type: 'SET_BLOG_INFO', value: githubBlogInfo })
      setLoadStatus('success')
    } catch (e) {
      setLoadStatus('fail')
    }
  }

  return (
    <BlogInfoContext.Provider value={{ getBlogInfo, loadStatus, setLoadStatus, blogInfo, dispatchBlogInfo }}>
      {props.children}
    </BlogInfoContext.Provider>
  )
}

export function useBlogInfoContext() {
  const context = useContext(BlogInfoContext)
  if (context === undefined) throw Error('Use BlogInfoContext out of bound')
  return context
}
