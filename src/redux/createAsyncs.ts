import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllBudgets = createAsyncThunk(
  "budgets/getAllBudgets",
  async () => {
    try {
      const res = await fetch("/api/budgets")
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

export const getAllYearlyBudgets = createAsyncThunk(
  "budgets/getAllYearlyBudgets",
  async () => {
    try {
      const res = await fetch("/api/budgets/yearly")
      const data = await res.json()
      return data
    } catch (error) {}
  }
)
