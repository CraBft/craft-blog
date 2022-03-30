import styled from 'styled-components'
import { theme } from '../theme'

const Styled = {
  container: styled.div`
    box-sizing: border-box;
    max-width: ${theme.screen.maxWidth};
    padding-left: ${theme.screen.paddingX};
    padding-right: ${theme.screen.paddingX};
  `,
}

export default Styled
