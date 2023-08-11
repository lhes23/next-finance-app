// "use client"
import React, { useState } from "react"
import AddBudgetModal from "./AddBudgetModal"
import MobileHamburger from "./MobileHamburger"
import HeaderNotification from "./HeaderNotification"
import HeaderProfile from "./HeaderProfile"

const Header = ({
  isSideBarOpen,
  setIsSideBarOpen
}: {
  isSideBarOpen: boolean
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [isNotiOpen, setIsNotiOpen] = useState<boolean>(false)
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  return (
    <>
      <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          {/* <!-- Mobile hamburger --> */}
          <div className="px-6">
            <MobileHamburger
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          </div>

          <div className="px-6">
            <AddBudgetModal />
          </div>

          <ul className="flex space-x-6 justify-end">
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
            <li className="relative">
              <HeaderNotification
                isNotiOpen={isNotiOpen}
                setIsNotiOpen={setIsNotiOpen}
                setIsProfileOpen={setIsProfileOpen}
              />
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative">
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
