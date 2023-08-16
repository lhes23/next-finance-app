"use client"
import React, { useEffect, useState } from "react"
import { IIncomesExpensesData, IYearOption } from "@/lib/interfaces"
import YearlyTableRow from "./YearlyTableRow"
import ReactSelect from "react-select"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { getAllYearlyBudgets } from "@/redux/createAsyncs"

const YearlyTable = () => {
  const dispatch = useAppDispatch()
  const incomesExpensesData = useAppSelector(
    (state) => state.budgetSliceReducer.yearlyBudgets
  )

  useEffect(() => {
    dispatch(getAllYearlyBudgets())
  }, [dispatch])

  const [year, setYear] = useState<number>(2023)
  const dataIncomeExpense = incomesExpensesData.filter(
    (ied) => ied.year === year
  )

  const options: IYearOption[] = [
    { label: "2023", value: 2023 },
    { label: "2024", value: 2024 },
    { label: "2025", value: 2025 }
  ]

  return (
    <>
      <ReactSelect
        options={options}
        onChange={(selected: any) => setYear(selected?.value)}
        className="text-black"
      />
      <div className="w-full overflow-hidden rounded-lg shadow-xs backdrop-blur-lg bg-white/50 text-black">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-lef uppercase border-b ">
                <th className="px-4 py-3">Month</th>
                <th className="px-4 py-3">Income</th>
                <th className="px-4 py-3">Expense</th>
                <th className="px-4 py-3">Cash Flow</th>
              </tr>
            </thead>
            <tbody className="">
              {dataIncomeExpense.map(
                (incomeExpenseRow: IIncomesExpensesData, i: number) => {
                  return (
                    <YearlyTableRow
                      key={i}
                      incomeExpenseRow={incomeExpenseRow}
                    />
                  )
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default YearlyTable
