import { IBudget, IIncomesExpensesData } from "@/lib/interfaces"
import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
  allBudgets: IBudget[]
  yearlyBudgets: IIncomesExpensesData[]
}

const initialState: IInitialState = {
  allBudgets: [],
  yearlyBudgets: []
}

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {}
})

export const {} = budgetSlice.actions

export default budgetSlice.reducer
