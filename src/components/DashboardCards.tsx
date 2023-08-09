"use client"
import React from "react"
import Card from "./Card"
import { GiReceiveMoney, GiPayMoney, GiCash } from "react-icons/gi"
import { IBudget } from "@/lib/interfaces"

const DashboardCards = ({
  incomesExpenses
}: {
  incomesExpenses: IBudget[]
}) => {
  const getAmount = (type: string) => {
    return parseInt(
      incomesExpenses
        .filter((inExp: any) => inExp.budgetType === type)
        .map((c: any) => c.budgetAmount)
        .reduce((a: any, c: any) => Number(a) + Number(c), 0)
    )
  }

  const incomesAmount = getAmount("income")
  const expensesAmount = getAmount("expense")
  const cashFlowAmount = incomesAmount - expensesAmount

  const incomeStatement = [
    {
      name: "income",
      amount: incomesAmount,
      icon: <GiReceiveMoney />,
      color: "bg-green-500"
    },
    {
      name: "expenses",
      amount: expensesAmount,
      icon: <GiPayMoney />,
      color: "bg-red-500"
    },
    {
      name: "cashflow",
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
