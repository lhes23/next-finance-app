"use client"
import React, { useEffect } from "react"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import PageComponent from "@/components/PageComponent"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { getAllBudgets } from "@/redux/createAsyncs"

const AllBudgetsPage = () => {
  const dispatch = useAppDispatch()

  let all_budgets = useAppSelector(
    (state) => state.budgetSliceReducer.allBudgets
  )

  useEffect(() => {
    dispatch(getAllBudgets())
  }, [dispatch])

  return (
    <>
      <PageComponent title="All Budget">
        <IncomeExpenseTable all_budgets={all_budgets} />
      </PageComponent>
    </>
  )
}

export default AllBudgetsPage
