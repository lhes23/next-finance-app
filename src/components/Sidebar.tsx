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

  const styles = {
    aside:
      "z-20 overflow-y-auto backdrop-blur-md bg-white/30 flex-shrink-0 duration-300"
  }

  return (
    <>
      <div className="text-black">
        {/* Desktop View */}
        <aside className={`${styles.aside} hidden md:block w-52 h-screen`}>
          <SideBarContent title={title} sidebarLinks={sidebarLinks} />
        </aside>
        {/* Mobile View */}
        {/* {showSidebar && ( */}
        <aside
          className={`${styles.aside} ${
            showSidebar ? "w-52" : "w-0"
          } fixed inset-y-0 mt-16 md:hidden`}
        >
          <SideBarContent title={title} sidebarLinks={sidebarLinks} />
        </aside>
        {/* )} */}
      </div>
    </>
  )
}

export default Sidebar
