import { IIncomesExpensesData } from "@/lib/interfaces"
import React from "react"

const YearlyTableRow = ({
  incomeExpenseRow
}: {
  incomeExpenseRow: IIncomesExpensesData
}) => {
  const textColor =
    incomeExpenseRow.cashFlow >= 0 ? "text-green-500" : "text-red-500"
  return (
    <>
      <tr className="text-sm">
        <td className="p-2">{incomeExpenseRow.month}</td>
        <td className="p-2">₱ {incomeExpenseRow.incomes}</td>
        <td className="p-2">₱ {incomeExpenseRow.expenses}</td>
        <td className={`p-2 ${textColor}`}>₱ {incomeExpenseRow.cashFlow}</td>
      </tr>
    </>
  )
}

export default YearlyTableRow
