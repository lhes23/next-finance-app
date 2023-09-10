import { IBudget, IIncomesExpensesData } from "./interfaces"
import { months } from "./months"

// For Dashboard Cards
export const getIncomeExpenseThisMonth = (incomesExpenses: IBudget[]) => {
  return incomesExpenses?.filter((incomeExpenseRow) => {
    const d = new Date(Date.parse(incomeExpenseRow.createdAt))
      .toString()
      .split(" ")
    const dt = new Date().getMonth()
    if (d[1] === months[dt]) return incomeExpenseRow
  })
}

// For Dashboard Cards
export const getAmount = (incomeExpenseThisMonth: IBudget[], type: string) => {
  return incomeExpenseThisMonth
    .filter((inExp: IBudget) => inExp.budgetType === type)
    .map((c: IBudget) => Number(c.budgetAmount))
    .reduce((a: number, c: number) => a + c, 0)
}

// For Dashboard Charts
export const getIncomesExpensesData = (
  incomesExpenses: IIncomesExpensesData[]
) => {
  let incomesExpensesData = months.map((month) => {
    return {
      id: "",
      year: new Date().getFullYear(),
      month,
      income: 0,
      expense: 0
    }
  })

  incomesExpenses.map((md) => {
    incomesExpensesData.filter((ied) => {
      if (ied.year == md.year && ied.month == md.month) {
        ied.id = md.id
        ied.income = md.income
        ied.expense = md.expense
      }
    })
  })

  return incomesExpensesData
}
