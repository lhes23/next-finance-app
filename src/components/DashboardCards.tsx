"use client"
import React from "react"
import Card from "./Card"
import { cashData, expensesData, incomesData } from "@/lib/dbData"

const DashboardCards = () => {
  const incomeStatement = [
    {
      name: "income",
      amount: incomesData.map((inc) => inc.income).reduce((a, c) => a + c)
    },
    {
      name: "expenses",
      amount: expensesData
        .map((exp) => exp.expense)
        .reduce((a, c) => a + c)
        .toFixed(2)
    },
    {
      name: "cashflow",
      amount: cashData.map((cash) => cash.flow).reduce((a, c) => a + c)
    }
  ]

  console.log()
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
