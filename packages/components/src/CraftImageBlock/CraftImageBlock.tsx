import { CraftImageBlock } from '@craftdocs/craft-extension-api'
import React from 'react'
import Styled from './CraftImageBlock.styled'

export type CraftImageBlockProps = {
  block: CraftImageBlock
}

const CraftImageBlock: React.VFC<CraftImageBlockProps> = ({ block, ...props }) => {
  const { previewUrl, url, previewImageStyle, filename } = block

  return <Styled.img src={previewUrl ?? url} alt={filename} {...props} />
}

export default CraftImageBlock
