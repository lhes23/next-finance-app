// "use client"
import React from "react"
import Card from "./Card"
import { GiReceiveMoney, GiPayMoney, GiCash } from "react-icons/gi"
import { IBudget } from "@/lib/interfaces"
import { getIncomeExpenseThisMonth } from "@/lib/getIncomeExpensesThisMonth"

const DashboardCards = ({
  incomesExpenses
}: {
  incomesExpenses: IBudget[]
}) => {
  const incomeExpensThisMonth = getIncomeExpenseThisMonth(incomesExpenses)
  const getAmount = (type: string) => {
    return incomeExpensThisMonth
      .filter((inExp: IBudget) => inExp.budgetType === type)
      .map((c: IBudget) => Number(c.budgetAmount))
      .reduce((a: number, c: number) => a + c, 0)
  }

  const incomesAmount = getAmount("income")
  const expensesAmount = getAmount("expense")
  const cashFlowAmount = incomesAmount - expensesAmount

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
