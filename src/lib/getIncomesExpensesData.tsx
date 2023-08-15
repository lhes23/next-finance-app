import { IBudget, IIncomesExpensesData } from "./interfaces"
import { months } from "./months"

export const getIncomesExpensesData = (incomesExpenses: IBudget[]) => {
  let incomesExpensesData: IIncomesExpensesData[] = months.map((month) => {
    return {
      id: Math.random().toString(),
      year: 0,
      month,
      income: 0,
      expense: 0
    }
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
          incomesExpensesData.income += Number(md.budgetAmount)
        } else {
          incomesExpensesData.expense += Number(md.budgetAmount)
        }
      }
    })
  })

  return incomesExpensesData
}

export const getIncomesExpensesData2 = (
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
