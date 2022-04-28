import React from 'react'
import { Styled } from './BlogConfigBox.Styled'

export type BlogConfigBoxProps = {
  title: string
  description: string
  inputType: 'text' | 'select'
}

export default function BlogConfigBox(props: BlogConfigBoxProps): JSX.Element {
  return (
    <Styled.form>
      <Styled.title>{props.title}</Styled.title>
      <Styled.description>{props.description}</Styled.description>
      {props.inputType == 'text' ? <Styled.input placeholder="" /> : <Styled.select />}
      <Styled.submit value="submit">hello</Styled.submit>
    </Styled.form>
  )
}
