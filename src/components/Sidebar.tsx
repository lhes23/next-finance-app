"use client"
import React from "react"
import SideBarContent from "./SideBarContent"
import { AiOutlineDashboard } from "react-icons/ai"
import { BsClipboardCheck } from "react-icons/bs"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { useAppSelector } from "@/redux/store"

const Sidebar = () => {
  const showSidebar = useAppSelector(
    (state) => state.dashboardSlice.showSidebar
  )
  const title = "Finance App"
  const iconClassName = {
    color: "",
    size: 20
  }
  const sidebarLinks = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: (
        <AiOutlineDashboard
          size={iconClassName.size}
          className={iconClassName.color}
        />
      )
    },
    {
      name: "All Budgets",
      url: "/dashboard/all-budgets",
      icon: (
        <BsClipboardCheck
          size={iconClassName.size}
          className={iconClassName.color}
        />
      )
    },
    {
      name: "Yearly Budgets",
      url: "/dashboard/yearly-budgets",
      icon: (
        <FaMoneyBillTrendUp
          size={iconClassName.size}
          className={iconClassName.color}
        />
      )
    }
  ]

  return (
    <>
      <div className="text-white">
        {/* Desktop View */}
        <aside className="z-20 hidden md:block w-52 overflow-y-auto bg-gradient-to-t from-purple-400 to-pink-400 flex-shrink-0 h-screen duration-300">
          <SideBarContent title={title} sidebarLinks={sidebarLinks} />
        </aside>
        {/* Mobile View */}
        {/* {showSidebar && ( */}
        <aside
          className={`${
            showSidebar ? "w-52" : "w-0"
          } fixed inset-y-0 z-20 flex-shrink-0 mt-16 overflow-y-auto bg-gradient-to-t from-purple-500 to-pink-500 md:hidden duration-500`}
        >
          <SideBarContent title={title} sidebarLinks={sidebarLinks} />
        </aside>
        {/* )} */}
      </div>
    </>
  )
}

export default Sidebar
