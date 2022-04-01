import { CraftUrlBlock } from '@craftdocs/craft-extension-api'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

const Styled = {
  a: styled.a`
    display: inline-flex;
    width: auto;

    color: inherit;
    text-decoration: none;
  `,
  icon: styled.div<{
    block: CraftUrlBlock
  }>`
    ${({ block }) => {
      if (block.layoutStyle === 'small') {
        return css`
          width: 36px;
          max-width: 36px;
          height: 36px;
          padding: 8px;
        `
      }
      if (block.layoutStyle === 'regular') {
        return css`
          width: 56px;
          max-width: 56px;
          height: 56px;
          padding: 8px;
        `
      }
      if (block.layoutStyle === 'card') {
        return css`
          width: 100%;
          min-height: 1px;
          flex-basis: 1px;
          flex-grow: 1;
          margin: 0px;
          box-sizing: border-box;
        `
      }
    }}
  `,
  img: styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: #dfdfdf;
    border-radius: 4px;
    object-fit: cover;
  `,
  meta: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    min-width: 10px;
    padding: 8px;
    box-sizing: border-box;
  `,
  title: styled.div`
    font-size: 16px;
    font-weight: 500;
    color: rgb(31, 34, 37);
    line-height: 1.2;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  description: styled.div`
    font-size: 14px;
    font-weight: 400;
    opacity: 0.66;
    color: rgb(31, 34, 37);
    line-height: 1.2;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  url: styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgb(161, 162, 163);
    line-height: 1.2;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  regular: styled.div``,
  small: styled.div`
    max-width: 545px;
  `,
  card: styled.div`
    display: flex;
    flex-direction: column;
    /* -webkit-box-flex: 1; */
    flex-grow: 1;

    min-width: 10px;
    max-width: 230px;
    height: 230px;
  `,
}

export const CSS = {
  base: (block: CraftUrlBlock) => css`
    display: flex;
    width: 100%;
    border-radius: 4px;
    background-color: ${!block.hasBlockDecoration && block.color === 'text'
      ? '#f7f7f7'
      : theme.light.background[block.color]};
  `,
}

export default Styled
