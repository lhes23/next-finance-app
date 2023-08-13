import { IBudget, IIncomesExpensesData } from "@/lib/interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllBudgets } from "./createAsyncs"

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
  reducers: {
    setAllBudgets: (state, action: PayloadAction<IBudget[]>) => {
      state.allBudgets = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllBudgets.fulfilled,
      (state, action) => (state.allBudgets = action.payload)
    )
  }
})

export const { setAllBudgets } = budgetSlice.actions

export default budgetSlice.reducer
