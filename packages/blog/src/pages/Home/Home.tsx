import React from 'react'
import { GetStaticProps } from '../../../pages/index'
import CardGrid from './CardGrid/CardGrid'
import Styled from './Home.styled'

export default function Home({ posts }: GetStaticProps) {
  //todo: 태그 리스트 추가 예정
  //todo: 로컬에서 값 읽어오기 수정
  return (
    <Styled.container>
      <CardGrid />
    </Styled.container>
  )
}
