import styled from 'styled-components'

const Styled = {
  container: styled.div`
    position: relative;

    width: 100%;
    height: 65px;

    background-color: ${({ theme }) => theme.color.grey200};
    border-radius: 7px;
  `,
  scrollbar: styled.div`
    position: relative;
    z-index: 1;

    display: flex;
    width: 100%;
    height: 100%;
    padding: 16px 20px;

    overflow-x: scroll;

    column-gap: 9px;

    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  leftShadow: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    border-radius: 7px 0 0 7px;
    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4);

    pointer-events: none;
  `,
  rightShadow: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    border-radius: 0px 7px 7px 0;
    box-shadow: inset -7px 0 9px -7px rgba(0, 0, 0, 0.4);

    pointer-events: none;
  `,
}

export default Styled
