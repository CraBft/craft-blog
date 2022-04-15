import { CraftHorizontalLineBlock } from '@craftdocs/craft-extension-api'
import styled from 'styled-components'
import { css } from 'styled-components'
import { theme } from '../theme'

const baseStyle = css`
  width: 100%;
  height: 27px;
  box-sizing: content-box;
  transition: all 0.3s ease 0s;
`

const Styled = {
  strong: styled.hr<{ block: CraftHorizontalLineBlock }>`
    ${baseStyle}
    border: none;
    background-image: linear-gradient(
      to right,
      ${({ block: { color } }) => theme.light.color[color]} 0%,
      ${({ block: { color } }) => theme.light.color[color]} 100%
    );
    background-position: left center;
    background-size: 100% 2px;
    background-repeat: repeat-x;
  `,
  regular: styled.hr<{ block: CraftHorizontalLineBlock }>`
    ${baseStyle}
    border: none;
    background-image: linear-gradient(
      to right,
      ${({ block: { color } }) => theme.light.color[color]} 0%,
      ${({ block: { color } }) => theme.light.color[color]} 100%
    );
    background-position: left center;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  `,
  light: styled.hr<{ block: CraftHorizontalLineBlock }>`
    ${baseStyle}
    border: none;
    background-image: linear-gradient(
      to right,
      ${({ block: { color } }) => theme.light.color[color]} 25%,
      transparent 0%
    );
    background-position: left center;
    background-size: 6px 1px;
    background-repeat: repeat-x;
  `,
  extraLight: styled.hr<{ block: CraftHorizontalLineBlock }>`
    ${baseStyle}
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    &::before {
      content: '• • •';
      font-size: 2px;
    }
  `,
}

export default Styled
