import { CraftTextRun as CraftTextRunType } from '@craftdocs/craft-extension-api'
import React, { ReactNode } from 'react'
import CraftTextRun from '../CraftTextRun'
import Styled from './CraftTextRuns.styled'

export type CraftTextRunsProps = {
  content: CraftTextRunType[]
}

const CraftTextRuns = ({ content, ...props }: CraftTextRunsProps) => {
  const renderCraftTextRuns = () => {
    const textNodes: ReactNode[] = []
    for (let i = 0; i < content.length; ++i) {
      let text = content[i]
      let prev = i !== 0 ? content[i - 1] : null
      let next = i + 1 < content.length ? content[i + 1] : null

      textNodes.push(<CraftTextRun key={i} text={text} prev={prev} next={next} />)
    }
    return textNodes
  }

  return <Styled.container {...props}>{renderCraftTextRuns()}</Styled.container>
}

export default CraftTextRuns
