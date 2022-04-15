import { motion } from "framer-motion";
import styled from "styled-components";

const Styled = {
  rootContainer: styled(motion.header)`
    position: fixed;

    display: flex;
    width: 100%;
  `,
  mainContainer: styled(motion.div)`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1536px;

    padding: 8px 16px;

    margin-left: auto;
    margin-right: auto;
  `,
  leftContainer: styled(motion.div)`
    display: flex;

    align-items: center;

    gap: 8px;
  `,
  image: styled(motion.img)`
    border-radius: 50%;
  `,
  infoContainer: styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  title: styled(motion.h1)`
    margin: 0;
    font-weight: 600;
  `,
  subtitle: styled(motion.h2)`
    margin: 0;
    font-weight: 400;
  `,
  rigthContainer: styled(motion.div)`
    display: flex;
  `,
  search: styled(motion.div)``,
};

export default Styled;
