"use client"
import React from "react"
import Card from "./Card"
import { GiReceiveMoney, GiPayMoney, GiCash } from "react-icons/gi"
import { useAppSelector } from "@/redux/store"
import {
  getAmount,
  getIncomeExpenseThisMonth
} from "@/lib/getIncomesExpensesData"

const DashboardCards = () => {
  const incomesExpenses = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )
  const incomeExpenseThisMonth = getIncomeExpenseThisMonth(incomesExpenses)

  const incomesAmount = getAmount(incomeExpenseThisMonth, "income")
  const expensesAmount = getAmount(incomeExpenseThisMonth, "expense")
  const cashFlowAmount = incomesAmount - expensesAmount

  const incomeStatement = [
    {
      name: "Incomes",
      amount: incomesAmount.toFixed(2),
      icon: <GiReceiveMoney />
    },
    {
      name: "Expenses",
      amount: expensesAmount.toFixed(2),
      icon: <GiPayMoney />
    },
    {
      name: "Cashflow",
      amount: cashFlowAmount.toFixed(2),
      icon: <GiCash />
    }
  ]

  return (
    <>
      {/* Cards */}
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-3">
        {incomeStatement.map((income, i) => (
          <Card key={i} {...income} />
        ))}
      </div>
    </>
  )
}

export default DashboardCards
