import React from "react"
import DashboardCards from "./DashboardCards"
import DashboardCharts from "./DashboardCharts"
import IncomeExpenseTable from "./IncomeExpenseTable"
import { IBudget } from "@/lib/interfaces"
import AddBudgetModal from "./AddBudgetModal"

const MainContent = ({ incomesExpenses }: { incomesExpenses: IBudget[] }) => {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>
      {/* Cards */}
      <DashboardCards incomesExpenses={incomesExpenses} />

      {/* Charts */}
      <DashboardCharts />

      {/* New Table */}
      <IncomeExpenseTable incomesExpenses={incomesExpenses} />
    </>
  )
}

export default MainContent
