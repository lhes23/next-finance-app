"use client"
import React from "react"
import { IBudget } from "@/lib/interfaces"
import TableRow from "./TableRow"

const IncomeExpenseTable = ({ all_budgets }: { all_budgets: IBudget[] }) => {
  return (
    <>
      <div className="w-full overflow-hidden rounded-lg shadow-xs mb-16">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b dark:border-gray-700 bg-gray-50">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3 col-span-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-700">
              {all_budgets.map((incomeExpenseRow: IBudget) => {
                return (
                  <TableRow
                    key={incomeExpenseRow.id}
                    incomeExpenseRow={incomeExpenseRow}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default IncomeExpenseTable
