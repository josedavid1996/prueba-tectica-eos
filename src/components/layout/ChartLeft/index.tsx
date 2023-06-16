import BarCardLeft from '@src/components/shared/BarCardLeft'
import CardData from '@src/components/shared/CardData'
import Heading from '@src/components/shared/Heading'
import Icon from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'
import Image from 'next/image'

const ChartLeft = () => {
  return (
    <>
      <div className="w-full flex flex-col mx-auto  gap-[26px] max-w-[878.88px]">
        {/* FIRST CHART */}
        <div className="bg-[#13b49785] dark:bg-primary-400 rounded-[15px] sm:rounded-[17.1608px] shadow-card w-full pt-[15px] pb-[20.05px] pl-[15px] pr-[13.74px] sm:pt-[36.77px] sm:pb-[35.29pxpx] sm:pl-[36.77px] sm:pr-[44.13px] border border-primary dark:border-transparent">
          {/* TITLE */}
          <div className="flex justify-between items-center">
            <Heading variant="light" size="md" color="dark-white">
              Best Selling
            </Heading>

            <div className="flex gap-[3.89px] sm:gap-[11.58px] items-center">
              <p className="text-[6.88px] sm:text-[14.71px] font-medium text-primary-900 dark:text-[#ffffffbf]">
                This Week
              </p>
              <Icon
                name="arrow-down"
                className="w-[2.95px] h-[5.87px] sm:w-[7.35px] sm:h-[14.71px] text-primary-900 dark:text-[#B7B7B7]"
              />
            </div>
          </div>
          {/* DAY */}

          <div className="pl-[12.71px] pr-[8.12px] pt-[7.37px] pb-[7.2px] sm:pl-[31.87px] sm:pr-[22.13px] sm:pt-[18.39px] sm:pb-[16.9px] flex justify-between dark:bg-primary-300 bg-[#13b497c4] rounded-[6.88085px] sm:rounded-[17.1608px] sm:mt-[26.74px] sm:mb-[35.55px]">
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
              <div className="relative">
                <Image
                  src="/main-graph.png"
                  alt="main-graph.png"
                  width={300}
                  height={300}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="ml-[7.53px] flex justify-between  gap-6">
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary-50 rounded-[3.93191px]"></div>
                  <Text
                    size="xs"
                    variant="medium"
                    className="mt-[9.85px]"
                    color="dark-white"
                  >
                    Movies Ticket
                  </Text>
                </div>
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary rounded-[3.93191px]"></div>
                  <Text
                    size="xs"
                    variant="medium"
                    className="mt-[9.85px]"
                    color="dark-white"
                  >
                    Movies Ticket
                  </Text>
                </div>
                <div>
                  <div className="w-[19.59px] h-[18.8px] bg-primary-100 rounded-[3.93191px]"></div>
                  <Text
                    size="xs"
                    variant="medium"
                    className="mt-[9.85px]"
                    color="dark-white"
                  >
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32.57px] gap-y-[34.88px]">
          {/*  TICKET */}
          <CardData
            title="456k Pcs"
            subTitle="Daily"
            text="Ticket Sold"
            partBottom={
              <div className="h-[8.53px] rounded-[40px] w-[80%] mx-auto dark:bg-[#ffffff1f] my-[22.02px] xl:mb-[31.78px] xl:mt-[54.84px] bg-primary-700">
                <span className="w-[70%] h-full bg-primary rounded-[40px] shadow-bar block"></span>
              </div>
            }
          />
          <CardData
            title="451,509"
            text="Sales"
            subTitle="This Week"
            partBottom={
              <div className="w-[442.99px] h-[65.86px]">
                <Image
                  src="/grafic-second.png"
                  alt="grafic-second"
                  layout="fill"
                />
              </div>
            }
          />
          <CardData
            title="$456,623"
            text="Income"
            subTitle="Monthly"
            isView="hidden md:flex"
            partBottom={
              <div className="w-[453.27px] h-[78.77px] ">
                <Image src="/grafic.png" alt="grafic" layout="fill" />
              </div>
            }
          />
          <CardData
            subTitle="This Week"
            isViewSubTitle="hidden xxl:flex"
            partBottom={
              <div className=" flex items-center justify-center xxl:justify-between px-8 mb-[18.22px]  xxl:mb-[30.13px] ">
                <div className="relative w-[171.99px] h-[179.57px] xxl:w-[114.36px] xxl:h-[114.9px]">
                  <Image
                    src="/rounded-grafic.png"
                    alt="rounded-grafic"
                    layout="fill"
                    className="w-full h-full"
                  />
                </div>

                <div className="hidden xxl:block">
                  <div className="grid grid-cols-2 gap-[11.74px] ">
                    <div className="flex items-center gap-x-[11.23px]">
                      <span className="block w-[11.23px] h-[12.02px] bg-[#FF4F4F]"></span>
                      <Text size="xs" variant="semibold" color="dark-white">
                        Ticket A
                      </Text>
                    </div>
                    <div className="flex items-center gap-x-[11.23px]">
                      <span className="block w-[11.23px] h-[12.02px] bg-[#1BD344]"></span>
                      <Text size="xs" variant="semibold" color="dark-white">
                        Ticket C
                      </Text>
                    </div>
                    <div className="flex items-center gap-x-[11.23px]">
                      <span className="block w-[11.23px] h-[12.02px] bg-[#3C65F5]"></span>
                      <Text size="xs" variant="semibold" color="dark-white">
                        Ticket B
                      </Text>
                    </div>
                    <div className="flex items-center gap-x-[11.23px]">
                      <span className="block w-[11.23px] h-[12.02px] bg-[#FFF742]"></span>
                      <Text size="xs" variant="semibold" color="dark-white">
                        Ticket D
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  )
}

export default ChartLeft
