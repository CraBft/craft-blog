import React from 'react'
import { CraftTableBlock } from '@craftdocs/craft-extension-api'
import CraftBlock from '../CraftBlock'
import Styled from './CraftTableBlock.styled'

export type CraftTableBlockProps = {
  block: CraftTableBlock
}

const CraftTableBlock: React.VFC<CraftTableBlockProps> = ({ block, ...props }) => {
  const { tableStyle, rows, columns } = block

  return (
    <Styled.continaer {...props}>
      <Styled.table>
        <tbody>
          {rows.map((row, rindex) => {
            return (
              <Styled.tr
                key={rindex}
                alternatingRowColor={rindex % 2 === 0 ? tableStyle?.alternatingRowColor : undefined}
              >
                {row.cells.map((cell, cindex) => (
                  <Styled.td cellStyle={cell.style} columnStyle={columns && columns[cindex].style} key={cindex}>
                    {cell.block && <CraftBlock block={cell.block} />}
                  </Styled.td>
                ))}
              </Styled.tr>
            )
          })}
        </tbody>
      </Styled.table>
    </Styled.continaer>
  )
}

export default CraftTableBlock
