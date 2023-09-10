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
  const cashFlowAmount = (incomesAmount - expensesAmount).toFixed(2)

  const incomeStatement = [
    {
      name: "Income",
      amount: incomesAmount,
      icon: <GiReceiveMoney />,
      color: "bg-green-500"
    },
    {
      name: "Expenses",
      amount: expensesAmount,
      icon: <GiPayMoney />,
      color: "bg-red-500"
    },
    {
      name: "Cashflow",
      amount: cashFlowAmount,
      icon: <GiCash />,
      color: "bg-blue-500"
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
