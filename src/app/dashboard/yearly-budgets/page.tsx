import React from "react"
import PageComponent from "@/components/PageComponent"
import YearlyTable from "@/components/YearlyTable"

const YearlyBudgetsPage = () => {
  return (
    <>
      <PageComponent title="Yearly Budgets">
        <YearlyTable />
      </PageComponent>
    </>
  )
}

export default YearlyBudgetsPage
