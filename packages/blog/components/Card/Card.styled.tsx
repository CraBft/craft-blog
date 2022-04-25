import styled from 'styled-components'

const Styled = {
  rootContainer: styled.section`
    padding-bottom: 16px;

    overflow: hidden;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 3px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  `,
  img: styled.img`
    width: 100%;

    object-fit: cover;
  `,
  title: styled.h1`
    margin-top: 15px;
    margin-bottom: 6px;
    margin-left: 16px;

    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  `,
  description: styled.p`
    margin-right: 16px;
    margin-bottom: 40px;
    margin-left: 16px;

    color: ${({ theme }) => theme.color.grey400};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    white-space: pre-wrap;
    word-break: break-all;
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
