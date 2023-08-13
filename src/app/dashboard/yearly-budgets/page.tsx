import YearlyTable from "@/components/YearlyTable"
import { fetchData } from "@/lib/fetchData"
import React from "react"

const page = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <>
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Yearly Budgets
        </h2>
        {/* New Table */}
        <YearlyTable incomesExpenses={incomesExpenses} />
      </>
    </>
  )
}

export default page
