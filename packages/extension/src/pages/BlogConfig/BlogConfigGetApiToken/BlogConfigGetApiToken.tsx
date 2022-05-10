import React, { Suspense, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useInput from '../../../hooks/useInput'
import { getUser, getUserRepos } from '../../../utils/githubApi'
import { BlogConfigContext } from '../BlogConfig'
import BlogConfigBox from '../components/BlogConfigBox'
import Button from '../components/Button'
import Styled from './BlogConfigGetApiToken.Styled'

export interface BlogConfigGetApiTokenProps {}

function ConfigInput() {
  const navigate = useNavigate()
  const { state, setState } = useContext(BlogConfigContext)
  const { onChange, value } = useInput({ initialValue: state.apiToken })
  const [isSubmiting, setIsSubmiting] = useState(false)
  const onSubmit = async () => {
    setIsSubmiting(true)
    const repos = await getUserRepos(value)
    setState((prev) => ({
      ...prev,
      apiToken: value,
      repos,
    }))
    setIsSubmiting(false)
    navigate('/blog-config/step2')
  }

  return (
    <>
      <Styled.input onChange={onChange} value={value} />
      {/* TODO: github token 형식 정규식 체크 */}
      <Button disabled={isSubmiting || value === ''} onClick={onSubmit}>
        {isSubmiting ? 'Loading...' : 'Submit'}
      </Button>
    </>
  )
}

export default function BlogConfigGetApiToken(): JSX.Element {
  return (
    <BlogConfigBox title={'Step1'} description={'step1'}>
      <ConfigInput />
    </BlogConfigBox>
  )
}
