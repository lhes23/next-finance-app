import React from "react"
import DashboardCards from "./DashboardCards"
import DashboardCharts from "./DashboardCharts"
import IncomeExpenseTable from "./IncomeExpenseTable"

const MainContent = () => {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>
      {/* Cards */}
      <DashboardCards />

      {/* Charts */}
      <DashboardCharts />

      {/* New Table */}
      <IncomeExpenseTable />
    </>
  )
}

export default MainContent
