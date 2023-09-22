"use client"
import { IIncomesExpensesData, ISelectOption } from "@/lib/interfaces"
import { setFilteredYearlyBudgets } from "@/redux/budgetSlice"
import { useAppDispatch } from "@/redux/store"
import React, { useEffect, useState } from "react"
import ReactSelect from "react-select"

const YearBudgetsSelect = ({
  yearlyBudgets
}: {
  yearlyBudgets: IIncomesExpensesData[]
}) => {
  const dispatch = useAppDispatch()
  const [year, setYear] = useState<number>(2023)
  const dataIncomeExpense = yearlyBudgets.filter((ied) => ied.year === year)

  useEffect(() => {
    dispatch(setFilteredYearlyBudgets(dataIncomeExpense))
  }, [dataIncomeExpense, dispatch])

  const iedOptions: ISelectOption[] = [
    { label: "2023", value: 2023 },
    { label: "2024", value: 2024 },
    { label: "2025", value: 2025 },
    { label: "2026", value: 2026 }
  ]
  return (
    <>
      <ReactSelect
        options={iedOptions}
        onChange={(selected: any) => setYear(selected?.value)}
        className="text-black"
      />
    </>
  )
}

export default YearBudgetsSelect
