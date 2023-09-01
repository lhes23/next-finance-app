"use client"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import React, { Suspense, useEffect } from "react"
import Loading from "./loading"
import { useRouter } from "next/navigation"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let userData = localStorage.getItem("user")
      if (!userData) return push("/")
    }
  }, [push])
  return (
    <>
      <div className="flex h-screen w-full bg-no-repeat bg-cover bg-[url('/imgs/bg-mountains.jpg')]">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="h-full overflow-y-auto">
              <div className="container px-6 mx-auto grid">{children}</div>
            </main>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
