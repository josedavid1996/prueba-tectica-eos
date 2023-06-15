import Icon, { IconName } from '../Icon'

interface Props {
  view?: string
  icon: IconName
  colorIcon: string
  colorNotification: string
}

const GroupIcon = ({
  view = 'flex',
  icon,
  colorIcon,
  colorNotification
}: Props) => {
  return (
    <>
      <div
        className={`w-[36.52px] h-[36.52px] sm:w-[56px] sm:h-[56px] rounded-[12px] bg-white dark:bg-primary-600 relative justify-center items-center ${view} border border-primary dark:border-0 cursor-pointer`}
      >
        <Icon name={icon} className={`${colorIcon}`} />
        <span
          className={`${colorNotification}  w-[10.43px] h-[10.43px] sm:w-[16px] sm:h-[16px] absolute top-[-5px] right-[-5px] rounded-full`}
        ></span>
      </div>
    </>
  )
}
export default GroupIcon
