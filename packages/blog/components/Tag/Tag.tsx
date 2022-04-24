import { MouseEventHandler } from 'react'
import Styled, { SProps } from './Tag.styled'

export interface TagProps extends SProps {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement> &
    ((event: React.MouseEventHandler<HTMLButtonElement>) => void | undefined)
}

const Tag: React.FC<TagProps> = ({ name, onClick, view }) => (
  <Styled.tag view={view} onClick={onClick}>
    {name}
  </Styled.tag>
)

export default Tag
