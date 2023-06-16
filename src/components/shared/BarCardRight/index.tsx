interface Props {
  porcentageFirst: string
  porcentageSecond: string
  number: string
}

const BarCardRight = ({ porcentageFirst, number, porcentageSecond }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="flex items-end gap-[5.71px]">
          <div
            className={`w-[15.25px] rounded-t-[12.2577px] ${porcentageFirst} bg-white mt-3 flex items-end`}
          ></div>
          <div
            className={`w-[15.25px] rounded-t-[12.2577px] ${porcentageSecond} bg-[#22DBBA] mt-3 flex items-end`}
          ></div>
        </div>
        <p className="text-[17.16px] text-white mt-[14.4px]">{number}</p>
      </div>
    </>
  )
}

export default BarCardRight
