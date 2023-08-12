import { IBudget, IIncomesExpensesData } from "./interfaces"
import { months } from "./months"

export const getIncomesExpensesData = (incomesExpenses: IBudget[]) => {
  let incomesExpensesData: IIncomesExpensesData[] = months.map((month) => {
    return { month, incomes: 0, expenses: 0, cashFlow: 0 }
  })

  incomesExpenses.map((md) => {
    const b_month = months[new Date(md.createdAt).getMonth()]
    switch (b_month) {
      case "Jan":
        if (md.budgetType === "income") {
          incomesExpensesData[0].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[0].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[0].cashFlow =
          incomesExpensesData[0].incomes - incomesExpensesData[0].expenses
        break
      case "Feb":
        if (md.budgetType === "income") {
          incomesExpensesData[1].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[1].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[1].cashFlow =
          incomesExpensesData[1].incomes - incomesExpensesData[1].expenses
        break
      case "Mar":
        if (md.budgetType === "income") {
          incomesExpensesData[2].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[2].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[2].cashFlow =
          incomesExpensesData[2].incomes - incomesExpensesData[2].expenses
        break
      case "Apr":
        if (md.budgetType === "income") {
          incomesExpensesData[3].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[3].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[3].cashFlow =
          incomesExpensesData[3].incomes - incomesExpensesData[3].expenses
        break
      case "May":
        if (md.budgetType === "income") {
          incomesExpensesData[4].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[4].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[4].cashFlow =
          incomesExpensesData[4].incomes - incomesExpensesData[4].expenses
        break
      case "Jun":
        if (md.budgetType === "income") {
          incomesExpensesData[5].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[5].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[5].cashFlow =
          incomesExpensesData[5].incomes - incomesExpensesData[5].expenses
        break
      case "Jul":
        if (md.budgetType === "income") {
          incomesExpensesData[6].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[6].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[6].cashFlow =
          incomesExpensesData[6].incomes - incomesExpensesData[6].expenses
        break
      case "Aug":
        if (md.budgetType === "income") {
          incomesExpensesData[7].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[7].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[7].cashFlow =
          incomesExpensesData[7].incomes - incomesExpensesData[7].expenses
        break
      case "Sep":
        if (md.budgetType === "income") {
          incomesExpensesData[8].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[8].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[8].cashFlow =
          incomesExpensesData[8].incomes - incomesExpensesData[8].expenses
        break
      case "Oct":
        if (md.budgetType === "income") {
          incomesExpensesData[9].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[9].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[9].cashFlow =
          incomesExpensesData[9].incomes - incomesExpensesData[9].expenses
        break
      case "Nov":
        if (md.budgetType === "income") {
          incomesExpensesData[10].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[10].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[10].cashFlow =
          incomesExpensesData[10].incomes - incomesExpensesData[10].expenses
        break
      case "Dec":
        if (md.budgetType === "income") {
          incomesExpensesData[11].incomes += Number(md.budgetAmount)
        } else {
          incomesExpensesData[11].expenses += Number(md.budgetAmount)
        }
        incomesExpensesData[11].cashFlow =
          incomesExpensesData[11].incomes - incomesExpensesData[11].expenses
        break
      default:
        console.log("No Valid Month")
    }
  })

  return incomesExpensesData
}
