import React from 'react'
import { useBlogInfoContext } from '../../contexts/blogGlobalContext'
import { putContents, getContents } from '../../utils/githubApi'
import Button from '../BlogConfig/components/Button'
import Base64 from 'js-base64'

export type PublishProps = {}

export default function Publish(): JSX.Element {
  const {
    blogInfo: { apiToken, repoFullName },
  } = useBlogInfoContext()

  const onClick = async () => {
    const page = await craft.dataApi.getCurrentPage()
    if (page.status === 'error') {
      console.error('error')
      return
    }

    const preContents = await getContents(apiToken, {
      repoFullName,
      path: '.github/temp/craft_raw.json',
    })
    console.log(preContents)

    const content = Base64.encode(JSON.stringify(page))

    const sha = (() => {
      if (preContents.status !== 200) return
      if (Array.isArray(preContents.body)) {
        return preContents.body[0].sha
      }
      return preContents.body.sha
    })()

    console.log(
      await putContents(apiToken, {
        repoFullName,
        path: '.github/temp/craft_raw.json',
        message: 'commit msg!',
        content,
        sha: sha,
      })
    )
  }

  return (
    <>
      <Button onClick={onClick}>publish!!</Button>
    </>
  )
}
