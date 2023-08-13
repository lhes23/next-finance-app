import { IBudget } from "@/lib/interfaces"
import React from "react"

const PageComponent = ({
  title,
  children,
  incomesExpenses
}: {
  title: string
  children: React.ReactNode
  incomesExpenses: IBudget[]
}) => {
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
