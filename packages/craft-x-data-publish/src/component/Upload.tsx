import {
  createContent,
  getExistContent,
  isExistContent,
  UploadContentDto,
  DispatchDto,
  triggerGithubActions,
} from '../utils/github-api'
import * as React from 'react'
import { logToInPageConsole } from '../utils/console'

const Upload: React.FC<{}> = () => {
  const sync = async () => {
    const { data } = await craft.dataApi.getCurrentPage()
    logToInPageConsole(`${data}`)

    if (data == undefined) return logToInPageConsole('First, select page')

    // 해당 도큐먼트를 깃허브에 푸시한다.
    const uploadContentDto: UploadContentDto = {
      message: 'Craft upload content',
      path: '.github/temp/craft_raw.json',
      content: JSON.stringify(data, null, 2),
      commiter: {
        name: 'CraBft🦀',
        email: 'CraBft@users.noreply.github.com',
      },
    }

    if (await isExistContent(uploadContentDto.path)) {
      uploadContentDto.sha = (await getExistContent(uploadContentDto.path))?.sha
    }
    createContent(uploadContentDto)
  }
  return <button onClick={sync}>Upload Api</button>
}

export default Upload
