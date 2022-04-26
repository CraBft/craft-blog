import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledCard, StyledTitle, StyledDescription, StyledLogo, StyledNextIcon } from './Card.Styled'

export type CardProps = {
  logoImgUrl: string
  logoImgAlt?: string
  logoImgWidth?: number
  blogName?: string
  blogPlatform?: string
  onClickRoutePath: string
}

export default function Card(props: CardProps): JSX.Element {
  let navigate = useNavigate()

  function handleOnClickCard(event: React.MouseEvent) {
    event.preventDefault()
    navigate(props.onClickRoutePath)
  }

  return (
    <StyledCard onClick={handleOnClickCard}>
      <StyledLogo
        src={props.logoImgUrl}
        width={props.logoImgWidth ?? 64}
        alt={props.logoImgAlt ?? 'Platform logo image'}
      />
      <StyledNextIcon />
      <StyledTitle>Publish to {props.blogName}</StyledTitle>
      <StyledDescription>Publish to {props.blogPlatform}</StyledDescription>
    </StyledCard>
  )
}
