import React, { ComponentProps } from 'react'
import { motion, SVGMotionProps, Variants } from 'framer-motion'

export type MenuIconProps = Omit<SVGMotionProps<SVGSVGElement>, 'css'> & {
  isOpen: boolean
}

export default function MenuIcon({ isOpen, ...props }: MenuIconProps): JSX.Element {
  const paths: Variants[] = [
    {
      closed: { d: 'M4 6L20 6' },
      open: { d: 'M4 4L20 20' },
    },
    {
      closed: { d: 'M4 12L20 12', opacity: 1 },
      open: { d: 'M12 12L12 12', opacity: 0 },
    },
    {
      closed: { d: 'M4 18L20 18' },
      open: { d: 'M4 20L20 4' },
    },
  ]

  return (
    <motion.svg
      fill="inherit"
      stroke="inherit"
      width="1rem"
      height="1rem"
      {...props}
      transition={{
        type: 'spring',
        duration: 0.5,
      }}
      animate={isOpen ? 'open' : 'closed'}
      viewBox="0 0 23 23"
    >
      {paths.map((path, index) => (
        <Path variants={path} key={index} />
      ))}
    </motion.svg>
  )
}

function Path({ ...props }: Omit<ComponentProps<typeof motion.path>, 'css'>): JSX.Element {
  return <motion.path {...props} fill="transparent" stroke="inherit" strokeWidth="2" strokeLinecap="round" />
}
