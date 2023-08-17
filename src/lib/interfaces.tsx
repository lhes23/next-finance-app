export interface ISingleBudget {
  id: string
  budgetName: string
  budgetType: string
  budgetAmount: number | string
}

export interface IBudget extends ISingleBudget {
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

export interface ISelectOption {
  label: number | string
  value: number
}
