import React, { useState } from "react";
import { useViewportScroll, MotionConfig } from "framer-motion";
import Styled from "./Header.styled";

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const { scrollY } = useViewportScroll();
  const [isHero, setIsHero] = useState(scrollY.get() < 200);

  scrollY.onChange((value) => {
    if (value < 200) {
      setIsHero(true);
    } else {
      setIsHero(false);
    }
  });

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "tween",
      }}
    >
      <Styled.rootContainer
        initial={scrollY.get() < 200 ? "hero" : "header"}
        animate={isHero ? "hero" : "header"}
        variants={{
          hero: {
            paddingTop: "64px",
            backgroundColor: "#ffffff",
            boxShadow: `0px`,
          },
          header: {
            paddingTop: "0px",
            backgroundColor: "#F5F5F7",
            boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Styled.mainContainer>
          <Styled.leftContainer>
            <Styled.image
              src="https://avatars.githubusercontent.com/u/48559454?v=4"
              alt="JaeSeoKim's avatar"
              variants={{
                hero: {
                  width: "200px",
                  height: "200px",
                },
                header: {
                  width: "36px",
                  height: "36px",
                },
              }}
            />
            <Styled.infoContainer>
              <Styled.title
                variants={{
                  hero: {
                    fontSize: "36px",
                  },
                  header: {
                    fontSize: "24px",
                  },
                }}
              >
                JaeSeoKim
              </Styled.title>
              <Styled.subtitle
                variants={{
                  hero: {
                    fontSize: "24px",
                    opacity: 1,
                    scale: 1,
                    display: "flex",
                  },
                  header: {
                    opacity: 0,
                    scale: 0,
                    display: "none",
                  },
                }}
              >
                Frontend Developer
              </Styled.subtitle>
            </Styled.infoContainer>
          </Styled.leftContainer>
          <Styled.rigthContainer>right</Styled.rigthContainer>
        </Styled.mainContainer>
      </Styled.rootContainer>
    </MotionConfig>
  );
};

export default Header;
