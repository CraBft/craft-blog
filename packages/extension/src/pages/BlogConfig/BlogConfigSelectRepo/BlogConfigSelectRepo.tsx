import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogConfigContext } from '../BlogConfig'
import BlogConfigBox from '../components/BlogConfigBox'

export default function BlogConfigSelectRepo(): JSX.Element {
  const navigate = useNavigate()
  const {
    state: { repos },
    setState,
  } = useContext(BlogConfigContext)
  const [repoFullName, setRepoFullName] = useState<string | undefined>(undefined)

  return (
    <BlogConfigBox title={'Step2'} description={'step2'}>
      <select onChange={(e) => setRepoFullName(e.target.value)}>
        {repos.map((repo) => {
          return (
            <option key={repo.id} value={repo.full_name}>
              <p>{repo.full_name}</p>
            </option>
          )
        })}
      </select>
      <button
        disabled={!repoFullName}
        onClick={() => {
          setState((prev) => ({ ...prev, repoFullName: repoFullName! }))
          navigate('/blog-config/step3')
        }}
      >
        Next!
      </button>
    </BlogConfigBox>
  )
}
