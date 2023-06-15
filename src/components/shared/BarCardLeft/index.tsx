interface Props {
  porcentage: string
  letter: string
}

const BarCardLeft = ({ porcentage, letter }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center w-[14.71px]">
        <div className="w-[14.71px] rounded-[6.12884px] h-[312.57px] bg-[#ffffff1f] mt-3 flex items-end">
          <span
            className={`${porcentage} h-[70%] w-full bg-primary rounded-t-[40px]  block`}
          ></span>
        </div>
        <p className="text-[17.16px] text-[#ffffff40] mt-[23.29px]">{letter}</p>
      </div>
    </>
  )
}

export default BarCardLeft
