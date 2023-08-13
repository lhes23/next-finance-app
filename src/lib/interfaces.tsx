export interface IBudget {
  id: string
  budgetName: string
  budgetType: string
  budgetAmount: number | string
  createdAt: string
  updatedAt?: string
}

export interface IIncomesExpensesData {
  year: number
  month: string
  incomes: number
  expenses: number
  cashFlow: number
}
