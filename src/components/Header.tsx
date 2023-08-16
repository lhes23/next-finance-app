"use client"
import React, { useState } from "react"
import AddBudgetModal from "./AddBudgetModal"
import MobileHamburger from "./MobileHamburger"
import HeaderNotification from "./HeaderNotification"
import HeaderProfile from "./HeaderProfile"

const Header = () => {
  const [isNotiOpen, setIsNotiOpen] = useState<boolean>(false)
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  return (
    <>
      <header className="z-10 py-4 shadow-md bg-gradient-to-t from-purple-400 to-pink-400">
        <div className="container items-center justify-between h-full px-2 mx-auto text-white flex">
          {/* <!-- Mobile hamburger --> */}
          <div className="px-2">
            <MobileHamburger />
          </div>

          <div className="px-6">
            <AddBudgetModal />
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
              <HeaderNotification
                isNotiOpen={isNotiOpen}
                setIsNotiOpen={setIsNotiOpen}
                setIsProfileOpen={setIsProfileOpen}
              />
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative px-2">
              <HeaderProfile
                isProfileOpen={isProfileOpen}
                setIsProfileOpen={setIsProfileOpen}
                setIsNotiOpen={setIsNotiOpen}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
