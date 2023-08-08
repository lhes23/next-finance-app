"use client"
import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSolidBrightnessHalf } from "react-icons/bi"
import { IoNotificationsCircle } from "react-icons/io5"
import Link from "next/link"
import ButtonComp from "./ButtonComp"
import AddBudgetModal from "./AddBudgetModal"

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
          <button
            className="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
            //   @click="toggleSideMenu"
            aria-label="Menu"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <GiHamburgerMenu />
          </button>

          <div className="px-6">
            <AddBudgetModal />
          </div>

          <ul className="flex space-x-6 justify-end">
            {/* <!-- Theme toggler --> */}
            <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                //   @click="toggleTheme"
                aria-label="Toggle color mode"
              >
                <BiSolidBrightnessHalf />
              </button>
            </li>
            {/* <!-- Notifications menu --> */}
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                //   @click="toggleNotificationsMenu"
                //   @keydown.escape="closeNotificationsMenu"
                aria-label="Notifications"
                aria-haspopup="true"
                onClick={() => {
                  setIsNotiOpen(!isNotiOpen)
                  setIsProfileOpen(false)
                }}
              >
                <IoNotificationsCircle />
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>
              {isNotiOpen && (
                <div>
                  <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Messages</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                          13
                        </span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Sales</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                          2
                        </span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Alerts</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                //   @click="toggleProfileMenu"
                //   @keydown.escape="closeProfileMenu"
                aria-label="Account"
                aria-haspopup="true"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen)
                  setIsNotiOpen(false)
                }}
              >
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              {isProfileOpen && (
                <div x-if="isProfileMenuOpen">
                  <ul
                    //   x-transition:leave="transition ease-in duration-150"
                    //   x-transition:leave-start="opacity-100"
                    //   x-transition:leave-end="opacity-0"
                    // @click.away="closeProfileMenu"
                    // @keydown.escape="closeProfileMenu"
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                        href="#"
                      >
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
