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
      />
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Month</th>
                <th className="px-4 py-3">Income</th>
                <th className="px-4 py-3">Expense</th>
                <th className="px-4 py-3">Cash Flow</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
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
