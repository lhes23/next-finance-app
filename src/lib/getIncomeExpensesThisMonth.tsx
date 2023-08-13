import { IBudget } from "./interfaces"
import { months } from "./months"

export const getIncomeExpenseThisMonth = (incomesExpenses: IBudget[]) => {
  return incomesExpenses?.filter((incomeExpenseRow) => {
    const d = new Date(Date.parse(incomeExpenseRow.createdAt))
      .toString()
      .split(" ")
    const dt = new Date().getMonth()
    if (d[1] === months[dt]) return incomeExpenseRow
  })
}
