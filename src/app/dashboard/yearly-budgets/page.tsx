import PageComponent from "@/components/PageComponent"
import YearlyTable from "@/components/YearlyTable"
import { fetchData } from "@/lib/fetchData"
import React from "react"

const page = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <PageComponent title="Yearly Budgets" incomesExpenses={incomesExpenses}>
        <YearlyTable />
      </PageComponent>
    </>
  )
}

export default page
