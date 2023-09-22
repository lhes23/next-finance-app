"use client"
import React, { useEffect, useState } from "react"
import { IIncomesExpensesData, ISelectOption } from "@/lib/interfaces"
import YearlyTableRow from "./YearlyTableRow"
import ReactSelect from "react-select"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import YearlyTableBody from "@/app/dashboard/yearly-budgets/components/YearlyTableBody"
import YearBudgetsSelect from "./YearBudgetsSelect"
// import { getAllYearlyBudgets } from "@/redux/createAsyncs2"

const YearlyTable = ({
  yearlyBudgets
}: {
  yearlyBudgets: IIncomesExpensesData[]
}) => {
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getAllYearlyBudgets())
  // }, [dispatch])

  // const iedOptions: ISelectOption[] = incomesExpensesData.map((ied) => {
  //   return {
  //     label: ied.year,
  //     value: ied.year
  //   }
  // })

  return (
    <>
      <YearBudgetsSelect yearlyBudgets={yearlyBudgets} />
      <div className="w-full overflow-hidden rounded-lg shadow-xs backdrop-blur-lg bg-white/50 text-black">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b ">
                <th className="px-4 py-3">Month</th>
                <th className="px-4 py-3">Income</th>
                <th className="px-4 py-3">Expense</th>
                <th className="px-4 py-3">Cash Flow</th>
              </tr>
            </thead>
            <YearlyTableBody />
          </table>
        </div>
      </div>
    </>
  )
}

export default YearlyTable
