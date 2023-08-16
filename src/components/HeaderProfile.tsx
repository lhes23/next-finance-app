import {
  setShowNotifications,
  setShowProfileMenu
} from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import Image from "next/image"
import React from "react"

const HeaderProfile = () => {
  const dispatch = useAppDispatch()
  const showProfileMenu = useAppSelector(
    (state) => state.dashboardSlice.showProfileMenu
  )
  return (
    <>
      <button
        className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
        aria-label="Account"
        aria-haspopup="true"
        onClick={() => {
          dispatch(setShowProfileMenu(!showProfileMenu))
          dispatch(setShowNotifications(false))
        }}
      >
        <Image
          className="object-cover w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
        />
      </button>
      {showProfileMenu && (
        <div x-if="isProfileMenuOpen">
          <ul
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
    </>
  )
}

export default HeaderProfile
