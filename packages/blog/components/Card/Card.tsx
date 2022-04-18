import React from 'react'
import Styled from './Card.styled'

export interface CardProps {
  img?: string
  alt?: string
  title: string
  description?: string
  date: string
  tags?: string[]
}

export default function Card({ img, alt, title, description, date, tags, ...props }: CardProps) {
  //todo: tag 컴포넌트 완성되면 추가하기
  return (
    <Styled.rootContainer {...props}>
      {img ? <Styled.img src={img} alt={alt}></Styled.img> : ''}
      <Styled.title>{title}</Styled.title>
      <Styled.description>{description}</Styled.description>
      <Styled.botContainer>
        {/*tag components  */}
        <Styled.date>{date}</Styled.date>
      </Styled.botContainer>
    </Styled.rootContainer>
  )
}
