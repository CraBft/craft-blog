import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { breakPoint } from '../../styles/theme'

export const mediaPadding = css`
  padding: 16px 32px;
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
  icon: styled(motion.img)`
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
  menu: styled(motion.div)`
    display: none;
    @media screen and (max-width: ${breakPoint.md}px) {
      display: flex;
    }
  `,
}

export default Styled
