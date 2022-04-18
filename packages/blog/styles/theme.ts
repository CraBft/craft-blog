import {} from 'styled-components'

const color = {
  main: '#558FFF',
  white: '#FDFDFD',
  black: '#030303',
  grey100: '#F5F5F7',
  grey200: '#EDEDED',
  grey300: '#ACACAC',
  grey400: '#737373',
} as const

export const theme = {
  color,
}

export type Theme = typeof theme
