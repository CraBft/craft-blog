import { CraftVideoBlock as CraftVideoBlockType } from '@craftdocs/craft-extension-api'
import React from 'react'

export type CraftVideoBlockProps = {
  block: CraftVideoBlockType
  className?: string
}

const CraftVideoBlock: React.VFC<CraftVideoBlockProps> = ({ block, className }) => {
  return <video className={`craft-video-block ${className}`} />
}

export default CraftVideoBlock
