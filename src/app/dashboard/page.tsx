import React from "react"
import { fetchData, fetchDataYearly } from "@/lib/fetchData"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import { getIncomeExpenseThisMonth } from "@/lib/getIncomeExpensesThisMonth"

const DashboardPage = async () => {
  const incomesExpenses = await fetchData()
  const incomeExpenseThisMonth = getIncomeExpenseThisMonth(incomesExpenses)
  const incomesExpensesData2 = await fetchDataYearly()

  return (
    <>
      <PageComponent title="Dashboard" incomesExpenses={incomesExpenses}>
        {/* Cards */}
        <DashboardCards />

        {/* Charts */}
        <DashboardCharts incomesExpenses={incomesExpensesData2} />

        {/* New Table */}
        <IncomeExpenseTable />
      </PageComponent>
    </>
  )
}

export default DashboardPage
