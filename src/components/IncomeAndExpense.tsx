"use client"
import { useAppSelector } from "@/redux/store"
import React, { useEffect } from "react"
import IncomeExpenseTable from "./IncomeExpenseTable"

const IncomeAndExpense = () => {
  let all_budgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )

  const searchQuery = useAppSelector(
    (state) => state.budgetSliceReducer.searchQuery
  )

  all_budgets = all_budgets.filter(
    (budget) =>
      new Date(budget.createdAt).getFullYear() === new Date().getFullYear() &&
      new Date(budget.createdAt).getMonth() === new Date().getMonth() &&
      new Date(budget.createdAt).getMonth()
  )

  all_budgets = all_budgets.filter((budget) => {
    if (
      budget.budgetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      budget.budgetType.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return budget
    }
  })

  return (
    <>
      <IncomeExpenseTable all_budgets={all_budgets} />
    </>
  )
}

export default IncomeAndExpense
