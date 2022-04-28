import React, { createContext, ReactChild, useContext, useState } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import craftStorageApi, { GithubBlogInfo } from '../utils/craftStorageApi'

// type BlogContextType = [BlogContextState, React.Dispatch<React.ReducerAction<typeof reducer>>]

// export const BlogContext = React.createContext<BlogContextType>(undefined as unknown as BlogContextType)

// type BlogContextProviderProps = {
//   children: ReactChild
// }

// type ActionType = SetFound | SetNotFound | UpdateApiToken | UpdateRepoName

// type SetFound = {
//   type: 'SET_FOUND'
//   value: GithubBlogInfo
// }

// type SetNotFound = {
//   type: 'SET_NOT_FOUND'
// }

// type UpdateApiToken = {
//   type: 'UPDATE_API_TOKEN'
//   value: string
// }

// type UpdateRepoName = {
//   type: 'UPDATE_REPO_NAME'
//   value: string
// }

// type BlogContextState =
//   | {
//       type: 'loading'
//     }
//   | {
//       type: 'found'
//       data: GithubBlogInfo
//     }
//   | { type: 'notfound' }

// function reducer(state: BlogContextState, action: ActionType): BlogContextState {
//   switch (action.type) {
//     case 'SET_FOUND':
//       return {
//         type: 'found',
//         data: action.value,
//       }
//     case 'SET_NOT_FOUND':
//       return {
//         type: 'notfound',
//       }
//     // case 'UPDATE_API_TOKEN':
//     //   return { type: 'found', d }
//     // case 'UPDATE_REPO_NAME':
//     //   return { ...state, repoName: action.value }
//     default:
//       return state
//   }
// }

// export function BlogContextProvider(props: BlogContextProviderProps): JSX.Element {
//   const [blogContextState, setBlogContextState] = useReducer<typeof reducer>(reducer, {
//     type: 'loading',
//   })

//   useEffect(() => {
//     ;(async () => {
//       try {
//         const githubBlogInfo = await craftStorageApi.getBlog()
//         setBlogContextState({ type: 'SET_FOUND', value: githubBlogInfo })
//       } catch (e) {
//         setBlogContextState({ type: 'SET_NOT_FOUND' })
//       }
//     })()
//   }, [])
//   return <BlogContext.Provider value={[blogContextState, setBlogContextState]}>{props.children}</BlogContext.Provider>
// }

// 블로그 인포 컨텍스트
type BlogInfoContext = GithubBlogInfo
type BlogInfoContextType = [BlogInfoContext, React.Dispatch<SetBlogInfo>]

export const BlogInfoContext = createContext<BlogInfoContextType>(undefined as unknown as BlogInfoContextType)

type BlogInfoActionType = SetBlogInfo

type SetBlogInfo = {
  type: 'SET_BLOG_INFO'
  value: BlogInfoContext
}

function blogInfoReducer(state: BlogInfoContext, action: BlogInfoActionType): BlogInfoContext {
  switch (action.type) {
    case 'SET_BLOG_INFO':
      return action.value
    default:
      return state
  }
}

export function BlogInfoContextProvider(props: { children: ReactChild }): JSX.Element {
  const [blogInfo, setBlogInfo] = useReducer<typeof blogInfoReducer>(blogInfoReducer, {
    apiToken: 'empty',
    repoName: 'empty',
    repoOwner: 'empty',
    blogName: 'empty',
  })
  const [blogLoadState, setBlogLoadState] = useContext(BlogLoadStateContext)
  useEffect(() => {
    ;(async () => {
      try {
        const githubBlogInfo = await craftStorageApi.getBlog()
        setBlogInfo({ type: 'SET_BLOG_INFO', value: githubBlogInfo })
        setBlogLoadState('success')
      } catch (e) {
        setBlogLoadState('fail')
      }
    })()
  }, [setBlogLoadState])
  // const getGithubBlogInfo = async () => {
  // 	try {
  // 		const githubBlogInfo = await craftStorageApi.getBlog()
  // 		setBlogInfo({ type: 'SET_BLOG_INFO', value: githubBlogInfo })
  // 		setBlogLoadState('success')
  // 	} catch (e) {
  // 		setBlogLoadState('fail')
  // 	}
  // }

  return <BlogInfoContext.Provider value={[blogInfo, setBlogInfo]}>{props.children}</BlogInfoContext.Provider>
}

// 블로그 컨텍스트의 로드 상태를 제공하는 컨텍스트 프로바이더.
type BlogLoadState = 'loading' | 'success' | 'fail'
type BlogLoadStateContextType = [BlogLoadState, React.Dispatch<React.SetStateAction<BlogLoadState>>]

export const BlogLoadStateContext = createContext<BlogLoadStateContextType>(
  undefined as unknown as BlogLoadStateContextType
)

export function BlogLoadStateContextProvider(props: { children: ReactChild }): JSX.Element {
  const [blogLoadState, setBlogLoadState] = useState<BlogLoadState>('loading')

  return (
    <BlogLoadStateContext.Provider value={[blogLoadState, setBlogLoadState]}>
      {props.children}
    </BlogLoadStateContext.Provider>
  )
}
