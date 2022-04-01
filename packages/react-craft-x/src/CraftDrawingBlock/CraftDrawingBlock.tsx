import React from 'react'
import { CraftDrawingBlock as CraftDrawingBlockType } from '@craftdocs/craft-extension-api'

export type CraftDrawingBlockProps = {
  block: CraftDrawingBlockType
  className?: string
}

const CraftDrawingBlock: React.VFC<CraftDrawingBlockProps> = ({
  block,
  className,
  ...props
}) => {
  return (
    <div className={`craft-drawing-block ${className}`} {...props}>
      CraftDrawingBlock
    </div>
  )
}

export default CraftDrawingBlock
