import BarCardLeft from '@src/components/shared/BarCardLeft'
import CardData from '@src/components/shared/CardData'
import Heading from '@src/components/shared/Heading'
import Icon from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'

const ChartLeft = () => {
  return (
    <>
      <div className="w-full flex flex-col mx-auto  gap-[26px] max-w-[878.88px]">
        {/* FIRST CHART */}
        <div className="bg-secondary-50 dark:bg-primary-400 rounded-[15px] sm:rounded-[17.1608px] shadow-card w-full pt-[15px] pb-[20.05px] pl-[15px] pr-[13.74px] sm:pt-[36.77px] sm:pb-[35.29pxpx] sm:pl-[36.77px] sm:pr-[44.13px] border border-primary dark:border-transparent">
          {/* TITLE */}
          <div className="flex justify-between items-center">
            <Heading variant="light" size="md">
              Best Selling
            </Heading>

            <div className="flex gap-[3.89px] sm:gap-[11.58px] items-center">
              <p className="text-[6.88px] sm:text-[14.71px] font-medium text-primary dark:text-[#ffffffbf]">
                This Week
              </p>
              <Icon
                name="arrow-down"
                className="w-[2.95px] h-[5.87px] sm:w-[7.35px] sm:h-[14.71px] text-primary dark:text-[#B7B7B7]"
              />
            </div>
          </div>
          {/* DAY */}

          <div className="pl-[12.71px] pr-[8.12px] pt-[7.37px] pb-[7.2px] sm:pl-[31.87px] sm:pr-[22.13px] sm:pt-[18.39px] sm:pb-[16.9px] flex justify-between dark:bg-primary-300 bg-[#e7e6e6] rounded-[6.88085px] sm:rounded-[17.1608px] sm:mt-[26.74px] sm:mb-[35.55px]">
            <Text size="xs" variant="medium">
              Tuesday
            </Text>
            <Text size="xs" variant="medium">
              215,523 pcs
            </Text>
          </div>

          {/* CHART */}

          <div className="flex flex-col items-center md:gap-[46.61px] xl:flex-row">
            {/* IMAGE */}

            <div className="w-full">
              <div className="h-[200px]"></div>
              <div className="ml-[7.53px] flex justify-between  gap-6">
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary-50 rounded-[3.93191px]"></div>
                  <Text size="xs" variant="medium" className="mt-[9.85px]">
                    Movies Ticket
                  </Text>
                </div>
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary rounded-[3.93191px]"></div>
                  <Text size="xs" variant="medium" className="mt-[9.85px]">
                    Movies Ticket
                  </Text>
                </div>
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary-100 rounded-[3.93191px]"></div>
                  <Text size="xs" variant="medium" className="mt-[9.85px]">
                    Football Ticket
                  </Text>
                </div>
              </div>
            </div>

            <div className="w-full h-full hidden md:block max-w-[301.65px]">
              <div className="grid grid-cols-7 gap-[36.77px]">
                <BarCardLeft porcentage="h-[80%]" letter="S" />
                <BarCardLeft porcentage="h-[60%]" letter="M" />
                <BarCardLeft porcentage="h-[85%]" letter="T" />
                <BarCardLeft porcentage="h-[40%]" letter="W" />
                <BarCardLeft porcentage="h-[30%]" letter="T" />
                <BarCardLeft porcentage="h-[60%]" letter="F" />
                <BarCardLeft porcentage="h-[35%]" letter="S" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[32.57px] gap-y-[34.88px]">
          {/*  TICKET */}
          <CardData
            title="456k Pcs"
            subTitle="Daily"
            text="Ticket Sold"
            partBottom={
              <div className="h-[8.53px] rounded-[40px] w-full bg-[#ffffff1f] mt-3 md:mt-[54.84px]">
                <span className="w-[70%] h-full bg-primary rounded-[40px] shadow-bar block"></span>
              </div>
            }
          />
          <CardData title="451,509" text="Sales" subTitle="This Week" />
          <CardData
            title="$456,623"
            text="Income"
            subTitle="Monthly"
            isView="hidden lg:block"
          />
          <CardData subTitle="This Week" />
        </div>
      </div>
    </>
  )
}

export default ChartLeft
