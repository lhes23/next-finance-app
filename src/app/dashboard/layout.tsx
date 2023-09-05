// "use client"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import React, { Suspense } from "react"
import Loading from "./loading"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)
  if (!session) return redirect("/")

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
