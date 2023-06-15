import { useState } from 'react'

import Icon from '@components/shared/Icon'

import GroupIcon from '@src/components/shared/GroupIcon'
import IconMenu from '@src/components/shared/IconMenu'
import ToggleTheme from '@src/components/shared/ToggleTheme'

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false)
  return (
    <>
      <header className="h-[73px] smx:h-[120px] mt-[17px] smx:mt-[0] pl-[19px] pr-4 pt-[17px] pb-[21.03px] flex justify-between items-center lg:gap-[20px]  relative ">
        {/* BUSCADOR MOBILE */}
        <div
          className={`${
            isMenu ? 'left-[-100%]' : 'left-0'
          } absolute top-[73px] w-full  smx:top-[120px] transition-all duration-500 lg:hidden px-4`}
        >
          <div className="min-h-[56px] w-full   border border-primary dark:border-primary-600 rounded-[12px] shadow-input bg-secondary-50 dark:bg-primary-900 overflow-hidden flex items-center pr-[25px] ">
            <input className="min-h-[26px] w-full  bg-secondary-50 dark:bg-primary-900 pl-[24px] text-primary-900 dark:text-[#B9B9B9]  outline-none" />
            <Icon
              name="search"
              className="w-[24px] h-[24px] text-primary dark:text-[#A4A4A4]"
            />
          </div>
        </div>
        {/* LEFT */}
        <div className="flex items-center gap-[14px] smx:gap-[25px]">
          <div onClick={() => setisMenu(!isMenu)}>
            <IconMenu />
          </div>
          <Icon
            name="logo"
            className="w-[45px] h-[34.97px] smx:w-[84px] smx:h-[50.73px]"
          />
        </div>

        {/* CENTRAL */}
        <div className="hidden lg:flex items-center sm:flex-[2] gap-[20px] justify-center">
          <div className="min-h-[56px] w-full   border border-primary dark:border-primary-600 rounded-[12px] shadow-input bg-secondary-50 dark:bg-primary-900 overflow-hidden flex items-center pr-[25px] max-w-[752px]">
            <input className="min-h-[26px] w-full  bg-secondary-50 dark:bg-primary-900 pl-[24px] text-primary-900 dark:text-[#B9B9B9]  outline-none" />
            <Icon
              name="search"
              className="w-[24px] h-[24px] text-primary dark:text-[#A4A4A4]"
            />
          </div>
          <ToggleTheme className="" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end">
          {/* GROUP ICONS */}
          <div className="flex gap-[22px] pr-[17.61px] smx:pr-[36px] smx:border-r dark:smx:border-[#eefff30a] smx:border-[#13b49791]">
            <ToggleTheme className="lg:hidden" />
            <GroupIcon
              icon="campaign"
              colorIcon="text-white dark:text-primary w-[15.98px] h-[15.98px] smx:w-[24.5px] smx:h-[24.5px]"
              colorNotification="bg-[#D9B75F]"
            />

            <GroupIcon
              icon="message"
              colorIcon="text-white dark:text-primary w-[15.98px] h-[15.98px] smx:w-[22.2px] smx:h-[21.15px]"
              colorNotification="bg-[#D9B75F]"
              view="hidden smx:flex"
            />
            <GroupIcon
              icon="gift"
              colorIcon="text-[#ffffffae] dark:text-primary-700 w-[15.98px] h-[15.98px] smx:w-[24.5px] smx:h-[24.5px]"
              colorNotification=" bg-primary-800"
              view="hidden smx:flex"
            />
          </div>

          {/* AVATAR */}

          <div className="w-[66.85px] h-[37.83px] smx:h-[58px] smx:min-w-[182px] flex items-center border dark:border-[#eefff30a] border-[#13b49791] rounded-[12px] smx:ml-[36px] justify-between gap-[9.78px] smx:gap-[25px] pr-[16.96px] smx:pr-[18px]">
            <div className="min-w-[36.52px] h-[36.52px] smx:min-w-[56px] smx:h-[56px] rounded-[12px] dark:bg-[#C4C4C4] bg-primary relative overflow-hidden after:content-[''] after:absolute after:min-w-[40px] after:h-[40px] after:top-[21px] dark:after:bg-[#D9D9D9] after:bg-white after:rounded-full after:smx:hidden after:left-[-3px] before:content-[''] before:w-[13.04px]  before:h-[13.04px] dark:before:bg-[#D9D9D9] before:bg-white before:top-[4px] before:absolute before:rounded-full before:left-[11px] before:smx:hidden"></div>
            <p className="hidden smx:block dark:text-white text-primary-900">
              David
            </p>
            <Icon
              name="arrow-down"
              className="dark:text-white text-primary min-w-[6px] min-h-[12px]"
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
