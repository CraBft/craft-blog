import React, { useEffect, useState } from 'react'
import { MotionConfig, LayoutGroup } from 'framer-motion'
import Styled from './Header.styled'
import Link from 'next/link'
import Hero from './Hero'
import { useRouter } from 'next/router'

const image = {
  src: 'https://avatars.githubusercontent.com/u/48559454?v=4',
  alt: "JaeSeoKim's avatar",
}

const title = 'JaeSeoKim'
const subtitle = '🎢 To become a better developer...!'

export type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter()
  const [isHome, setIsHome] = useState(router.pathname === '/')
  const [isShowHero, setIsShowHero] = useState(false)

  useEffect(() => {
    if (router.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [router.pathname])

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: 'tween',
      }}
    >
      <LayoutGroup>
        <Styled.rootContainer
          initial={[isShowHero ? 'hero' : 'header']}
          animate={[isShowHero ? 'hero' : 'header']}
          variants={{
            hero: {
              boxShadow: `0px`,
              backgroundColor: `rgba(255, 255, 255, 0)`,
            },
            header: {
              boxShadow: `rgb(0 0 0 0.2) 0px 1px 15px`,
              backgroundColor: `#F5F5F7`,
            },
          }}
        >
          <Styled.wrapContainer>
            <Styled.menu>menu</Styled.menu>
            <Styled.flexContainer>
              {!isShowHero && (
                <Link href={'/'} passHref>
                  <Styled.anchor>
                    <Styled.icon layoutId={`${router.pathname}-image`} src={image.src} alt={image.alt} />
                    <Styled.title layoutId={`${router.pathname}-title`}>{title}</Styled.title>
                  </Styled.anchor>
                </Link>
              )}
            </Styled.flexContainer>
            <Styled.flexContainer>right</Styled.flexContainer>
          </Styled.wrapContainer>
        </Styled.rootContainer>
        {isHome && (
          <Hero
            image={image}
            title={title}
            subtitle={subtitle}
            onViewportEnter={() => {
              setIsShowHero(true)
            }}
            onViewportLeave={() => {
              setIsShowHero(false)
            }}
            pathname={router.pathname}
          />
        )}
      </LayoutGroup>
    </MotionConfig>
  )
}

export default Header
