import React from 'react'
import Card from './components/Card'
import NavBar from '../../components/NavBar'

export type HomeProps = {}

export default function Home(props: HomeProps): JSX.Element {
  // 블로그 연동 여부 확인하기
  return (
    <>
      <NavBar isHome={true} />
      <Card
        logoImgAlt="github logo"
        logoImgUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
        blogName="😄 My blog"
        blogPlatform="Github"
        onClickRoutePath="/blog-config"
      />
    </>
  )
}
