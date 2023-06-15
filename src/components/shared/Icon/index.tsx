import { memo, Suspense, RefObject, SVGProps } from 'react'
import dynamic from 'next/dynamic'

export type IconName =
  | 'menu'
  | 'logo'
  | 'campaign'
  | 'message'
  | 'gift'
  | 'arrow-down'
  | 'search'
  | 'sun'
  | 'moon'

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
  ref?:
    | ((instance: SVGSVGElement | null) => void)
    | RefObject<SVGSVGElement>
    | null
    | undefined
}
// Poner tipo
const icons: Record<IconName, any> = {
  menu: dynamic(() => import('@assets/icons/menu.svg')),
  logo: dynamic(() => import('@assets/icons/logo.svg')),
  campaign: dynamic(() => import('@assets/icons/campaign.svg')),
  message: dynamic(() => import('@assets/icons/message.svg')),
  gift: dynamic(() => import('@assets/icons/gift.svg')),
  'arrow-down': dynamic(() => import('@assets/icons/arrow-down.svg')),
  search: dynamic(() => import('@assets/icons/search.svg')),
  sun: dynamic(() => import('@assets/icons/sun-regular.svg')),
  moon: dynamic(() => import('@assets/icons/moon-regular.svg'))
}
const Icon = ({ name, ...props }: Props) => {
  const Component = icons[name]

  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

export default memo(Icon)
