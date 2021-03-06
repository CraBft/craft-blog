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
    gap: 8px;
    align-items: center;
  `,
  anchor: styled(motion.a)`
    display: flex;
    gap: 4px;
    align-items: center;

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
    width: 24px;
    height: 24px;
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
    gap: 18px;

    margin-right: 12px;

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
