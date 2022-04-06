import React from 'react'
import { CraftHorizontalLineBlock } from '@craftdocs/craft-extension-api'
import Styled from './CraftHorizontalLineBlock.styled'

export type CraftHorizontalLineBlockProps = {
  block: CraftHorizontalLineBlock
}

const CraftHorizontalLineBlock: React.VFC<CraftHorizontalLineBlockProps> = ({ block, ...props }) => {
  const HorizontalLine = Styled[block.lineStyle]

  return <HorizontalLine block={block} {...props} />
}

export default CraftHorizontalLineBlock
