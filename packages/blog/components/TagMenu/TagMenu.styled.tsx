import styled from 'styled-components'

const Styled = {
  container: styled.div`
    position: relative;

    width: 100%;

    background-color: ${({ theme }) => theme.color.grey200};
    border-radius: 7px;
  `,
  scrollbar: styled.div`
    display: block;
    width: 100%;
    padding: 8px 12px;

    overflow-x: auto;
    overflow-y: hidden;

    white-space: nowrap;
    overscroll-behavior: none;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar {
      display: none;
    }
    &::-o-scrollbar {
      display: none;
    }

    & > button {
      margin-right: 8px;
    }
    & > :last-child {
      margin-right: 0;
    }
  `,
  leftShadow: styled.div`
    position: absolute;
    top: 0;
    left: 0;

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

    width: 100%;
    height: 100%;

    border-radius: 0px 7px 7px 0;
    box-shadow: inset -7px 0 9px -7px rgba(0, 0, 0, 0.4);

    pointer-events: none;
  `,
}

export default Styled
