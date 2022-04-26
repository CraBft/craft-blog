import { CraftTextRun, TextHighlightColor } from '@craftdocs/craft-extension-api'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { components } from '../ReactCraftXContext'
import { theme } from '../theme'

const UnStyledAnchor = <C extends keyof JSX.IntrinsicElements | React.ComponentType>({
  text,
  Component,
  children,
  ...props
}: {
  text: CraftTextRun
  Component: React.FC<React.ComponentProps<components['Link']>>
  children?: ReactNode | ReactNode[]
} & React.ComponentProps<components['Link']>) => {
  return <Component {...props}>{children}</Component>
}

const Styled = {
  Text: styled.span<{
    text: CraftTextRun
    prev?: CraftTextRun | null
    next?: CraftTextRun | null
  }>`
    ${(props) => {
      const { text, prev, next } = props
      return css`
        ${text.isBold && 'font-weight: 700;'}
        ${text.isItalic &&
        css`
          font-style: italic;
          color: rgb(128, 130, 131);
        `}
        ${text.isStrikethrough && 'text-decoration: line-through;'}
        ${text.isCode &&
        css`
          font-family: 'Roboto Mono', monospace;
          -webkit-print-color-adjust: exact;

          ${!prev?.isCode &&
          css`
            margin-left: 2px;
            padding-left: 4px;
            border-left: 1px solid rgb(213, 213, 213);
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          `}
          ${!next?.isCode &&
          css`
            margin-right: 2px;
            padding-right: 4px;
            border-right: 1px solid rgb(213, 213, 213);
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
          `}
          border-top: 1px solid rgb(213, 213, 213);
          border-bottom: 1px solid rgb(213, 213, 213);
          transition: all 0.3s ease 0s;
          padding-top: 2px;
          padding-bottom: 2px;
        `}
      `
    }}
  `,
  HighlightColor: styled.span<{
    highlightColor: TextHighlightColor
  }>`
    ${(props) => {
      const { highlightColor } = props
      switch (highlightColor) {
        case 'yellow':
        case 'lime':
        case 'green':
        case 'cyan':
        case 'blue':
        case 'purple':
        case 'pink':
        case 'red':
        case 'grey':
          return css`
            background-color: ${theme.light.text.highlightColor[highlightColor]};
            print-color-adjust: exact;

            border-radius: 2px;
            box-shadow: ${theme.light.text.highlightColor[highlightColor]} -1px 0px 0px,
              ${theme.light.text.highlightColor[highlightColor]} 1px 0px 0px;

            transition: all 0.3s ease 0s;
          `
        case 'beachGradient':
        case 'nightSkyGradient':
        case 'sunsetGradient':
        case 'orangeGradient':
        case 'goldGradient':
          return css`
            -webkit-text-fill-color: transparent;

            background-image: ${theme.light.text.highlightColor[highlightColor]};
            background-clip: text;
            box-decoration-break: clone;

            transition: all 0.3s ease 0s;
          `
        default:
          return css``
      }
    }}
  `,
  Code: styled.code``,
  anchor: styled(UnStyledAnchor)`
    &:hover {
      opacity: 0.65;
      ${({ text }) => {
        switch (text.highlightColor) {
          case 'beachGradient':
          case 'nightSkyGradient':
          case 'sunsetGradient':
          case 'orangeGradient':
          case 'goldGradient':
            return css`
              color: ${theme.light.text.anchoredHighlightColor[text.highlightColor]};
              -webkit-text-fill-color: ${theme.light.text.anchoredHighlightColor[text.highlightColor]};
            `
          default:
            return css`
              color: rgb(16, 85, 146);
              -webkit-text-fill-color: rgb(16, 85, 146);
            `
        }
      }}
    }
    color: rgb(16, 85, 146);
    -webkit-text-fill-color: rgb(16, 85, 146);
    text-decoration: underline;
    text-underline-position: under;
    ${({ text }) => {
      switch (text.highlightColor) {
        case 'yellow':
        case 'lime':
        case 'green':
        case 'cyan':
        case 'blue':
        case 'purple':
        case 'pink':
        case 'red':
        case 'grey':
        case undefined:
          return css``
        default:
          return css`
            color: transparent;
            -webkit-text-fill-color: transparent;
            text-decoration-color: ${theme.light.text.anchoredHighlightColor[text.highlightColor]};
          `
      }
    }}
  `,
}

export default Styled
