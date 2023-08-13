import React from "react"
import SideBarContent from "./SideBarContent"
import { AiOutlineDashboard } from "react-icons/ai"
import { BsClipboardCheck } from "react-icons/bs"
import { FaMoneyBillTrendUp } from "react-icons/fa6"

const Sidebar = ({ isSideBarOpen }: { isSideBarOpen: boolean }) => {
  const title = "Finance App"
  const iconClassName = {
    color: "text-purple-600",
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
      <div>
        {/* Desktop View */}
        <aside className="z-20 hidden md:block w-52 overflow-y-auto bg-white dark:bg-gray-800 flex-shrink-0 h-screen">
          <SideBarContent title={title} sidebarLinks={sidebarLinks} />
        </aside>
        {/* Mobile View */}
        {isSideBarOpen && (
          <aside className="fixed inset-y-0 z-20 flex-shrink-0 w-52 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
            <SideBarContent title={title} sidebarLinks={sidebarLinks} />
          </aside>
        )}
      </div>
    </>
  )
}

export default Sidebar
