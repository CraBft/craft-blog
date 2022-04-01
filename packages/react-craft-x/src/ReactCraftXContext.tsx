import { CodeLanguage, CraftBlock } from '@craftdocs/craft-extension-api'
import React, { useContext } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light'
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark'

export type components = {
  Image: React.VFC<{
    src?: string
    alt?: string
    [spread: string]: any
  }>
  Link: React.FC<{
    href?: string
    [spread: string]: any
  }>
  Code: React.VFC<{
    code: string
    language: CodeLanguage
    darkmode: boolean
    [spread: string]: any
  }>
}

const defaultComponents: components = {
  // eslint-disable-next-line @next/next/no-img-element
  Image: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
  Link: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  Code: ({ code, language, darkmode, ...props }) => (
    <SyntaxHighlighter
      language={language}
      style={darkmode ? a11yDark : a11yLight}
    >
      {code}
    </SyntaxHighlighter>
  ),
}

export type ReactCraftXContext = {
  subBlocks: CraftBlock[]
  components: components
  documentBaseUrl: string
}

const defaultConfig = {
  subBlocks: [],
  components: defaultComponents,
  documentBaseUrl: '/',
}

export const ReactCraftXContext =
  React.createContext<ReactCraftXContext>(defaultConfig)

export const usePrevBlock = (index?: number) => {
  const context = useContext(ReactCraftXContext)
  if (context && typeof index !== 'undefined' && index !== 0) {
    return context.subBlocks[index - 1]
  }
  return undefined
}

export const useNextBlock = (index?: number) => {
  const context = useContext(ReactCraftXContext)
  if (
    context &&
    typeof index !== 'undefined' &&
    context.subBlocks.length > index + 1
  ) {
    return context.subBlocks[index + 1]
  }
  return undefined
}

export const ReactCraftXContextProvider: React.FC<{
  config: Partial<ReactCraftXContext>
}> = ({ children, config }) => {
  return (
    <ReactCraftXContext.Provider value={{ ...defaultConfig, ...config }}>
      {children}
    </ReactCraftXContext.Provider>
  )
}
