import { CraftBlock } from '@craftdocs/craft-extension-api'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const UnStyledContainer = ({
  block,
  Element,
  children,
  ...props
}: {
  Element: React.FC<React.PropsWithChildren<{}>>
  block: CraftBlock
  children: ReactNode
  [key: string]: any
}) => {
  return <Element {...props}>{children}</Element>
}

const Styled = {
  Container: styled(UnStyledContainer)`
    margin: 0px;
    padding: 8px 28px 8px 12px !important;

    font-size: 15px;
    font-family: 'Roboto Mono', monospace;
    line-height: 20px;

    background: ${({ block: { color } }) => theme.light.background[color]} !important;
    border-radius: 4px;

    .katex-display {
      margin: 0;
    }
    .katex-html {
      text-align: left;
    }
  `,
}

export default Styled
