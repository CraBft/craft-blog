import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaPadding } from '../Header.styled'

const Styled = {
  container: styled(motion.div)`
    display: flex;
    flex-direction: row;
    /* stylelint-disable-next-line no-descending-specificity */
    & > * {
      margin-right: 24px;
    }
    & > *:last-child {
      margin-right: 0;
    }
    align-items: flex-start;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoint.xl};

    margin-right: auto;
    margin-left: auto;
    ${mediaPadding}

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      flex-direction: column;
      align-items: center;
    }
  `,
  image: styled(motion.img)`
    width: 180px;
    height: 180px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
      width: 120px;
      height: 120px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      width: 100px;
      height: 100px;
    }

    border-radius: 50%;
  `,
  infoContainer: styled(motion.div)`
    display: flex;
    flex-direction: column;
    /* stylelint-disable-next-line no-descending-specificity */
    & > * {
      margin-right: 16px;
    }
    & > *:last-child {
      margin-right: 0;
    }
    align-items: flex-start;

    margin-top: 8px;
    margin-bottom: 8px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      align-items: center;
    }
  `,
  title: styled(motion.h1)`
    display: flex;
    align-items: center;

    font-weight: bold;
    font-size: 36px;
    line-height: 1.2;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      font-size: 24px;
    }
  `,
  description: styled(motion.p)`
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;
  `,
}

export default Styled
