import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import { baseUrl } from "@/lib/baseUrl"
import React from "react"

const fetchData = async () => {
  const res = await fetch(`${baseUrl}/api/budgets`, {
    cache: "no-store",
    next: {
      tags: ["budgets"]
    }
  })
  const data = await res.json()
  return data
}

const DashboardPage = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      {/* <MainContent incomesExpenses={incomesExpenses} /> */}
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      {/* Cards */}
      <DashboardCards incomesExpenses={incomesExpenses} />

      {/* Charts */}
      <DashboardCharts incomesExpenses={incomesExpenses} />

      {/* New Table */}
      <IncomeExpenseTable incomesExpenses={incomesExpenses} />
    </>
  )
}

export default DashboardPage
