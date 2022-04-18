import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context' // next 12
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/glolbal-style'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
