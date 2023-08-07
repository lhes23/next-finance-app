export interface IBudget {
  id: string
  budgetName: string
  budgetType: string
  budgetAmount: number | string
  createdAt?: string
  updatedAt?: string
}
