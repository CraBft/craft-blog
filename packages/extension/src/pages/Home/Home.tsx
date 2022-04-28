import React, { useEffect } from 'react'
import Card from './components/Card'
import NavBar from '../../components/NavBar'
import craftStorageApi, { GithubBlogInfo } from '../../utils/craftStorageApi'
import { useBlogInfoContext } from '../../contexts/blogGlobalContext'
import { Navigate } from 'react-router-dom'

export type HomeProps = {
  blogInfo: GithubBlogInfo
}

function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <NavBar isHome={true} pageName="CraBft-X" />
      <Card
        logoImgAlt="github logo"
        logoImgUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
        title="Link CraBft Blog"
        description="Link CraBft blog with github"
        onClickRoutePath="/blog-config"
      />
    </>
  )
}

// 다른 컴포넌트들에도 재사용하려면 상태에 따라서 일관된 동작을 정의해야될거 같은데 가능할까?..
const withBlogLoad = (Component: typeof Home) => {
  const Wrapper = (props: any) => {
    const { getBlogInfo, loadStatus } = useBlogInfoContext()

    useEffect(() => {
      getBlogInfo()
    }, [getBlogInfo])
    // useEffect(() => {
    //   setTimeout(() => {
    //     setLoadStatus('success')
    //   }, 1000)
    // }, [setLoadStatus])

    if (loadStatus === 'loading') return <>loading...</>
    else if (loadStatus === 'fail') return <Component {...props} />
    return <Navigate to="/publish" />
  }
  return Wrapper
}

export default withBlogLoad(Home)
