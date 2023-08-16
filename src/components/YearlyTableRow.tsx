import { IIncomesExpensesData } from "@/lib/interfaces"
import React from "react"

const YearlyTableRow = ({
  incomeExpenseRow
}: {
  incomeExpenseRow: IIncomesExpensesData
}) => {
  const cashFlow = incomeExpenseRow.income - incomeExpenseRow.expense
  const textColor = cashFlow > 0 ? "text-green-500" : "text-red-500"

  return (
    <>
      <tr className="text-sm">
        <td className="px-4 py-3">{incomeExpenseRow.month}</td>
        <td className="px-4 py-3">₱ {incomeExpenseRow.income}</td>
        <td className="px-4 py-3">₱ {incomeExpenseRow.expense}</td>
        <td className={`px-4 py-3 ${textColor}`}>₱ {cashFlow}</td>
      </tr>
    </>
  )
}

export default YearlyTableRow
