import { CraftCardStyle } from '@craftdocs/craft-extension-api'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

import abstract1 from '../assets/plugin.bg.abstract.1.jpg'
import abstract2 from '../assets/plugin.bg.abstract.2.jpg'
import abstract3 from '../assets/plugin.bg.abstract.3.jpg'
import abstract4 from '../assets/plugin.bg.abstract.4.jpg'
import nature1 from '../assets/plugin.bg.nature.1.jpg'
import nature2 from '../assets/plugin.bg.nature.2.jpg'
import nature3 from '../assets/plugin.bg.nature.3.jpg'
import nature4 from '../assets/plugin.bg.nature.4.jpg'

const pluginBg = {
  'local:plugin.bg.abstract.1': abstract1.src,
  'local:plugin.bg.abstract.2': abstract2.src,
  'local:plugin.bg.abstract.3': abstract3.src,
  'local:plugin.bg.abstract.4': abstract4.src,
  'local:plugin.bg.nature.1': nature1.src,
  'local:plugin.bg.nature.2': nature2.src,
  'local:plugin.bg.nature.3': nature3.src,
  'local:plugin.bg.nature.4': nature4.src,
}

const baseStyle = (style: CraftCardStyle) => {
  const { isLightColor, backgroundColorKey, backgroundUrl } = style
  const colors = (style.backgroundColor ?? '#FFFFFF #303436').split(' ')

  return css`
    box-sizing: border-box;
    margin: 2px 3px;
    margin-bottom: 8px;
    padding: 25px;
    overflow: hidden;

    color: ${isLightColor ? 'black' : 'white'};

    background-color: ${colors[0]};
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 1px;

    transition: all 0.3s ease 0s;

    ${backgroundUrl &&
    css`
      content: '';
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
        url(${pluginBg[backgroundUrl as keyof typeof pluginBg] ?? backgroundUrl});
      background-size: cover;
      background-position: center;
    `};
  `
}

type StyledCardProps = {
  style: CraftCardStyle
  children: ReactNode
  className: string
}

const Styled = {
  subtle: styled(({ style, children, ...props }: StyledCardProps) => <div {...props}>{children}</div>)`
    ${({ style }) => baseStyle(style)}
    display: inline-flex;
    width: calc(100% / 2 - 6px);
    @media screen and (min-width: 560px) {
      width: calc(100% / 3 - 6px);
    }
    height: 140px;
  `,
  small: styled(({ style, children, ...props }: StyledCardProps) => <div {...props}>{children}</div>)`
    ${({ style }) => baseStyle(style)}
    display: inline-flex;
    width: calc(100% / 2 - 6px);
    @media screen and (min-width: 560px) {
      width: calc(100% / 3 - 6px);
    }
    height: 140px;
  `,
  square: styled(({ style, children, ...props }: StyledCardProps) => <div {...props}>{children}</div>)`
    ${({ style }) => baseStyle(style)}
    display: inline-flex;
    width: calc(100% / 2 - 6px);
    @media screen and (min-width: 560px) {
      width: calc(100% / 3 - 6px);
    }
    height: 220px;
  `,
  wide: styled(({ style, children, ...props }: StyledCardProps) => <div {...props}>{children}</div>)`
    ${({ style }) => baseStyle(style)}
    height: 140px;
  `,
  large: styled(({ style, children, ...props }: StyledCardProps) => <div {...props}>{children}</div>)`
    ${({ style }) => baseStyle(style)}
    height: 240px;
  `,
}

export default Styled
