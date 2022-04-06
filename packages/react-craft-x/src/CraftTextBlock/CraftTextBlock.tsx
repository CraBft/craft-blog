import { CraftTextBlock as CraftTextBlockType } from '@craftdocs/craft-extension-api'
import React from 'react'
import CraftTextRuns from '../CraftTextRuns'
import Styled from './CraftTextBlock.styled'
import CraftTextBlockCard from './CraftTextBlockCard'

export type CraftTextBlockProps = {
  block: CraftTextBlockType
}

const CraftTextBlock: React.VFC<CraftTextBlockProps> = ({ block, ...props }) => {
  const { textStyle } = block.style

  if (textStyle === 'card') return <CraftTextBlockCard block={block} />

  const StyledTextBlock = Styled[textStyle]

  return (
    <StyledTextBlock block={block} {...props}>
      <CraftTextRuns content={block.content} />
    </StyledTextBlock>
  )
}

export default CraftTextBlock
