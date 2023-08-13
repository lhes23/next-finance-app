import React from "react"
import { fetchData } from "@/lib/fetchData"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"

const DashboardPage = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <PageComponent title="Dashboard" incomesExpenses={incomesExpenses}>
        {/* Cards */}
        <DashboardCards />

        {/* Charts */}

        <DashboardCharts />

        {/* New Table */}
        <IncomeExpenseTable />
      </PageComponent>
    </>
  )
}

export default DashboardPage
