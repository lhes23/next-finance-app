"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import {
  setShowNotifications,
  setShowProfileMenu
} from "@/redux/dashboardSlice"
import Image from "next/image"
import { redirect } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

const HeaderProfile = () => {
  const session = useSession()
  const dispatch = useAppDispatch()
  const showProfileMenu = useAppSelector(
    (state) => state.dashboardSliceReducer.showProfileMenu
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
          src={session?.data?.user?.image ?? `/imgs/no-img.jpg`}
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
              <button
                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                onClick={() => {
                  signOut()
                  // localStorage.removeItem("userData")
                  // dispatch(
                  //   setUser({
                  //     id: "",
                  //     email: "",
                  //     username: ""
                  //   })
                  // )
                  return redirect("/")
                }}
              >
                <span>Log out</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default HeaderProfile
