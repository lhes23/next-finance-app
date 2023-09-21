import React from "react"
import IncomeExpenseTable from "./IncomeExpenseTable"
import { getAllBudgets } from "@/actions/serverActions"

const IncomeAndExpense = async () => {
  let all_budgets = await getAllBudgets()

  all_budgets = all_budgets.filter(
    (budget) =>
      new Date(budget.createdAt).getFullYear() === new Date().getFullYear() &&
      new Date(budget.createdAt).getMonth() === new Date().getMonth() &&
      new Date(budget.createdAt).getMonth()
  )

  return (
    <>
      <IncomeExpenseTable all_budgets={all_budgets} />
    </>
  )
}

export default IncomeAndExpense
