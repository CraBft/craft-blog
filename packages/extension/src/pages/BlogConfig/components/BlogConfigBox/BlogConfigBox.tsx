import React, { ReactNode } from 'react'
import { Styled } from './BlogConfigBox.Styled'

export type BlogConfigBoxProps = {
  title: string
  description: string
  children: ReactNode
}

export default function BlogConfigBox({ title, description, children }: BlogConfigBoxProps): JSX.Element {
  return (
    <Styled.container>
      <Styled.title>{title}</Styled.title>
      <Styled.description>{description}</Styled.description>
      {children}
    </Styled.container>
  )
}
