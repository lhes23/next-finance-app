import React from "react"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import { fetchData } from "@/lib/fetchData"
import { getIncomeExpenseThisMonth } from "@/lib/getIncomeExpensesThisMonth"

const DashboardPage = async () => {
  const incomesExpenses = await fetchData()
  const incomeExpenseThisMonth = getIncomeExpenseThisMonth(incomesExpenses)
  return (
    <>
      {/* <MainContent incomesExpenses={incomesExpenses} /> */}
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      {/* Cards */}
      <DashboardCards incomesExpenses={incomeExpenseThisMonth} />

      {/* Charts */}
      <DashboardCharts incomesExpenses={incomesExpenses} />

      {/* New Table */}
      <IncomeExpenseTable incomesExpenses={incomeExpenseThisMonth} />
    </>
  )
}

export default DashboardPage
