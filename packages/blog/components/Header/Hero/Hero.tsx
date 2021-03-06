import { motion } from 'framer-motion'
import { ViewportEventHandler } from 'framer-motion/types/motion/features/viewport/types'
import React from 'react'
import Styled from './Hero.styled'

export type HeroProps = {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  onViewportEnter: ViewportEventHandler
  onViewportLeave: ViewportEventHandler
  pathname: string
}

export default function Hero({
  image,
  title,
  description,
  onViewportEnter,
  onViewportLeave,
  pathname,
}: HeroProps): JSX.Element {
  return (
    <Styled.container onViewportEnter={onViewportEnter} onViewportLeave={onViewportLeave}>
      <Styled.image layoutId={`${pathname}-image`} {...image} />
      <Styled.infoContainer>
        <Styled.title layoutId={`${pathname}-title`}>{title}</Styled.title>
        <Styled.description>{description}</Styled.description>
      </Styled.infoContainer>
    </Styled.container>
  )
}
