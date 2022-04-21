import { motion } from 'framer-motion'
import styled from 'styled-components'
import { breakPoint } from '../../../styles/theme'
import { mediaPadding } from '../Header.styled'

const Styled = {
  container: styled(motion.div)`
    width: 100%;

    max-width: ${breakPoint.xl}px;
    margin-left: auto;
    margin-right: auto;

    ${mediaPadding}

    display: flex;
    gap: 24px;

    flex-direction: row;
    align-items: flex-start;
    @media screen and (max-width: ${breakPoint.md}px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  image: styled(motion.img)`
    width: 180px;
    height: 180px;

    @media screen and (max-width: ${breakPoint.lg}px) {
      width: 120px;
      height: 120px;
    }
    @media screen and (max-width: ${breakPoint.md}px) {
      width: 100px;
      height: 100px;
    }

    border-radius: 50%;
  `,
  infoContainer: styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 8px;
    margin-bottom: 8px;

    align-items: flex-start;
    @media screen and (max-width: ${breakPoint.md}px) {
      align-items: center;
    }
  `,
  title: styled(motion.h1)`
    display: flex;
    align-items: center;
    font-size: 36px;
    font-weight: bold;
    line-height: 1.2;

    @media screen and (max-width: ${breakPoint.md}px) {
      font-size: 24px;
    }
  `,
  description: styled(motion.p)`
    font-size: 16px;
    font-weight: normal;
    line-height: 1.2;
  `,
}

export default Styled
