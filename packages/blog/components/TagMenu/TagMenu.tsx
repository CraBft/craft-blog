import React, { useRef, useState } from 'react'
import { useConveyer } from '@egjs/react-conveyer'
import { theme } from '../../styles/theme'
import Tag from '../Tag'
import Styled from './TagMenu.styled'

export interface TagMenuProps {
  tags: string[]
}

const TagMenu: React.FC<TagMenuProps> = ({ tags }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isReachEnd, isReachStart, scrollIntoView } = useConveyer(scrollRef, {
    horizontal: true,
  })
  const [selectedTag, setSelectedTag] = useState('all')

  const activeStyle = {
    color: theme.color.white,
    backgroundColor: theme.color.main,
  }

  return (
    <Styled.container>
      {!isReachStart && <Styled.leftShadow />}
      {!isReachEnd && <Styled.rightShadow />}
      <Styled.scrollbar ref={scrollRef}>
        <Tag
          name={'all'}
          onClick={() => setSelectedTag('all')}
          view={'menu'}
          style={selectedTag === 'all' ? activeStyle : {}}
        />
        {tags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            onClick={(e) => {
              scrollIntoView(e.currentTarget, {
                duration: 500,
                align: 'center',
                excludeStand: true,
              })
              setSelectedTag(tag)
            }}
            view={'menu'}
            style={selectedTag === tag ? activeStyle : {}}
          />
        ))}
      </Styled.scrollbar>
    </Styled.container>
  )
}

export default TagMenu
