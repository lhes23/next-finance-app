"use client"
import { useAppSelector } from "@/redux/store"
import React from "react"
import IncomeExpenseTable from "./IncomeExpenseTable"

const IncomeAndExpense = () => {
  let all_budgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )

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
