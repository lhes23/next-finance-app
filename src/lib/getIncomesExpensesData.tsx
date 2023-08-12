import { IBudget, IIncomesExpensesData } from "./interfaces"
import { months } from "./months"

export const getIncomesExpensesData = (incomesExpenses: IBudget[]) => {
  let incomesExpensesData: IIncomesExpensesData[] = months.map((month) => {
    return { year: 0, month, incomes: 0, expenses: 0, cashFlow: 0 }
  })

  incomesExpenses.map((md) => {
    const b_month = months[new Date(md.createdAt).getMonth()]
    const year = new Date(md.createdAt).getFullYear()

    incomesExpensesData.filter((incomesExpensesData) => {
      // if (
      //   incomesExpensesData.month === b_month &&
      //   incomesExpensesData.year === year
      // ) {
      if (incomesExpensesData.month === b_month) {
        if (md.budgetType === "income") {
          incomesExpensesData.incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData.expenses += Number(md.budgetAmount)
        }
        incomesExpensesData.cashFlow =
          incomesExpensesData.incomes - incomesExpensesData.expenses
      }
    })
  })

  return incomesExpensesData
}
