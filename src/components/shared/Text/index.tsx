import React, { HTMLAttributes } from 'react'
import { classNames } from '@utils/classNames'

type Variant = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type Color = 'primary' | 'secondary' | 'black' | 'white' | 'white-50'
type Size = 'xs' | 'sm' | 'md' | 'lg'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  lg: 'paragraph-1',
  md: 'paragraph-2',
  sm: 'text-[12.5664px]',
  xs: 'text-[6.88px] leading-[10.32px] sm:text-[17.16px] sm:leading-[25.74px]'
}

const colors: Record<Color, string> = {
  white: 'text-primary-900 dark:text-white',
  'white-50': 'text-primary dark:text-[#ffffff99]',
  black: 'text-primary-900 dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const Text = ({
  as = 'p',
  size = 'md',
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

export default Text
