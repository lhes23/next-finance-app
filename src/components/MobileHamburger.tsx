"use client"
import { setShowSidebar } from "@/redux/dashboardSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const MobileHamburger = () => {
  const dispatch = useAppDispatch()
  const showSidebar = useAppSelector(
    (state) => state.dashboardSliceReducer.showSidebar
  )
  return (
    <>
      <button
        className="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple md:hidden"
        aria-label="Menu"
        onClick={() => dispatch(setShowSidebar(!showSidebar))}
      >
        <GiHamburgerMenu />
      </button>
    </>
  )
}

export default MobileHamburger
