import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import budgetSliceReducer from "./budgetSlice"

// Configure Store
export const store = configureStore({
  reducer: {
    budgetSliceReducer
  }
})

// Declare type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Configure useAppDispatch and useAppSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
