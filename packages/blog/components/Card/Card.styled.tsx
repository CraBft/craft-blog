import { theme } from 'react-craft-x/src/theme'
import styled from 'styled-components'

const Styled = {
  rootContainer: styled.section`
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 3px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    padding-bottom: 16px;
    overflow: hidden;
  `,
  img: styled.img`
    object-fit: cover;
    width: 100%;
  `,
  title: styled.h1`
    margin-top: 15px;
    margin-left: 16px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 6px;
  `,
  description: styled.p`
    margin-left: 16px;
    margin-right: 16px;
    color: ${({ theme }) => theme.color.grey400};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 40px;
    word-break: break-all;
    white-space: pre-wrap;
  `,
  date: styled.p`
    margin-left: 16px;
    color: ${({ theme }) => theme.color.grey400};
    font-weight: 400;
    font-size: 10px;
  `,
  botContainer: styled.div`
    display: flex;
  `,
}

export default Styled
