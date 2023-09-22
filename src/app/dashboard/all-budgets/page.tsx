import React from "react"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import PageComponent from "@/components/PageComponent"
import { getAllBudgets } from "@/actions/serverActions"
import PerMonthTotal from "./components/PerMonthTotal"
import MonthsBudgetTypeSelect from "./components/MonthsBudgetTypeSelect"

const AllBudgetsPage = async () => {
  const allBudgets = await getAllBudgets()
  return (
    <>
      <PageComponent title="All Budget">
        <PerMonthTotal />
        <div className="flex w-full my-2">
          <MonthsBudgetTypeSelect allBudgets={allBudgets} />
        </div>
        <IncomeExpenseTable allBudgets={allBudgets} />
      </PageComponent>
    </>
  )
}

export default AllBudgetsPage
