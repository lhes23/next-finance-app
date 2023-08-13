"use client"
import React from "react"
import LineChart, { IData } from "./LineChart"
import { getIncomesExpensesData } from "@/lib/getIncomesExpensesData"
import { useAppSelector } from "@/redux/store"

const DashboardCharts = () => {
  const incomesExpenses = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )
  const monthsIncomesExpenses = getIncomesExpensesData(incomesExpenses)

  const incomesExpensesData: IData = {
    labels: monthsIncomesExpenses.map((m) => m.month),
    datasets: [
      {
        fill: true,
        label: "Income",
        data: monthsIncomesExpenses.map((m) => m.incomes),
        borderColor: "rgb(21, 128, 61)",
        backgroundColor: "rgba(21, 128, 61, 0.5)"
      },
      {
        fill: true,
        label: "Expenses",
        data: monthsIncomesExpenses.map((m) => m.expenses),
        borderColor: "rgb(185, 28, 28)",
        backgroundColor: "rgba(185, 28, 28,0.5)"
      }
    ]
  }

  const cashFlowData = {
    labels: monthsIncomesExpenses.map((m) => m.month),
    datasets: [
      {
        fill: false,
        label: "Cash Flow",
        data: monthsIncomesExpenses.map((m) => m.cashFlow),
        borderColor: "blue"
      }
    ]
  }

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Charts
      </h2>
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-lg">
          <h4 className="mb-4 font-semibold text-gray-600">
            Income and Expenses
          </h4>
          <LineChart data={incomesExpensesData} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-lg">
          <h4 className="mb-4 font-semibold text-gray-600">Cash Flow</h4>
          <LineChart data={cashFlowData} />
        </div>
      </div>
    </>
  )
}

export default DashboardCharts
