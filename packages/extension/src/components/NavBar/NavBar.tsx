import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledBackIcon, StyledNavBar, StyledPageName } from './NavBar.Styled'

export type NavBarProps = {
  isHome?: boolean
  pageName: string
}

export default function NavBar(props: NavBarProps): JSX.Element {
  let navigate = useNavigate()

  function handlePrev(event: React.MouseEvent) {
    event.preventDefault()
    navigate(-1)
  }

  return (
    <StyledNavBar>
      <StyledBackIcon visibility={props.isHome ? 'hidden' : 'visible'} onClick={handlePrev} />
      <StyledPageName>{props.pageName}</StyledPageName>
    </StyledNavBar>
  )
}
