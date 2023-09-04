import React from "react"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import { getServerSession } from "next-auth/next"
import IncomeAndExpense from "@/components/IncomeAndExpense"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) return redirect("/")

  return (
    <>
      <PageComponent title="Dashboard">
        {/* Cards */}
        <DashboardCards />

        {/* Charts */}
        <DashboardCharts />

        {/* New Table */}
        <IncomeAndExpense />
      </PageComponent>
    </>
  )
}

export default DashboardPage
