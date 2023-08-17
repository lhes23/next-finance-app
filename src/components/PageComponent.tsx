"use client"
import React, { useEffect } from "react"
import { useAppDispatch } from "@/redux/store"
import { getAllBudgets, getAllYearlyBudgets } from "@/redux/createAsyncs"
import { setIsButtonLoading, setShowSidebar } from "@/redux/dashboardSlice"
import BudgetModal from "./BudgetModal"

const PageComponent = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllBudgets())
    dispatch(getAllYearlyBudgets())
    dispatch(setShowSidebar(false))
    dispatch(setIsButtonLoading(false))
  }, [dispatch])

  return (
    <>
      <BudgetModal />
      <h2 className="my-6 text-2xl font-semibold text-white">{title}</h2>
      {children}
    </>
  )
}

export default PageComponent
