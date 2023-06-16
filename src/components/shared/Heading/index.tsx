import { classNames } from '@src/utils/classNames'
import React, { HTMLAttributes } from 'react'

type Variant = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type Color = 'primary' | 'secondary' | 'black' | 'white' | 'dark-white'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<Size, string> = {
  xl: '24.5154px',
  lg: 'text-[24.5154px] leading-[37px]',
  md: 'text-[16.8286px] leading-[25px] md:text-[24.5154px] md:leading-[55px]',
  sm: 'text-[16.76px] leading-[25.13px] md:leading-[29px] md:text-[19.61px]',
  xs: 'title-8'
}

const colors: Record<Color, string> = {
  white: 'text-white ',
  'dark-white': 'dark:text-white text-primary-900',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  light: 'dark:font-light font-normal md:font-medium dark:md:font-medium',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const Heading = ({
  as = 'h2',
  size = 'sm',
  color = 'white',
  variant = 'normal',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([
      props.className,
      sizes[size],
      colors[color],
      variants[variant]
    ])
  })
}

export default Heading
