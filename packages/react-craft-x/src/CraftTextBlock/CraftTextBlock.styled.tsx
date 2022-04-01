import { CraftTextBlock } from '@craftdocs/craft-extension-api'
import styled, { css } from 'styled-components'
import { baseStyle, theme } from '../theme'

const defaultStyle = (block: CraftTextBlock) => css`
  display: flex;
  width: 100%;
  margin: 0px;

  ${theme.fontStyle[block.style.fontStyle]}
`

const Styled = {
  title: styled.h1<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.title}
  `,
  subtitle: styled.h2<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.subtitle}
  `,
  heading: styled.h3<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.heading}
  `,
  strong: styled.style<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.strong}
  `,
  body: styled.p<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.body}
  `,
  caption: styled.small<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.caption}
  `,
  page: styled.div<{
    block: CraftTextBlock
  }>`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.page}
  `,
}

export default Styled
