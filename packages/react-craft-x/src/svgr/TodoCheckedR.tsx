import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm3.588 4.191a1 1 0 0 1 .22 1.397l-3.995 5.494a.997.997 0 0 1-1.443.194L3.375 9.281a1 1 0 0 1 1.25-1.562l1.682 1.346 3.384-4.653a1 1 0 0 1 1.397-.22Z"
    />
  </svg>
)

export default SvgComponent

