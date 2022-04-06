import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Z"
    />
  </svg>
)

export default SvgComponent
