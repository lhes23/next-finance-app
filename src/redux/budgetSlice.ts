import { IBudget, IIncomesExpensesData, ISingleBudget } from "@/lib/interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllBudgets, getAllYearlyBudgets } from "./createAsyncs"

interface IInitialState {
  singleBudget: ISingleBudget
  allBudgets: IBudget[]
  yearlyBudgets: IIncomesExpensesData[]
  searchQuery: string
}

const initialState: IInitialState = {
  singleBudget: {
    id: "",
    budgetName: "",
    budgetType: "expense",
    budgetAmount: ""
  },
  allBudgets: [],
  yearlyBudgets: [],
  searchQuery: ""
}

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setAllBudgets: (state, action: PayloadAction<IBudget[]>) => {
      state.allBudgets = action.payload
    },
    setSingleBudget: (state, action: PayloadAction<ISingleBudget>) => {
      state.singleBudget = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
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

export const { setAllBudgets, setSingleBudget, setSearchQuery } =
  budgetSlice.actions

export default budgetSlice.reducer
