import { CraftTextBlock } from '@craftdocs/craft-extension-api'
import { ReactChild } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { baseStyle, theme } from '../theme'

const defaultStyle = (block: CraftTextBlock, children?: ReactChild) => css`
  display: flex;
  width: 100%;
  margin: 0px;

  ${theme.fontStyle[block.style.fontStyle]}
`

const Styled = {
  title: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <h1 {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.title}
  `,
  subtitle: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <h2 {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.subtitle}
  `,
  heading: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <h3 {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.heading}
  `,
  strong: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <strong {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.strong}
  `,
  body: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <p {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.body}
  `,
  caption: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <small {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.caption}
  `,
  page: styled(({ block, ...props }: { block: CraftTextBlock; children?: ReactChild }) => <div {...props} />)`
    ${({ block }) => defaultStyle(block)}
    ${baseStyle.font.page}
  `,
}

export default Styled
