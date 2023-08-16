"use client"
import React, { useEffect } from "react"
import LineChart, { IData } from "./LineChart"
import { getIncomesExpensesData } from "@/lib/getIncomesExpensesData"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { getAllYearlyBudgets } from "@/redux/createAsyncs"

const DashboardCharts = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllYearlyBudgets())
  }, [dispatch])

  const incomesExpenses = useAppSelector(
    (state) => state.budgetSliceReducer.yearlyBudgets
  )
  const monthsIncomesExpenses = getIncomesExpensesData(incomesExpenses)

  const incomesExpensesData: IData = {
    labels: monthsIncomesExpenses.map((m) => m.month),
    datasets: [
      {
        fill: true,
        label: "Income",
        data: monthsIncomesExpenses.map((m) => m.income),
        borderColor: "rgb(21, 128, 61)",
        backgroundColor: "rgba(21, 128, 61, 0.5)"
      },
      {
        fill: true,
        label: "Expenses",
        data: monthsIncomesExpenses.map((m) => m.expense),
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
        data: monthsIncomesExpenses.map((m) => m.income - m.expense),
        borderColor: "blue"
      }
    ]
  }

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-white">Charts</h2>
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
        <div className="min-w-0 p-4 rounded-lg shadow-lg backdrop-blur-lg bg-white/50">
          <h4 className="mb-4 font-semibold text-black">Income and Expenses</h4>
          <LineChart data={incomesExpensesData} />
        </div>
        <div className="min-w-0 p-4 rounded-lg shadow-lg backdrop-blur-lg bg-white/50">
          <h4 className="mb-4 font-semibold text-black">Cash Flow</h4>
          <LineChart data={cashFlowData} />
        </div>
      </div>
    </>
  )
}

export default DashboardCharts
