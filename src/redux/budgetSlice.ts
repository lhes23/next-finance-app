import { IBudget, IIncomesExpensesData, ISingleBudget } from "@/lib/interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { getAllBudgets, getAllYearlyBudgets } from "./createAsyncs2"

interface IInitialState {
  singleBudget: ISingleBudget
  allBudgets: IBudget[]
  yearlyBudgets: IIncomesExpensesData[]
  searchQuery: string
  selectBudgetType: string
  selectPerMonthTotal: number
  filteredAllBudgets: IBudget[]
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
  searchQuery: "",
  selectBudgetType: "",
  selectPerMonthTotal: 0,
  filteredAllBudgets: []
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
    },
    setSelectBudgetType: (state, action: PayloadAction<string>) => {
      state.selectBudgetType = action.payload
    },
    setSelectPerMonthTotal: (state, action: PayloadAction<number>) => {
      state.selectPerMonthTotal = action.payload
    },
    setFilteredAllBudgets: (state, action: PayloadAction<IBudget[]>) => {
      state.filteredAllBudgets = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     getAllBudgets.fulfilled,
  //     function (state, action: PayloadAction<IBudget[]>) {
  //       state.allBudgets = action.payload
  //     }
  //   ),
  //     builder.addCase(
  //       getAllYearlyBudgets.fulfilled,
  //       function (state, action: PayloadAction<IIncomesExpensesData[]>) {
  //         state.yearlyBudgets = action.payload
  //       }
  //     )
  // }
})

export const {
  setAllBudgets,
  setSingleBudget,
  setSearchQuery,
  setSelectBudgetType,
  setSelectPerMonthTotal,
  setFilteredAllBudgets
} = budgetSlice.actions

export default budgetSlice.reducer
