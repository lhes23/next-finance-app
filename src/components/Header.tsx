import React from "react"
import BudgetModalButton from "./BudgetModalButton"
import MobileHamburger from "./MobileHamburger"
import HeaderNotification from "./HeaderNotification"
import HeaderProfile from "./HeaderProfile"

const Header = () => {
  return (
    <>
      <header className="z-10 py-4 shadow-md backdrop-blur-sm bg-white/30">
        <div className="container items-center justify-between h-full px-2 mx-auto text-white flex">
          {/* <!-- Mobile hamburger --> */}
          <div className="px-2">
            <MobileHamburger />
          </div>

          <div className="px-6">
            <BudgetModalButton />
          </div>

          <ul className="flex px-1 justify-end">
            {/* <!-- Theme toggler --> */}
            {/* <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                //   @click="toggleTheme"
                aria-label="Toggle color mode"
              >
                <BiSolidBrightnessHalf />
              </button>
            </li> */}
            {/* <!-- Notifications menu --> */}
            <li className="relative px-2">
              <HeaderNotification />
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative px-2">
              <HeaderProfile />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
