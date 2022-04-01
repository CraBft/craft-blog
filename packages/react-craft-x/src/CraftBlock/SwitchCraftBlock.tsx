import React from 'react'
import { CraftBlock } from '@craftdocs/craft-extension-api'
import CraftTextBlock from '../CraftTextBlock'
import CraftCodeBlock from '../CraftCodeBlock'
import CraftDrawingBlock from '../CraftDrawingBlock'
import CraftFileBlock from '../CraftFileBlock'
import CraftHorizontalLineBlock from '../CraftHorizontalLineBlock'
import CraftImageBlock from '../CraftImageBlock'
import CraftTableBlock from '../CraftTableBlock'
import CraftUrlBlock from '../CraftUrlBlock'
import CraftVideoBlock from '../CraftVideoBlock'

export type SwitchCraftBlockProps = {
  block: CraftBlock
}

const SwitchCraftBlock: React.VFC<SwitchCraftBlockProps> = ({
  block,
  ...props
}) => {
  if (block.type === 'textBlock') {
    return <CraftTextBlock block={block} {...props} />
  }
  if (block.type === 'codeBlock') {
    return <CraftCodeBlock block={block} {...props} />
  }
  if (block.type === 'drawingBlock') {
    return <CraftDrawingBlock block={block} {...props} />
  }
  if (block.type === 'fileBlock') {
    return <CraftFileBlock block={block} {...props} />
  }
  if (block.type === 'horizontalLineBlock') {
    return <CraftHorizontalLineBlock block={block} {...props} />
  }
  if (block.type === 'imageBlock') {
    return <CraftImageBlock block={block} {...props} />
  }
  if (block.type === 'tableBlock') {
    return <CraftTableBlock block={block} {...props} />
  }
  if (block.type === 'urlBlock') {
    return <CraftUrlBlock block={block} {...props} />
  }
  if (block.type === 'videoBlock') {
    return <CraftVideoBlock block={block} {...props} />
  }
  // @ts-ignore
  console.warn(`Not Support Block Type : ${block.type}`)
  return null
}
export default SwitchCraftBlock
