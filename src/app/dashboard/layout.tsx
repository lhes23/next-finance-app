import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 w-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
