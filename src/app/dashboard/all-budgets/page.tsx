import React from "react"
import { fetchData } from "@/lib/fetchData"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"

const AllBudgetsPage = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        All Budgets
      </h2>
      {/* New Table */}
      <IncomeExpenseTable incomesExpenses={incomesExpenses} />
    </>
  )
}

export default AllBudgetsPage
