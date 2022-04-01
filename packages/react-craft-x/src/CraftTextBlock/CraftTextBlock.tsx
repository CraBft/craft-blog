import { CraftTextBlock as CraftTextBlockType } from '@craftdocs/craft-extension-api'
import React from 'react'
import CraftTextRuns from '../CraftTextRuns'
import Styled from './CraftTextBlock.styled'
import CraftTextBlockCard from './CraftTextBlockCard'

export type CraftTextBlockProps = {
  block: CraftTextBlockType
}

const CraftTextBlock: React.VFC<CraftTextBlockProps> = ({
  block,
  ...props
}) => {
  const { textStyle } = block.style

  if (textStyle === 'card') return <CraftTextBlockCard block={block} />

  if (textStyle === 'title') {
    return (
      <Styled.title block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.title>
    )
  }
  if (textStyle === 'subtitle') {
    return (
      <Styled.subtitle block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.subtitle>
    )
  }
  if (textStyle === 'heading') {
    return (
      <Styled.heading block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.heading>
    )
  }
  if (textStyle === 'strong') {
    return (
      <Styled.strong block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.strong>
    )
  }
  if (textStyle === 'body') {
    return (
      <Styled.body block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.body>
    )
  }
  if (textStyle === 'caption') {
    return (
      <Styled.caption block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.caption>
    )
  }
  if (textStyle === 'page') {
    return (
      <Styled.page block={block} {...props}>
        <CraftTextRuns content={block.content} />
      </Styled.page>
    )
  }
  return null
}

export default CraftTextBlock
