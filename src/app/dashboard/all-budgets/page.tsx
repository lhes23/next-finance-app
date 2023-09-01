"use client"
import React, { useState } from "react"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import PageComponent from "@/components/PageComponent"
import { useAppSelector } from "@/redux/store"
import ReactSelect from "react-select"
import { months } from "@/lib/months"
import { ISelectOption } from "@/lib/interfaces"

const AllBudgetsPage = () => {
  let allBudgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [budgetType, setBudgetType] = useState<string>("")

  const perMonth = allBudgets.filter((budget) => {
    if (budgetType !== "") {
      if (
        new Date(budget.createdAt).getMonth() === month &&
        budget.budgetType === budgetType
      ) {
        return budget
      }
    } else {
      if (new Date(budget.createdAt).getMonth() === month) {
        return budget
      }
    }
  })

  const iedOptionsAll = allBudgets.map((budget) =>
    new Date(budget.createdAt).getMonth()
  )

  const iedOptions: ISelectOption[] = Array.from(new Set(iedOptionsAll)).map(
    (ied) => {
      return {
        label: months[ied],
        value: ied
      }
    }
  )

  return (
    <>
      <PageComponent title="All Budget">
        <div className="flex w-full">
          <ReactSelect
            options={iedOptions}
            onChange={(selected: any) => setMonth(selected?.value)}
            className="text-black w-full"
            placeholder="Month"
          />
          <ReactSelect
            options={[
              { label: "Income", value: "income" },
              { label: "Expenses", value: "expense" },
              { label: "All", value: "" }
            ]}
            onChange={(selected: any) => setBudgetType(selected?.value)}
            className="text-black w-full"
            placeholder="Budget Type"
          />
        </div>
        <IncomeExpenseTable all_budgets={perMonth} />
      </PageComponent>
    </>
  )
}

export default AllBudgetsPage
