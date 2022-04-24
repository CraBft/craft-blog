import { theme } from '../../styles/theme'
import styled, { css } from 'styled-components'
import { TagProps } from './Tag'

const tagTheme = {
  menu: {
    padding: '4px 26px',

    color: theme.color.black,
    fontSize: '21px',
    fontWeight: 'bold',

    backgroundColor: theme.color.white,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '29px',
  },
  card: {
    padding: '4px 7px',

    color: theme.color.white,
    fontSize: '10px',
    fontWeight: 'normal',

    backgroundColor: theme.color.grey300,
    boxShadow: '',
    borderRadius: '24px',
  },
  content: {
    padding: '4px 26px',

    color: theme.color.black,
    fontSize: '14px',
    fontWeight: 500,

    backgroundColor: theme.color.grey200,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '29px',
  },
}

export interface SProps {
  view: 'menu' | 'card' | 'content'
}

const Styled = {
  tag: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    cursor: pointer;

    ${({ view }: SProps) =>
      view &&
      css`
        padding: ${tagTheme[view]['padding']};

        color: ${tagTheme[view]['color']};
        font-size: ${tagTheme[view]['fontSize']};
        font-weight: ${tagTheme[view]['fontWeight']};

        background-color: ${tagTheme[view]['backgroundColor']};
        box-shadow: ${tagTheme[view]['boxShadow']};
        border-radius: ${tagTheme[view]['borderRadius']};
      `}
  `,
}

export default Styled
