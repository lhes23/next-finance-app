import React from "react"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import DashboardIncomeAndExpense from "@/components/DashboardIncomeAndExpense"

const DashboardPage = async () => {
  return (
    <>
      <PageComponent title="Dashboard">
        {/* Cards */}
        <DashboardCards />

        {/* Charts */}
        <DashboardCharts />

        {/* New Table */}
        <DashboardIncomeAndExpense />
      </PageComponent>
    </>
  )
}

export default DashboardPage
