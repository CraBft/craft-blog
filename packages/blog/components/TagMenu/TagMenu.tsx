import React, { useEffect, useState, useRef, useCallback } from 'react'
import { theme } from '../../styles/theme'
import Tag from '../Tag/Tag'
import Styled from './TagMenu.styled'

export interface TagMenuProps {
  tags: string[]
}

type edgeType = 'left' | 'right' | 'both' | 'none'

const TagMenu: React.FC<TagMenuProps> = ({ tags }) => {
  const scrollRef = useRef<any>()
  const [edge, setEdge] = useState<edgeType>('none')
  const [selectedTag, setSelectedTag] = useState(0)
  const activeStyle = {
    color: theme.color.white,
    backgroundColor: theme.color.main,
  }

  const handleEdge = useCallback(
    ({ scrollLeft, scrollWidth, clientWidth }: { scrollLeft: number; scrollWidth: number; clientWidth: number }) => {
      const scrollRange = scrollWidth - clientWidth
      if (scrollRange === 0) setEdge('none')
      else if (scrollLeft === 0) setEdge('right')
      else if (scrollLeft === scrollRange) setEdge('left')
      else setEdge('both')
    },
    []
  )

  useEffect(() => {
    handleEdge(scrollRef.current)
  }, [handleEdge, scrollRef])

  const onTagMenuScroll = (e: React.UIEvent<HTMLElement>) => {
    handleEdge(e.currentTarget)
    e.stopPropagation()
  }

  return (
    <Styled.container>
      {edge === 'left' || edge === 'both' ? <Styled.leftShadow /> : <></>}
      {edge === 'right' || edge === 'both' ? <Styled.rightShadow /> : <></>}
      <Styled.scrollbar ref={scrollRef} onScroll={onTagMenuScroll}>
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            name={tag}
            onClick={(e) => setSelectedTag(idx)}
            view={'menu'}
            style={selectedTag === idx ? activeStyle : {}}
          />
        ))}
      </Styled.scrollbar>
    </Styled.container>
  )
}

export default TagMenu
