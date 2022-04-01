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

const Dispatch: React.FC<{}> = () => {
  const sync = async () => {
    const { data } = await craft.dataApi.getCurrentPage()
    logToInPageConsole(`${data}`)

    if (data == undefined) return logToInPageConsole('First, select page')

    const dispatchDto: DispatchDto = {
      workflowName: 'dispatch.yml',
      content: JSON.stringify(data, null, 2),
    }

    triggerGithubActions(dispatchDto)

    // 	// 해당 도큐먼트를 깃허브에 푸시한다.
    // 	const uploadContentDto: UploadContentDto = {
    // 		commit_message: 'Craft upload content',
    // 		path: 'root_block',
    // 		content: JSON.stringify(data, null, 2),
    // 	};
    // 	if (await isExistContent(uploadContentDto.path)) {
    // 		uploadContentDto.sha = (
    // 			await getExistContent(uploadContentDto.path)
    // 		)?.sha;
    // 	}
    // 	createContent(uploadContentDto);
    // };
  }

  return <button onClick={sync}>Dispatch Api</button>
}

export default Dispatch
