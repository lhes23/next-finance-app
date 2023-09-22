import { IIncomesExpensesData } from "@/lib/interfaces"
import React from "react"
import YearlyTableRow from "./YearlyTableRow"
import { useAppSelector } from "@/redux/store"

const YearlyTableBody = () => {
  const filteredYearlyBudgets = useAppSelector(
    (state) => state.budgetSliceReducer.filteredYearlyBudgets
  )
  return (
    <>
      <tbody className="">
        {filteredYearlyBudgets.map(
          (incomeExpenseRow: IIncomesExpensesData, i: number) => {
            return (
              <YearlyTableRow key={i} incomeExpenseRow={incomeExpenseRow} />
            )
          }
        )}
      </tbody>
    </>
  )
}

export default YearlyTableBody
