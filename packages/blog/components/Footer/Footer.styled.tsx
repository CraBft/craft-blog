import styled from 'styled-components'
import { theme } from '../../styles/theme'

const Styled = {
  container: styled.footer`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 24px;
    padding: 48px 60px;

    background-color: #f5f5f7;

    @media screen and (max-width: ${theme.breakpoint.md}px) {
      padding: 50px 30px;
    }
  `,
  ul: styled.ul`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
  `,
  li: styled.li``,
  anchor: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    background-color: #000000;
    border-radius: 50%;
  `,
  p: styled.p`
    display: flex;
    justify-content: center;

    font-size: 15px;
  `,
}

export default Styled
