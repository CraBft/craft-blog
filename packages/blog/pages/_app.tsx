import { AppProps } from 'next/app'
import GlobalStyle from '../styles/glolbal-style'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import 'katex/dist/katex.min.css'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
