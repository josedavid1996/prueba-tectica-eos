import { ReactNode } from 'react'
import Heading from '../Heading'
import Icon from '../Icon'

interface Props {
  title?: string
  subTitle?: string
  partBottom?: ReactNode
  isView?: string
  text?: string
  isViewSubTitle?: string
}

const CardData = ({
  title,
  subTitle,
  partBottom,
  isView,
  text,
  isViewSubTitle
}: Props) => {
  return (
    <>
      <div
        className={`dark:bg-primary-400 border-2 dark:border-0 overflow-hidden border-primary rounded-[15px] sm:rounded-[17.1608px] shadow-card pt-[19px] md:pt-[26.72px] flex flex-col justify-between h-full ${isView}`}
      >
        <div className="px-[25px] md:px-[29.95px]">
          <div className="flex justify-between items-center">
            <Heading variant="semibold" size="sm" color="dark-white">
              {title}
            </Heading>

            <div className={`flex gap-[3.89px] items-center ${isViewSubTitle}`}>
              <p className="text-[12.5664px] leading-[19px] md:text-[14.71px] md:leading-[22px] font-normal text-primary-900 dark:text-[#B7B7B7]">
                {subTitle}
              </p>
              <Icon
                name="arrow-down"
                className="w-[5.56px] h-[12.42px] md:w-[8.02px] md:h-[14.97px] text-primary-900 dark:text-[#B7B7B7]"
              />
            </div>
          </div>

          {/* <Text size="sm" color="white-50" variant="light">
            {text}
          </Text> */}
          <p className="text-[12.5664px] leading-[19px] md:text-[14.7092px] font-light md:leading-[22px] text-primary-900 dark:text-[#ffffff99]">
            {text}
          </p>
        </div>
        <div className="relative">{partBottom}</div>
      </div>
    </>
  )
}

export default CardData
