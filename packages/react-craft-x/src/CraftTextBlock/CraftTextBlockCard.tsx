import { CraftTextBlock } from '@craftdocs/craft-extension-api'
import React from 'react'
import styled from 'styled-components'
import Styled, { CSS } from './CraftTextBlockCard.styled'

export type CraftTextBlockCardProps = {
  block: CraftTextBlock
  className?: string
}

const CraftTextBlockCard: React.VFC<CraftTextBlockCardProps> = ({
  block,
  className,
  ...props
}) => {
  if (!block.style.cardStyle)
    throw new Error("doesn't have a block.style.cardStyle value")

  const { type, backgroundColor, backgroundColorKey } = block.style.cardStyle
  const Card = styled(Styled[type])`
    ${CSS.base(block.style.cardStyle)}
  `
  return (
    <Card
      {...props}
      className={['react-craft-x-card', className].filter(Boolean).join('')}
    >
      {block.content.map((text) => text.text).join('')}
    </Card>
  )
}

export default CraftTextBlockCard
