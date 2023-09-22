import React from "react"
import PageComponent from "@/components/PageComponent"
import YearlyTable from "./components/YearlyTable"
import { getAllYearlyBudgets } from "@/actions/serverActions"

const YearlyBudgetsPage = async () => {
  const yearlyBudgets = await getAllYearlyBudgets()
  return (
    <>
      <PageComponent title="Yearly Budgets">
        <YearlyTable yearlyBudgets={yearlyBudgets} />
      </PageComponent>
    </>
  )
}

export default YearlyBudgetsPage
