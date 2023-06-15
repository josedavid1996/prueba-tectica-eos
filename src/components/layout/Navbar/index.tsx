import Icon from '@components/shared/Icon'
import GroupIcon from '@src/components/shared/GroupIcon'
import ToggleTheme from '@src/components/shared/ToggleTheme'

const Navbar = () => {
  return (
    <>
      <header className="h-[73px] sm:h-[120px] mt-[17px] sm:mt-[0] pl-[19px] pr-4 pt-[17px] pb-[21.03px] flex justify-between items-center lg:gap-[20px] bg-white dark:bg-primary-200">
        {/* LEFT */}
        <div className="flex items-center gap-[14px] flex-1">
          <Icon
            name="menu"
            className="dark:text-white text-[20px] text-primary-900 "
          />
          <Icon
            name="logo"
            className="w-[45px] h-[34.97px] sm:w-[84px] sm:h-[50.73px]"
          />
        </div>

        {/* CENTRAL */}
        <div className="hidden  flex-[3] lg:flex items-center gap-[20px]">
          <div className="min-h-[56px] w-full   border border-primary dark:border-primary-600 rounded-[12px] shadow-input bg-secondary-50 dark:bg-primary-900 overflow-hidden flex items-center pr-[25px]">
            <input className="min-h-[26px] w-full  bg-secondary-50 dark:bg-primary-900 pl-[24px] text-primary-900 dark:text-[#B9B9B9]  outline-none" />
            <Icon
              name="search"
              className="w-[24px] h-[24px] text-primary dark:text-[#A4A4A4]"
            />
          </div>
          <ToggleTheme className="text-white" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center flex-[3] justify-end">
          {/* GROUP ICONS */}
          <div className="flex gap-[22px] pr-[17.61px] sm:pr-[36px] sm:border-r dark:sm:border-[#eefff30a] sm:border-[#13b49791]">
            <GroupIcon
              icon="campaign"
              colorIcon="text-primary w-[15.98px] h-[15.98px] sm:w-[24.5px] sm:h-[24.5px]"
              colorNotification="bg-[#D9B75F]"
            />
            <GroupIcon
              icon="message"
              colorIcon="text-primary w-[15.98px] h-[15.98px] sm:w-[22.2px] sm:h-[21.15px]"
              colorNotification="bg-[#D9B75F]"
              view="hidden sm:flex"
            />
            <GroupIcon
              icon="gift"
              colorIcon="text-primary-700 w-[15.98px] h-[15.98px] sm:w-[24.5px] sm:h-[24.5px]"
              colorNotification="bg-primary-800"
              view="hidden sm:flex"
            />
          </div>

          {/* AVATAR */}

          <div className="w-[66.85px] h-[37.83px] sm:h-[58px] sm:min-w-[182px] flex items-center border dark:border-[#eefff30a] border-[#13b49791] rounded-[12px] sm:ml-[36px] justify-between  sm:gap-[25px] sm:pr-[18px]">
            <div className="min-w-[36.52px] h-[36.52px] sm:w-[56px] sm:h-[56px] rounded-[12px] dark:bg-white bg-primary"></div>
            <p className="hidden sm:block dark:text-white text-primary-900">
              David
            </p>
            <Icon name="arrow-down" className="dark:text-white text-primary" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
