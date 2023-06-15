import { ReactNode } from 'react'
import Heading from '../Heading'
import Icon from '../Icon'
import Text from '../Text'

interface Props {
  title?: string
  subTitle?: string
  partBottom?: ReactNode
}

const CardData = ({ title, subTitle, partBottom }: Props) => {
  return (
    <>
      <div className="bg-primary-400 rounded-[15px] sm:rounded-[17.1608px] shadow-card pt-[19px] px-[25px] pb-[22.02px] ">
        <div className="flex justify-between items-center">
          <Heading variant="semibold" size="md">
            {title}
          </Heading>

          <div className="flex gap-[3.89px] items-center">
            <p className="text-[6.88px] font-medium text-primary dark:text-[#B7B7B7]">
              {subTitle}
            </p>
            <Icon
              name="arrow-down"
              className="w-[5.56px] h-[12.42px] text-primary dark:text-[#B7B7B7]"
            />
          </div>
        </div>

        <Text size="sm" color="white-50" variant="light">
          Ticket
        </Text>
        <Text size="sm" color="white-50" variant="light">
          Sold
        </Text>
        {/* <div className="h-[8.53px] rounded-[40px] w-full bg-[#ffffff1f] mt-3">
          <span className="w-[70%] h-full bg-primary rounded-[40px] shadow-bar block"></span>
        </div> */}
        {partBottom}
      </div>
    </>
  )
}

export default CardData
