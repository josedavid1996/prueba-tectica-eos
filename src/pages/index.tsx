import ChartLeft from '@src/components/layout/ChartLeft'
import ChartRight from '@src/components/layout/ChartRight'

const Home = () => {
  return (
    <>
      <div className="hidden sm:block">
        <h3 className="text-primary py-[20px] pl-[93.87px] text-[16px] font-semibold dark:bg-primary-500 bg-secondary-100">
          Dashboard /
        </h3>
      </div>
      <div className="flex flex-col md:flex-row px-[21.19px] md:gap-[48px] md:mt-[47px]">
        <ChartLeft />
        <ChartRight />
      </div>
    </>
  )
}

export default Home
