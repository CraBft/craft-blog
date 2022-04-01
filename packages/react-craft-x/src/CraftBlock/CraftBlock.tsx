import React from 'react'
import { CraftBlock as CraftBlockType } from '@craftdocs/craft-extension-api'
import SwitchCraftBlock from './SwitchCraftBlock'
import styled from 'styled-components'
import Styled, { CSS } from './CraftBlock.styled'
import { useNextBlock, usePrevBlock } from '../ReactCraftXContext'
import { baseStyle } from '../theme'

export type CraftBlockProps = {
  block: CraftBlockType
  index?: number
}

export type StyledCraftBlockProps = {
  block: CraftBlockType
  prev?: CraftBlockType
  next?: CraftBlockType
}

const Indent: React.FC<StyledCraftBlockProps> = ({
  block,
  prev,
  next,
  ...props
}) => {
  if (block.indentationLevel > 0) {
    return (
      <Styled.indent level={block.indentationLevel} {...props}>
        <FocusDecoration block={block} prev={prev} next={next} />
      </Styled.indent>
    )
  }
  return <FocusDecoration block={block} prev={prev} next={next} {...props} />
}

const FocusDecoration: React.FC<StyledCraftBlockProps> = ({
  block,
  prev,
  next,
  ...props
}) => {
  if (block.hasFocusDecoration) {
    return (
      <Styled.focusDecoration.container {...props}>
        <Styled.focusDecoration.focus block={block} prev={prev} next={next} />
        <Styled.focusDecoration.padding />
        <BlockDecoration block={block} prev={prev} next={next} />
      </Styled.focusDecoration.container>
    )
  }
  return <BlockDecoration block={block} prev={prev} next={next} {...props} />
}

const BlockDecoration: React.FC<StyledCraftBlockProps> = ({
  block,
  prev,
  next,
  ...props
}) => {
  if (block.hasBlockDecoration) {
    return (
      <Styled.blockDecoration block={block} prev={prev} next={next} {...props}>
        <ListDecoration block={block} prev={prev} next={next} />
      </Styled.blockDecoration>
    )
  }
  return <ListDecoration block={block} prev={prev} next={next} {...props} />
}

const ListDecoration: React.FC<StyledCraftBlockProps> = ({
  block,
  prev,
  next,
  children,
  ...props
}) => {
  if (block.listStyle.type === 'bullet') {
    return (
      <Styled.ul {...props}>
        <Styled.li>
          <Styled.icon block={block}>•</Styled.icon>
          <SwitchCraftBlock block={block} />
        </Styled.li>
      </Styled.ul>
    )
  }
  if (block.listStyle.type === 'numbered') {
    return (
      <Styled.ol {...props}>
        <Styled.li>
          <Styled.icon block={block}>1.</Styled.icon>
          <SwitchCraftBlock block={block} />
        </Styled.li>
      </Styled.ol>
    )
  }
  if (block.listStyle.type === 'todo') {
    const isRounded = block.indentationLevel % 2
    const StyledTodoIcon = Styled.todo.icons[isRounded][block.listStyle.state]

    return (
      <Styled.todo.container {...props}>
        <Styled.icon block={block}>
          <StyledTodoIcon
            data-state={block.listStyle.state}
            data-is-rounded={!!isRounded}
          />
        </Styled.icon>
        <SwitchCraftBlock block={block} />
      </Styled.todo.container>
    )
  }

  if (block.listStyle.type === 'toggle') {
    return (
      <Styled.toggle.details {...props}>
        <Styled.toggle.summary>
          <Styled.icon block={block}>
            <Styled.toggle.icon
              data-color={block.color}
              data-has-children={!!children}
            />
          </Styled.icon>
          <SwitchCraftBlock block={block} />
        </Styled.toggle.summary>
        {children}
      </Styled.toggle.details>
    )
  }

  return <SwitchCraftBlock block={block} {...props} />
}

const Color = styled(Indent)`
  ${CSS.base}
  ${({ block: { color } }) => CSS.color(color)}
`

const CraftBlock: React.FC<CraftBlockProps> = ({
  block,
  index,
  children,
  ...props
}) => {
  const prev = usePrevBlock(index)
  const next = useNextBlock(index)

  return (
    <Color block={block} prev={prev} next={next} {...props}>
      {children}
    </Color>
  )
}

export default CraftBlock
