import React from 'react'
import { CraftTextBlock } from '@craftdocs/craft-extension-api'
import Styled from './CraftPage.styled'

export type CraftPageProps = {
  rootBlock: CraftTextBlock
}

const CraftPage: React.VFC<CraftPageProps> = ({ rootBlock, ...props }) => {
  return (
    <Styled.container {...props}>
      <h1>{rootBlock.content.map((t) => t.text).join('')}</h1>
    </Styled.container>
  )
}

export default CraftPage
