import React, { useEffect, useRef, useState } from 'react'
import { LayoutGroup, Variant, AnimatePresence } from 'framer-motion'
import Styled from './Header.styled'
import Link from 'next/link'
import Hero from './Hero'
import { useRouter } from 'next/router'
import { theme } from '../../styles/theme'
import Sidebar from './Sidebar'

const image = {
  src: 'https://avatars.githubusercontent.com/u/48559454?v=4',
  alt: "JaeSeoKim's avatar",
}

const title = 'JaeSeoKim'
const description = '🎢 To become a better developer...!'
const links: Link[] = [
  {
    name: 'about',
    url: '#',
  },
  {
    name: 'link1',
    url: '#',
  },
  {
    name: 'link2',
    url: '#',
  },
]

export type Link = {
  name: string
  url: string
}

export type HeaderProps = {}

export default function Header({}: HeaderProps): JSX.Element {
  const router = useRouter()
  const [pathname, setPathname] = useState(router.pathname)
  const isHome = pathname === '/'
  const [isShowHero, setIsShowHero] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const hoverAnimation: Variant = {
    scale: 1.1,
    transition: {
      type: 'spring',
    },
  }

  useEffect(() => {
    setPathname(router.pathname)
    setIsShowHero(false)
  }, [router.pathname])

  return (
    <LayoutGroup id={pathname}>
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
            backgroundColor: theme.color.grey100,
          },
        }}
      >
        <Styled.wrapContainer>
          <Styled.menuContainer>
            <AnimatePresence>
              {isSidebarOpen && <Sidebar links={links} onClose={() => setIsSidebarOpen(false)} />}
            </AnimatePresence>
            <Styled.iconButtonWrapper
              style={{
                zIndex: 1,
              }}
              aria-label="menu button"
              onClick={() => setIsSidebarOpen((p) => !p)}
              whileHover={hoverAnimation}
            >
              <Styled.menu isOpen={isSidebarOpen} />
            </Styled.iconButtonWrapper>
          </Styled.menuContainer>
          <Styled.flexContainer>
            {!isShowHero && (
              <Link href={'/'} passHref>
                <Styled.anchor>
                  <Styled.blogImage
                    layoutId={`${router.pathname}-image`}
                    key={`${router.pathname}-image`}
                    src={image.src}
                    alt={image.alt}
                  />
                  <Styled.title layoutId={`${router.pathname}-title`} key={`${router.pathname}-title`}>
                    {title}
                  </Styled.title>
                </Styled.anchor>
              </Link>
            )}
          </Styled.flexContainer>
          <Styled.flexContainer>
            <Styled.linkContainer>
              {links.map((link, i) => (
                <Link href={link.url} passHref key={i}>
                  <Styled.link>{link.name}</Styled.link>
                </Link>
              ))}
            </Styled.linkContainer>
            <Styled.iconButtonWrapper aria-label="search button" whileHover={hoverAnimation}>
              <Styled.search />
            </Styled.iconButtonWrapper>
          </Styled.flexContainer>
        </Styled.wrapContainer>
      </Styled.rootContainer>
      {isHome && (
        <Hero
          image={image}
          title={title}
          description={description}
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
  )
}
