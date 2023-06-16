import ChartLeft from '@src/components/layout/ChartLeft'
import ChartRight from '@src/components/layout/ChartRight'

const Home = () => {
  return (
    <>
      <div className="hidden lg:block " data-aos="fade-left">
        <h3 className="text-primary py-[20px] pl-[93.87px] text-[16px] font-semibold dark:bg-primary-500 border-y border-primary dark:border-transparent">
          Dashboard /
        </h3>
      </div>
      <div className="flex flex-col xl:flex-row  px-[21.19px] md:gap-[48px] lg:mt-[47px] mb-[50.82px] lg:mb-[100px] xl:px-[42.44px]   xxxl:pl-[62.44px] xxxl:pr-[51.81px]">
        <ChartLeft />
        <ChartRight />
      </div>
    </>
  )
}

export default Home
