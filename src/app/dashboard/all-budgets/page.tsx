import React from "react"
import IncomeExpenseTable from "@/components/IncomeExpenseTable"
import PageComponent from "@/components/PageComponent"
import { fetchData } from "@/lib/fetchData"

const AllBudgetsPage = async () => {
  const incomesExpenses = await fetchData()
  return (
    <>
      <PageComponent title="All Budget" incomesExpenses={incomesExpenses}>
        <IncomeExpenseTable />
      </PageComponent>
    </>
  )
}

export default AllBudgetsPage
