import styled from 'styled-components'
import { motion } from 'framer-motion'

const Styled = {
  container: styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;

    width: 100%;
    min-height: 100vh;
    min-height: --webkit-fill-available;
    max-height: 100vh;
    max-height: --webkit-fill-available;
  `,
  menu: styled(motion.aside)`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    /* stylelint-disable-next-line no-descending-specificity */
    & > * {
      margin-right: 16px;
    }
    & > *:last-child {
      margin-right: 0;
    }

    width: 80%;
    max-width: 480px;
    height: 100vh;
    padding: 16px;
    padding-top: 80px;

    background-color: ${({ theme }) => theme.color.grey100};
  `,
  link: styled(motion.a)`
    display: inline;

    font-weight: 600;
    font-size: 24px;

    &:hover {
      box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.black};
    }
  `,
  outside: styled(motion.div)`
    display: flex;
    flex-shrink: 1;

    width: 100%;
    height: 100vh;
  `,
}

export default Styled
