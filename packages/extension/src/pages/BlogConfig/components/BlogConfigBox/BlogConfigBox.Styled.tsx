import styled from 'styled-components'

export const Styled = {
  form: styled.form``,
  title: styled.h1``,
  description: styled.div``,
  input: styled.input``,
  select: styled.select``,
  submit: styled.button.attrs((props) => {
    type: 'submit'
  })``,
}
