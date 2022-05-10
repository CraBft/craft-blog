import React from 'react'
import Styled from './Button.Styled'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

function Button({ children, ...props }: ButtonProps): JSX.Element {
  return <Styled.button {...props}>{children}</Styled.button>
}

export default Button
