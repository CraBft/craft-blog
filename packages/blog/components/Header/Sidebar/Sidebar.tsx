import { MotionConfig } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Link as LinkType } from '../Header'
import Styled from './Sidebar.styled'

export type SidebarProps = {
  links: LinkType[]
  onClose: () => void
}

export default function SideBar({ links, onClose }: SidebarProps): JSX.Element {
  useEffect(() => {
    disableBodyScroll(document.body)
    return () => {
      enableBodyScroll(document.body)
    }
  }, [])

  return (
    <MotionConfig
      transition={{
        type: 'tween',
      }}
    >
      <Styled.container
        initial={'initial'}
        animate={'enter'}
        exit={'exit'}
        onViewportLeave={onClose}
        variants={{
          initial: {
            background: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
          },
          enter: {
            background: 'rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
          },
          exit: {
            background: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <Styled.menu
          variants={{
            initial: {
              x: -300,
              opacity: 0,
            },
            enter: {
              x: 0,
              opacity: 1,
            },
            exit: {
              x: -300,
              opacity: 0,
            },
          }}
        >
          {links.map((link, i) => (
            <div key={i}>
              <Link href={link.url} passHref>
                <Styled.link
                  variants={{
                    initial: {
                      opacity: 0,
                    },
                    enter: {
                      opacity: 1,
                    },
                    exit: {
                      opacity: 0,
                    },
                  }}
                >
                  {link.name}
                </Styled.link>
              </Link>
            </div>
          ))}
          {links.map((link, i) => (
            <div key={i}>
              <Link href={link.url} passHref>
                <Styled.link>{link.name}</Styled.link>
              </Link>
            </div>
          ))}
        </Styled.menu>
        <Styled.outside onTap={onClose} />
      </Styled.container>
    </MotionConfig>
  )
}
