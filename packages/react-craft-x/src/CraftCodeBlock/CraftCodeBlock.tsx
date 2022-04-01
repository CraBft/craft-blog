import React from 'react'
import { CraftCodeBlock } from '@craftdocs/craft-extension-api'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light'
import { theme } from '../theme'

export type CraftCodeBlockProps = {
  block: CraftCodeBlock
}

const CraftCodeBlock: React.VFC<CraftCodeBlockProps> = ({
  block,
  ...props
}) => {
  const { language, code } = block

  return (
    <SyntaxHighlighter
      language={language}
      style={{
        ...a11yLight,
        hljs: {
          ...a11yLight.hljs,
          background: theme.light.background[block.color],
          padding: '8px 28px 8px 12px',
          borderRadius: '4px',
        },
      }}
      useInlineStyles={true}
      {...props}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CraftCodeBlock
