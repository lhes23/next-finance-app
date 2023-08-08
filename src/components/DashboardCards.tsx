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
      color: "green"
    },
    {
      name: "expenses",
      amount: expensesAmount,
      icon: <GiPayMoney />,
      color: "red"
    },
    {
      name: "cashflow",
      amount: cashFlowAmount,
      icon: <GiCash />,
      color: "blue"
    }
  ]

  return (
    <>
      {/* Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        {incomeStatement.map((income, i) => (
          <Card key={i} {...income} />
        ))}
      </div>
    </>
  )
}

export default DashboardCards
