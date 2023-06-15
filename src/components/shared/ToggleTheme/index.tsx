import type { ButtonHTMLAttributes } from 'react'

import { useTheme } from '@store/theme'
import Icon from '../Icon'
import { classNames } from '@src/utils/classNames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme = ({ className, ...props }: Props) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      {...props}
      onClick={toggleTheme}
      // TODO: Configurar botones en dark mode
      className={classNames([
        'w-[36.52px] h-[36.52px] smx:min-w-[56px] smx:h-[56px] flex justify-center items-center rounded-[12px]  bg-primary  ',
        className
      ])}
    >
      {isDark() ? (
        <Icon name="sun" className="w-[21.81px] h-[21.81px] text-white " />
      ) : (
        <Icon name="moon" className="w-[21.81px] h-[21.81px] text-white " />
      )}
    </button>
  )
}

export default ToggleTheme
