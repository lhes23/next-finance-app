import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const MobileHamburger = ({
  isSideBarOpen,
  setIsSideBarOpen
}: {
  isSideBarOpen: boolean
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <>
      <button
        className="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple md:hidden"
        //   @click="toggleSideMenu"
        aria-label="Menu"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <GiHamburgerMenu />
      </button>
    </>
  )
}

export default MobileHamburger
