import { IBudget, IIncomesExpensesData } from "@/lib/interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllBudgets, getAllYearlyBudgets } from "./createAsyncs"

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
      function (state, action: PayloadAction<IBudget[]>) {
        state.allBudgets = action.payload
      }
    ),
      builder.addCase(
        getAllYearlyBudgets.fulfilled,
        function (state, action: PayloadAction<IIncomesExpensesData[]>) {
          state.yearlyBudgets = action.payload
        }
      )
  }
})

export const { setAllBudgets } = budgetSlice.actions

export default budgetSlice.reducer
