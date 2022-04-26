import styled from 'styled-components'

const Styled = {
  container: styled.main`
    box-sizing: content-box;

    margin: 87px 16px 0 16px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
      max-width: calc(${({ theme }) => theme.breakpoint.xl} - 32px);
      margin: 87px auto 0 auto;
    }
  `,
}
export default Styled
