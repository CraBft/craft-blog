import { CraftTextBlock } from '@craftdocs/craft-extension-api'
import React from 'react'
import Styled from './CraftTextBlockCard.styled'

export type CraftTextBlockCardProps = {
  block: CraftTextBlock
  className?: string
}

const CraftTextBlockCard: React.VFC<CraftTextBlockCardProps> = ({ block, className, ...props }) => {
  if (!block.style.cardStyle) throw new Error("doesn't have a block.style.cardStyle value")

  const { type, backgroundColor, backgroundColorKey } = block.style.cardStyle
  const Card = Styled[type]
  return (
    <Card
      {...props}
      style={block.style.cardStyle}
      className={['react-craft-x-card', className].filter(Boolean).join('')}
    >
      {block.content.map((text) => text.text).join('')}
    </Card>
  )
}

export default CraftTextBlockCard
