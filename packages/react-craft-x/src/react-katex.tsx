import React, { ComponentPropsWithoutRef, useState, useEffect, ReactElement, ElementType, memo, useMemo } from 'react'
import KaTeX, { ParseError, KatexOptions } from 'katex'

const TeX: React.FC<TeXProps> = ({
  children,
  math,
  block,
  errorColor,
  renderError,
  settings,
  as: asComponent,
  ...props
}) => {
  const Component = asComponent || (block ? 'div' : 'span')
  const content = (children ?? math) as string

  const state = useMemo(() => {
    try {
      const innerHtml = KaTeX.renderToString(content, {
        displayMode: !!block,
        errorColor,
        throwOnError: !!renderError,
        ...settings,
      })

      return { innerHtml }
    } catch (error) {
      if (error instanceof ParseError || error instanceof TypeError) {
        if (renderError) {
          return { errorElement: renderError(error) }
        } else {
          return { innerHtml: error.message }
        }
      } else {
        throw error
      }
    }
  }, [block, content, errorColor, renderError, settings])

  if ('errorElement' in state) {
    return state.errorElement!
  }

  return <Component {...props} dangerouslySetInnerHTML={{ __html: state.innerHtml }} />
}

export default memo(TeX)

type TeXProps = ComponentPropsWithoutRef<'div'> &
  Partial<{
    as: ElementType
    math: string | number
    block: boolean
    errorColor: string
    renderError: (error: ParseError | TypeError) => ReactElement
    settings: KatexOptions
  }>
