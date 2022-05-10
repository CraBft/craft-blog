import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBlogInfoContext } from '../../../contexts/blogGlobalContext'
import useInput from '../../../hooks/useInput'
import { BlogConfigContext } from '../BlogConfig'
import BlogConfigBox from '../components/BlogConfigBox'
import Button from '../components/Button'

export default function BlogConfigSetBlogName(): JSX.Element {
  const navigate = useNavigate()
  const {
    state: { repoFullName, apiToken },
  } = useContext(BlogConfigContext)
  const { dispatchBlogInfo } = useBlogInfoContext()
  const { value: blogName, onChange: onBlogNameChange } = useInput({ initialValue: '' })

  return (
    <BlogConfigBox title={'Step3'} description={'step3'}>
      <input type="text" value={blogName} onChange={onBlogNameChange} />
      <Button
        disabled={!blogName}
        onClick={() => {
          dispatchBlogInfo({
            type: 'SET_BLOG_INFO',
            value: {
              repoFullName,
              apiToken,
              blogName,
            },
          })
          navigate('/')
        }}
      >
        Done!
      </Button>
    </BlogConfigBox>
  )
}
