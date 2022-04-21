import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { breakPoint } from '../../styles/theme'
import { BiSearch, BiMenu } from 'react-icons/bi'

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
    justify-content: space-between;
    align-items: center;

    ${mediaPadding}

    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  `,
  flexContainer: styled(motion.div)`
    display: flex;

    align-items: center;

    gap: 8px;
  `,
  anchor: styled(motion.a)`
    display: flex;
    align-items: center;
    gap: 4px;

    color: inherit;
    text-decoration: inherit;
  `,
  blogImage: styled(motion.img)`
    border-radius: 50%;
    width: 32px;
    height: 32px;

    display: block;
    @media screen and (max-width: ${breakPoint.md}px) {
      display: none;
    }
  `,
  title: styled(motion.h1)`
    margin: 0;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 600;
  `,
  menuContainer: styled(motion.div)`
    display: none;
    @media screen and (max-width: ${breakPoint.md}px) {
      display: flex;
    }
  `,
  iconButtonWrapper: styled(motion.button)`
    width: 24px;
    height: 24px;
  `,
  search: styled(BiSearch)`
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.black};
  `,
  menu: styled(BiMenu)`
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.black};
  `,
}

export default Styled
