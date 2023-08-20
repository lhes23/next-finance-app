"use client"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { getAllBudgets, getAllYearlyBudgets } from "@/redux/createAsyncs"
import { setIsButtonLoading, setShowSidebar } from "@/redux/dashboardSlice"
import BudgetModal from "./BudgetModal"
import { useRouter } from "next/navigation"

const PageComponent = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.userSliceReducer.user)
  const { push } = useRouter()

  useEffect(() => {
    if (user.id === "") return push("/")
    dispatch(getAllBudgets())
    dispatch(getAllYearlyBudgets())
    dispatch(setShowSidebar(false))
    dispatch(setIsButtonLoading(false))
  }, [dispatch, user, push])

  useEffect(() => console.log({ user }), [user])

  return (
    <>
      <BudgetModal />
      <h2 className="my-6 text-2xl font-semibold text-white">{title}</h2>
      {children}
    </>
  )
}

export default PageComponent
