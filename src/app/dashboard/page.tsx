import React from "react"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeAndExpense from "@/components/IncomeAndExpense"

const DashboardPage = async () => {
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
