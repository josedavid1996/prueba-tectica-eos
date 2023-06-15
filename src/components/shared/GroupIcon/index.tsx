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
        className={`w-[36.52px] h-[36.52px] smx:w-[56px] smx:h-[56px] rounded-[12px] bg-primary dark:bg-primary-600 relative justify-center items-center ${view}  cursor-pointer`}
      >
        <Icon name={icon} className={`${colorIcon}`} />
        <span
          className={`${colorNotification}  w-[10.43px] h-[10.43px] smx:w-[16px] smx:h-[16px] absolute top-[-2px] right-[-4px] smx:top-[-5px] smx:right-[-5px] rounded-full`}
        ></span>
      </div>
    </>
  )
}
export default GroupIcon
