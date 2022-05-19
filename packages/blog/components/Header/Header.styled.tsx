import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'

export const mediaPadding = css`
  padding: 16px 16px;
`

const Styled = {
  rootContainer: styled(motion.header)`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;

    width: 100%;
  `,
  wrapContainer: styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    ${mediaPadding}
  `,
  flexContainer: styled(motion.div)`
    display: flex;
    align-items: center;
    & > * {
      margin-right: 8px;
    }
    & > *:last-child {
      margin-right: 0;
    }
  `,
  anchor: styled(motion.a)`
    display: flex;

    /* stylelint-disable-next-line no-descending-specificity */
    & > * {
      margin-right: 4px;
    }
    & > *:last-child {
      margin-right: 0;
    }

    align-items: center;
    margin: -8px;
    padding: 8px;

    color: inherit;
    text-decoration: inherit;
  `,
  blogImage: styled(motion.img)`
    display: block;
    width: 32px;
    height: 32px;

    border-radius: 50%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      display: none;
    }
  `,
  title: styled(motion.h1)`
    margin: 0;
    margin-top: auto;
    margin-bottom: auto;

    font-weight: 600;
    font-size: 16px;
  `,
  menuContainer: styled(motion.div)`
    display: none;
    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      display: flex;
    }
  `,
  iconButtonWrapper: styled(motion.button)`
    width: calc(24px + 8px * 2);
    height: calc(24px + 8px * 2);
    margin: -8px;
    padding: 8px;
  `,
  search: styled(SearchIcon)`
    width: 100%;
    height: 100%;

    fill: ${({ theme }) => theme.color.black};
  `,
  menu: styled(MenuIcon)`
    width: 100%;
    height: 100%;

    fill: ${({ theme }) => theme.color.black};
    stroke: ${({ theme }) => theme.color.black};
  `,
  linkContainer: styled(motion.div)`
    display: flex;
    /* stylelint-disable-next-line no-descending-specificity */
    & > * {
      margin-right: 8px;
    }
    & > *:last-child {
      margin-right: 0;
    }
    margin-right: 16px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      display: none;
    }
  `,
  link: styled(motion.a)`
    font-weight: 600;
    font-size: 16px;

    &:hover {
      box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.black};
    }
  `,
}

export default Styled
