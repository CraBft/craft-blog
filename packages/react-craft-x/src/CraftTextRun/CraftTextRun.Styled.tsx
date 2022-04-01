import {
  CraftTextRun,
  TextHighlightColor,
} from '@craftdocs/craft-extension-api'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

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
          &::before {
            z-index: -1;
            content: '${text.text}';
            position: absolute;
            color: transparent;
            -webkit-text-fill-color: transparent;
            height: 100%;

            font-family: 'Roboto Mono', monospace;
            background-color: rgb(247, 247, 247);
            -webkit-print-color-adjust: exact;

            ${!prev?.isCode &&
            css`
              margin-left: -5px;
              padding-left: 5px;
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            `}
            ${!next?.isCode &&
            css`
              padding-right: 5px;
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
            `}
            margin-top: 2px;
            padding-top: 2px;
            padding-bottom: 2px;
            transition: all 0.3s ease 0s;
          }
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
            background-color: ${theme.light.text.highlightColor[
              highlightColor
            ]};
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            box-shadow: ${theme.light.text.highlightColor[highlightColor]} -1px 0px
                0px,
              ${theme.light.text.highlightColor[highlightColor]} 1px 0px 0px;
            transition: all 0.3s ease 0s;
            border-radius: 2px;
          `
        case 'beachGradient':
        case 'nightSkyGradient':
        case 'sunsetGradient':
        case 'orangeGradient':
        case 'goldGradient':
          return css`
            background-image: ${theme.light.text.highlightColor[
              highlightColor
            ]};
            -webkit-text-fill-color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
            transition: all 0.3s ease 0s;
          `
        default:
          return css``
      }
    }}
  `,
  Code: styled.code``,
  anchor: (text: CraftTextRun) => css`
    &:hover {
      opacity: 0.65;
      ${(() => {
        switch (text.highlightColor) {
          case 'beachGradient':
          case 'nightSkyGradient':
          case 'sunsetGradient':
          case 'orangeGradient':
          case 'goldGradient':
            return css`
              color: ${theme.light.text.anchoredHighlightColor[
                text.highlightColor
              ]};
              -webkit-text-fill-color: ${theme.light.text
                .anchoredHighlightColor[text.highlightColor]};
            `
          default:
            return css`
              color: rgb(16, 85, 146);
              -webkit-text-fill-color: rgb(16, 85, 146);
            `
        }
      })()}
    }
    color: rgb(16, 85, 146);
    -webkit-text-fill-color: rgb(16, 85, 146);
    text-decoration: underline;
    text-underline-position: under;
    ${(() => {
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
            text-decoration-color: ${theme.light.text.anchoredHighlightColor[
              text.highlightColor
            ]};
          `
      }
    })()}
  `,
}

export default Styled
