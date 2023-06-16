import BarCardRight from '@src/components/shared/BarCardRight'
import Heading from '@src/components/shared/Heading'
import Icon from '@src/components/shared/Icon'
import Slider from '@src/components/shared/Slider'

const ChartRight = () => {
  return (
    <>
      <div className="w-full">
        <div className="rounded-[17.1608px] hidden md:block  items-center card-bar-right px-[22.06px] pb-[14.45px] pt-[41.68px]">
          <div className="flex justify-between pl-[28.2px] pr-[82px]">
            <div>
              <Heading size="md" variant="semibold" color="white">
                Sales Comparison
              </Heading>
              <p className="font-light text-[24.52px] text-white">
                Than last day
              </p>
            </div>

            <h2 className="text-white text-[49.03px] font-semibold">94%</h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-10 gap-[40.04px] xl:gap-[20px] 2xl:gap-[40.04px] items-end mt-4 justify-center max-w-[681.29px] mx-auto w-full">
              <BarCardRight
                porcentageFirst="h-[54.01px]"
                number="06"
                porcentageSecond="h-[90.96px]"
              />
              <BarCardRight
                porcentageFirst="h-[142.13px]"
                number="07"
                porcentageSecond="h-[68.22px]"
              />
              <BarCardRight
                porcentageFirst="h-[110.86px]"
                number="08"
                porcentageSecond="h-[36.95px]"
              />
              <BarCardRight
                porcentageFirst="h-[110.86px]"
                number="09"
                porcentageSecond="h-[142.13px]"
              />
              <BarCardRight
                porcentageFirst="h-[216.04px]"
                number="10"
                porcentageSecond="h-[110.86px]"
              />
              <BarCardRight
                porcentageFirst="h-[142.13px]"
                number="11"
                porcentageSecond="h-[110.86px]"
              />
              <BarCardRight
                porcentageFirst="h-[68.22px]"
                number="12"
                porcentageSecond="h-[142.13px]"
              />
              <BarCardRight
                porcentageFirst="h-[68.22px]"
                number="13"
                porcentageSecond="h-[142.13px]"
              />
              <BarCardRight
                porcentageFirst="h-[179.09px]"
                number="14"
                porcentageSecond="h-[110.86px]"
              />
              <BarCardRight
                porcentageFirst="h-[142.13px]"
                number="15"
                porcentageSecond="h-[19.9px]"
              />
              {/* <BarCardRight
              porcentageFirst="h-[68.22px]"
              number="15"
              porcentageSecond="h-[190.46px]"
            /> */}
            </div>

            <Icon
              name="arrow-left"
              className="absolute left-0 bottom-[7px] text-white w-[7.35px] h-[14.71px]"
            />
            <Icon
              name="arrow-right"
              className="absolute right-0 bottom-[7px] text-white w-[7.35px] h-[14.71px]"
            />
          </div>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default ChartRight
