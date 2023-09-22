import React from "react"
import Card from "./Card"
import { GiReceiveMoney, GiPayMoney, GiCash } from "react-icons/gi"
import {
  getAmount,
  getIncomeExpenseThisMonth
} from "@/lib/getIncomesExpensesData"
import { getAllBudgets } from "@/actions/serverActions"

const DashboardCards = async () => {
  const incomesExpenses = await getAllBudgets()
  const incomeExpenseThisMonth = await getIncomeExpenseThisMonth(
    incomesExpenses
  )

  const incomesAmount = getAmount(incomeExpenseThisMonth, "income")
  const expensesAmount = getAmount(incomeExpenseThisMonth, "expense")
  const cashFlowAmount = (incomesAmount - expensesAmount).toFixed(2)

  const incomeStatement = [
    {
      name: "Incomes",
      amount: incomesAmount,
      icon: <GiReceiveMoney />
    },
    {
      name: "Expenses",
      amount: expensesAmount,
      icon: <GiPayMoney />
    },
    {
      name: "Cashflow",
      amount: cashFlowAmount,
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
