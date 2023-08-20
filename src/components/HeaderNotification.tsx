"use client"
import {
  setShowNotifications,
  setShowProfileMenu
} from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import React from "react"
import { IoNotificationsCircle } from "react-icons/io5"

const Notification = () => {
  const dispatch = useAppDispatch()
  const showNotifications = useAppSelector(
    (state) => state.dashboardSliceReducer.showNotifications
  )
  return (
    <>
      <button
        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
        onClick={() => {
          dispatch(setShowNotifications(!showNotifications))
          dispatch(setShowProfileMenu(false))
        }}
      >
        <IoNotificationsCircle
          className="w-full h-full text-purple-500"
          size={30}
        />
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
        ></span>
      </button>
      {showNotifications && (
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
    </>
  )
}

export default Notification
