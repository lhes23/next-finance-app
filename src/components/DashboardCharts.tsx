import React from "react"
import LineChart, { IData } from "./LineChart"
import { cashData, expensesData, incomesData, months } from "@/lib/months"

const DashboardCharts = () => {
  const incomesExpensesData: IData = {
    labels: months,
    datasets: [
      {
        fill: true,
        label: "Income",
        data: incomesData.map((inc) => inc.income),
        borderColor: "rgb(21, 128, 61)",
        backgroundColor: "rgba(21, 128, 61, 0.5)"
      },
      {
        fill: true,
        label: "Expenses",
        data: expensesData.map((inc) => inc.expense),
        borderColor: "rgb(185, 28, 28)",
        backgroundColor: "rgba(185, 28, 28,0.5)"
      }
    ]
  }

  const cashFlowData = {
    labels: months,
    datasets: [
      {
        fill: false,
        label: "Cash Flow",
        data: cashData.map((c) => c.flow),
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
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Income and Expenses
          </h4>
          <LineChart data={incomesExpensesData} />
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Cash Flow
          </h4>
          <LineChart data={cashFlowData} />
        </div>
      </div>
    </>
  )
}

export default DashboardCharts
