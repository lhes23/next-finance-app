import React from "react"
import PageComponent from "@/components/PageComponent"
import YearlyTable from "@/components/YearlyTable"

const page = () => {
  return (
    <>
      <PageComponent title="Yearly Budgets">
        <YearlyTable />
      </PageComponent>
    </>
  )
}

export default page
