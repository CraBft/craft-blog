import { MouseEventHandler } from 'react'
import Styled, { SProps } from './Tag.styled'

export interface TagProps extends SProps {
  name: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  style?: React.CSSProperties
}

const Tag: React.FC<TagProps> = ({ name, onClick, view, style }) => (
  <Styled.tag view={view} onClick={onClick} style={style}>
    {name}
  </Styled.tag>
)

export default Tag
