import PageComponent from "@/components/PageComponent"
import YearlyTable from "@/components/YearlyTable"
import { fetchData } from "@/lib/fetchData"
import { IIncomesExpensesData } from "@/lib/interfaces"
import { months } from "@/lib/months"
import React from "react"

const page = async () => {
  const incomesExpenses = await fetchData()

  let incomesExpensesData: IIncomesExpensesData[] = months.map((month) => {
    return { year: 2023, month, incomes: 0, expenses: 0, cashFlow: 0 }
  })

  incomesExpenses.map((md: any) => {
    const b_month = months[new Date(md.createdAt).getMonth()]
    const year = new Date(md.createdAt).getFullYear()

    incomesExpensesData.filter((ied: IIncomesExpensesData) => {
      if (ied.month === b_month && ied.year === year) {
        if (md.budgetType === "income") {
          ied.incomes += Number(md.budgetAmount)
        } else {
          ied.expenses += Number(md.budgetAmount)
        }
        ied.cashFlow = ied.incomes - ied.expenses
      }
    })
  })

  console.log({ incomesExpensesData })
  return (
    <>
      <PageComponent title="Yearly Budgets" incomesExpenses={incomesExpenses}>
        <YearlyTable />
      </PageComponent>
    </>
  )
}

export default page
