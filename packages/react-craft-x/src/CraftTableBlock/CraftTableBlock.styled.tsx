import {
  CraftTableCellFillColor,
  CraftTableCellStyle,
  CraftTableColumnStyle,
} from '@craftdocs/craft-extension-api'
import styled, { css } from 'styled-components'
import { theme } from '../theme'

const Styled = {
  continaer: styled.div`
    width: 100%;
    overflow: scroll;
  `,
  table: styled.table`
    width: 100%;
    border: 1px solid rgb(227, 227, 227);
    border-collapse: collapse;
    border-radius: 4px;
    & > tr:last-child > td {
      border-bottom: none;
    }
  `,
  tr: styled.tr<{
    alternatingRowColor?: CraftTableCellFillColor
  }>`
    ${({ alternatingRowColor }) =>
      alternatingRowColor &&
      css`
        background-color: ${theme.light.table.fillColor[alternatingRowColor]};
      `}
    & > td {
      border-left: 1px solid rgb(227, 227, 227);
      border-bottom: 1px solid rgb(227, 227, 227);
      border-radius: 0px;
    }
    & > td:first-child {
      border-left: none;
    }
  `,
  td: styled.td<{
    cellStyle?: CraftTableCellStyle
    columnStyle?: CraftTableColumnStyle
  }>`
    ${({ cellStyle }) =>
      cellStyle?.fillColor &&
      css`
        background-color: ${theme.light.table.fillColor[cellStyle.fillColor]};
      `};
    min-width: ${({ columnStyle }) =>
      columnStyle?.width
        ? `${(parseFloat(columnStyle?.width) / 100) * 168}px`
        : '168px'};
    height: 27px;
    padding: 4px 6px;
  `,
}

export default Styled
