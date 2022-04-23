import styled from 'styled-components'
import { breakpoint } from '../../styles/theme'

const Styled = {
  container: styled.footer`
    width: 100%;
    /* background-color: #ffffff; */
    background-color: #f5f5f7;

    position: absolute;
    padding: 48px 60px;
    bottom: 0;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: ${breakpoint.md}px) {
      padding: 50px 30px;
    }
  `,
  ul: styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `,
  li: styled.li``,
  anchor: styled.a`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #000000;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  p: styled.p`
    display: flex;
    justify-content: center;
    font-size: 15px;
  `,
}

export default Styled
