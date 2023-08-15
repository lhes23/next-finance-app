export interface IBudget {
  id: string
  budgetName: string
  budgetType: string
  budgetAmount: number | string
  createdAt: string
  updatedAt?: string
}

export interface IIncomesExpensesData {
  id: string
  year: number
  month: string
  income: number
  expense: number
  createdAt?: string
  updatedAt?: string
}

export interface IYearOption {
  label: string
  value: number
}
