"use client"
import React, { useEffect } from "react"
import { useAppDispatch } from "@/redux/store"
import { getAllBudgets } from "@/redux/createAsyncs"

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
  }, [dispatch])

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
