"use client"
import React, { useEffect } from "react"
import { IBudget } from "@/lib/interfaces"
import { setAllBudgets } from "@/redux/budgetSlice"
import { useAppDispatch } from "@/redux/store"

const PageComponent = ({
  title,
  children,
  incomesExpenses
}: {
  title: string
  children: React.ReactNode
  incomesExpenses: IBudget[]
}) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setAllBudgets(incomesExpenses))
  }, [dispatch, incomesExpenses])

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h2>
      {children}
    </>
  )
}

export default PageComponent
