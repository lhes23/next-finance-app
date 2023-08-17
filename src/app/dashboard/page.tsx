"use client"
import React from "react"
import PageComponent from "@/components/PageComponent"
import DashboardCards from "@/components/DashboardCards"
import DashboardCharts from "@/components/DashboardCharts"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import { useAppSelector } from "@/redux/store"

const DashboardPage = () => {
  let all_budgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )

  all_budgets = all_budgets.filter(
    (budget) =>
      new Date(budget.createdAt).getFullYear() === new Date().getFullYear() &&
      new Date(budget.createdAt).getMonth() === new Date().getMonth() &&
      new Date(budget.createdAt).getMonth()
  )

  return (
    <>
      <PageComponent title="Dashboard">
        {/* Cards */}
        <DashboardCards />

        {/* Charts */}
        <DashboardCharts />

        {/* New Table */}
        <IncomeExpenseTable all_budgets={all_budgets} />
      </PageComponent>
    </>
  )
}

export default DashboardPage
