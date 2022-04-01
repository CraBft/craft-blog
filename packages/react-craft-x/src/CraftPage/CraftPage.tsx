import React from 'react'
import {
  CraftTextBlock,
  CraftBlock as CraftBlockType,
} from '@craftdocs/craft-extension-api'
import Styled from './CraftPage.styled'
import CraftBlock from '../CraftBlock'
import { ReactCraftXContextProvider } from '../ReactCraftXContext'

export type CraftPageProps = {
  rootBlock: CraftTextBlock
}

const CraftPage: React.VFC<CraftPageProps> = ({ rootBlock, ...props }) => {
  return (
    <ReactCraftXContextProvider
      config={{
        subBlocks: rootBlock.subblocks,
      }}
    >
      <Styled.container {...props}>
        <h1>{rootBlock.content.map((t) => t.text).join('')}</h1>
        {renderCraftBlocks(rootBlock.subblocks)}
      </Styled.container>
    </ReactCraftXContextProvider>
  )
}

const renderCraftBlocks: (blocks: CraftBlockType[]) => React.ReactNode[] = (
  blocks
) => {
  let index = 0
  const renderListCraftBlocks = (parent?: CraftBlockType) => {
    const nodes: React.ReactNode[] = []
    while (index < blocks.length) {
      const block = blocks[index]
      const prev = index !== 0 ? blocks[index - 1] : undefined
      const next = index + 1 < blocks.length ? blocks[index + 1] : undefined

      if (parent && block.indentationLevel <= parent.indentationLevel) break

      ++index
      if (
        next &&
        block.listStyle.type === 'toggle' &&
        block.indentationLevel < next.indentationLevel
      ) {
        nodes.push(
          <CraftBlock key={block.id} block={block} index={index}>
            {renderListCraftBlocks(block)}
          </CraftBlock>
        )
      } else {
        nodes.push(<CraftBlock key={block.id} block={block} index={index} />)
      }
    }
    return nodes
  }

  return renderListCraftBlocks()
}

export default CraftPage
