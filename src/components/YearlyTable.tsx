"use client"
import React from "react"
import { IIncomesExpensesData } from "@/lib/interfaces"
import YearlyTableRow from "./YearlyTableRow"

const YearlyTable = ({
  incomesExpensesData
}: {
  incomesExpensesData: IIncomesExpensesData[]
}) => {
  return (
    <>
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
              {incomesExpensesData.map(
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
