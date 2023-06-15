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
        'p-[17.1px] flex justify-center items-center rounded-[12px] bg-white dark:bg-primary border dark:border-0 border-primary ',
        className
      ])}
    >
      {isDark() ? (
        <Icon name="sun" className="w-[21.81px] h-[21.81px] text-white " />
      ) : (
        <Icon name="moon" className="w-[21.81px] h-[21.81px] text-primary" />
      )}
    </button>
  )
}

export default ToggleTheme
