import { motion } from 'framer-motion'
import { ViewportEventHandler } from 'framer-motion/types/motion/features/viewport/types'
import React from 'react'
import Styled from './Hero.styled'

export type HeroProps = {
  title: string
  subtitle: string
  image: {
    src: string
    alt: string
  }
  onViewportEnter: ViewportEventHandler
  onViewportLeave: ViewportEventHandler
  pathname: string
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, onViewportEnter, onViewportLeave, pathname }) => {
  return (
    <Styled.container onViewportEnter={onViewportEnter} onViewportLeave={onViewportLeave}>
      <Styled.image layoutId={`${pathname}-image`} {...image} />
      <Styled.infoContainer>
        <Styled.title layoutId={`${pathname}-title`}>{title}</Styled.title>
        <Styled.subtitle>{subtitle}</Styled.subtitle>
      </Styled.infoContainer>
    </Styled.container>
  )
}

export default Hero
