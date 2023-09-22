"use client"
import { IBudget, ISelectOption } from "@/lib/interfaces"
import { months } from "@/lib/months"
import {
  setFilteredAllBudgets,
  setSelectBudgetType,
  setSelectPerMonthTotal
} from "@/redux/budgetSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import React, { useEffect, useState } from "react"
import ReactSelect from "react-select"

const MonthsBudgetTypeSelect = ({ allBudgets }: { allBudgets: IBudget[] }) => {
  const [month, setMonth] = useState<number>(new Date().getMonth())

  const dispatch = useAppDispatch()
  const budgetType = useAppSelector(
    (state) => state.budgetSliceReducer.selectBudgetType
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

  const perMonthTotal = perMonth
    .map((p) => (p.budgetType === budgetType ? Number(p.budgetAmount) : 0))
    .reduce((a, c) => a + c, 0)

  useEffect(() => {
    dispatch(setFilteredAllBudgets(perMonth))
    dispatch(setSelectPerMonthTotal(perMonthTotal))
  }, [perMonth, dispatch, perMonthTotal])

  return (
    <>
      <ReactSelect
        options={iedOptions}
        onChange={(selected: any) => {
          setMonth(selected?.value)
        }}
        className="text-black w-full"
        placeholder="Month"
      />
      <ReactSelect
        options={[
          { label: "Income", value: "income" },
          { label: "Expenses", value: "expense" },
          { label: "All", value: "" }
        ]}
        onChange={(selected: any) => {
          dispatch(setSelectBudgetType(selected?.value))
          dispatch(setSelectPerMonthTotal(perMonthTotal))
        }}
        className="text-black w-full"
        placeholder="Budget Type"
      />
    </>
  )
}

export default MonthsBudgetTypeSelect
