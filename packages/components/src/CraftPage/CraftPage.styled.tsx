import styled from 'styled-components'
import { theme } from '../theme'

const Styled = {
  container: styled.div`
    display: block;
    box-sizing: border-box;
    max-width: ${theme.screen.maxWidth};
    padding-right: ${theme.screen.paddingX};
    padding-left: ${theme.screen.paddingX};
  `,
}

export default Styled
