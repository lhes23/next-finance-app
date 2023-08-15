import React from "react"
import PageComponent from "@/components/PageComponent"
import YearlyTable from "@/components/YearlyTable"
import { fetchDataYearly } from "@/lib/fetchData"

const page = async () => {
  const incomesExpensesData = await fetchDataYearly()
  return (
    <>
      <PageComponent title="Yearly Budgets">
        <YearlyTable incomesExpensesData={incomesExpensesData} />
      </PageComponent>
    </>
  )
}

export default page
