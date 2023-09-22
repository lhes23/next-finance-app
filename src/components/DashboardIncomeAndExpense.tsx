import React from "react"
import IncomeExpenseTable from "./IncomeExpenseTable"
import { getAllBudgets } from "@/actions/serverActions"

const DashboardIncomeAndExpense = async () => {
  let allBudgets = await getAllBudgets()

  allBudgets = allBudgets.filter(
    (budget) =>
      new Date(budget.createdAt).getFullYear() === new Date().getFullYear() &&
      new Date(budget.createdAt).getMonth() === new Date().getMonth() &&
      new Date(budget.createdAt).getMonth()
  )

  return (
    <>
      <IncomeExpenseTable allBudgets={allBudgets} />
    </>
  )
}

export default DashboardIncomeAndExpense
