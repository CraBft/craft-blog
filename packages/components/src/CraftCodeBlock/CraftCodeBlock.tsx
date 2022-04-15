import React from 'react'
import { CraftCodeBlock } from '@craftdocs/craft-extension-api'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light'
import TeX from '../react-katex'
import Styled from './CraftCodeBlock.styled'

export type CraftCodeBlockProps = {
  block: CraftCodeBlock
}

const CraftCodeBlock: React.VFC<CraftCodeBlockProps> = ({ block, ...props }) => {
  const { language, code } = block
  if (language === 'math_formula') {
    return (
      <Styled.Container block={block} Element={'div'}>
        <TeX math={code} block />
      </Styled.Container>
    )
  }

  return (
    <Styled.Container
      block={block}
      Element={SyntaxHighlighter}
      language={language}
      style={a11yLight}
      useInlineStyles={true}
      {...props}
    >
      {code}
    </Styled.Container>
  )
}

export default CraftCodeBlock
