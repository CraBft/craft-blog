import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 13 13"
    fill="inherit"
    stroke="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 11.5L1.5 1.5L11.5 6.5L1.5 11.5Z"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
