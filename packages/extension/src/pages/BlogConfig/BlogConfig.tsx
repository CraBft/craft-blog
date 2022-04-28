import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import BlogConfigBox from './components/BlogConfigBox/BlogConfigBox'

export type BlogConfigProps = {}

export default function BlogConfig(props: BlogConfigProps): JSX.Element {
  return (
    <>
      <NavBar pageName="BlogConfig Configure" />
      <BlogConfigBox title="Step1." description="Type github api token" inputType="text" />
      <BlogConfigBox title="Step2." description="Select BlogConfig repository" inputType="select" />
      <BlogConfigBox title="Step3." description="Type BlogConfig name" inputType="text" />
    </>
  )
}
