"use client"
import React, { useEffect, useState } from "react"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import PageComponent from "@/components/PageComponent"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { getAllBudgets } from "@/redux/createAsyncs"
import ReactSelect from "react-select"
import { months } from "@/lib/months"
import { ISelectOption } from "@/lib/interfaces"

const AllBudgetsPage = () => {
  const dispatch = useAppDispatch()
  const [month, setMonth] = useState<number>(new Date().getMonth())

  let allBudgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )

  useEffect(() => {
    dispatch(getAllBudgets())
  }, [dispatch])

  const perMonth = allBudgets.filter(
    (budget) => new Date(budget.createdAt).getMonth() === month
  )

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
        <ReactSelect
          options={iedOptions}
          onChange={(selected: any) => setMonth(selected?.value)}
          className="text-black"
        />
        <IncomeExpenseTable all_budgets={perMonth} />
      </PageComponent>
    </>
  )
}

export default AllBudgetsPage
