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

  let perMonthTotal: number = perMonth
    .map((p) => (p.budgetType === budgetType ? Number(p.budgetAmount) : 0))
    .reduce((a, c) => a + c, 0)

  return (
    <>
      <PageComponent title="All Budget">
        <h1 className="text-white font-semibold text-xl py-2">
          Total {budgetType} : {perMonthTotal}
        </h1>
        <div className="flex w-full my-2">
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
