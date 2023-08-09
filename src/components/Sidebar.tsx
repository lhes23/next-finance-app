import React from "react"
import SideBarContent from "./SideBarContent"
import { AiOutlineDashboard } from "react-icons/ai"
import { BsClipboardCheck } from "react-icons/bs"

const Sidebar = ({ isSideBarOpen }: { isSideBarOpen: boolean }) => {
  const title = "Finance App"
  const iconClassName = {
    color: "text-purple-600",
    size: 25
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
      name: "Forms",
      url: "/dashboard/forms",
      icon: (
        <BsClipboardCheck
          size={iconClassName.size}
          className={iconClassName.color}
        />
      )
    },
    { name: "Cards", url: "#", icon: <AiOutlineDashboard size={30} /> },
    { name: "Charts", url: "#", icon: <AiOutlineDashboard size={30} /> },
    { name: "Buttons", url: "#", icon: <AiOutlineDashboard size={30} /> },
    { name: "Modals", url: "#", icon: <AiOutlineDashboard size={30} /> },
    { name: "Tables", url: "#", icon: <AiOutlineDashboard size={30} /> }
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
