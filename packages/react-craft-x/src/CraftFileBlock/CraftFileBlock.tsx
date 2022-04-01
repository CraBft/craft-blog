import React from 'react'
import { CraftFileBlock as CraftFileBlockType } from '@craftdocs/craft-extension-api'

export type CraftFileBlockProps = {
  block: CraftFileBlockType
  className?: string
}

const CraftFileBlock: React.VFC<CraftFileBlockProps> = ({
  block,
  className,
}) => {
  return <div className={`craft-file-block ${className}`}>CraftFileBlock</div>
}

export default CraftFileBlock
