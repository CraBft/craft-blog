import { css } from 'styled-components'

const color = {
  main: '#558FFF',
  white: '#FDFDFD',
  black: '#030303',
  grey100: '#F5F5F7',
  grey200: '#EDEDED',
  grey300: '#ACACAC',
  grey400: '#737373',
} as const

const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
} as const

export const theme = {
  color,
  breakpoint,
}

export const breakPoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const

export type Theme = typeof theme
