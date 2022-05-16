import styled, { css } from 'styled-components'
import Card from '../../../../components/Card'

const calcWidth = (n: number) => {
  return `calc((100% - (15px * ${n - 1})) / ${n})`
}

const Styled = {
  cardContainer: styled.div`
    width: ${calcWidth(3)};
    padding-bottom: 5px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
      width: ${calcWidth(2)};
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      width: 100%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
      width: ${calcWidth(4)};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
      width: ${calcWidth(5)};
    }
  `,
  card: styled(Card)``,
}

export default Styled
