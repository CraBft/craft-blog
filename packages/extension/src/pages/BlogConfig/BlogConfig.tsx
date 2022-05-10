import React, { ReactChild, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { GithubBlogInfo } from '../../utils/craftStorageApi'
import { UserRepo } from '../../utils/githubApi'

type BlogConfigState = GithubBlogInfo & {
  repos: UserRepo[]
}
/**
 *
 */
export const BlogConfigContext = React.createContext<{
  state: BlogConfigState
  setState: React.Dispatch<React.SetStateAction<BlogConfigState>>
}>(undefined as any)

interface BlogConfigProps {
  children?: ReactChild
}

export default function BlogConfig({ children }: BlogConfigProps): JSX.Element {
  const [state, setState] = useState<BlogConfigState>({
    apiToken: '',
    blogName: '',
    repoFullName: '',
    repos: [],
  })

  return (
    <>
      <NavBar pageName="BlogConfig Configure" />
      <BlogConfigContext.Provider value={{ state, setState }}>
        <Outlet />
      </BlogConfigContext.Provider>
    </>
  )
}
