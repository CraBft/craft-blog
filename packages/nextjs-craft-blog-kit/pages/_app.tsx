import { AppProps } from "next/app";
import GlobalStyle from "../styles/glolbal-style";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
