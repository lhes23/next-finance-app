"use client"
import { useAppSelector } from "@/redux/store"
import React from "react"

const PerMonthTotal = () => {
  const { selectBudgetType, selectPerMonthTotal } = useAppSelector(
    (state) => state.budgetSliceReducer
  )
  return (
    <>
      <h1 className="text-white font-semibold text-xl py-2">
        Total {selectBudgetType} : {selectPerMonthTotal}
      </h1>
    </>
  )
}

export default PerMonthTotal
