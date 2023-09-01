import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import budgetSliceReducer from "./budgetSlice"
import dashboardSliceReducer from "./dashboardSlice"
import userSliceReducer from "./userSlice"

// Configure Store
export const store = configureStore({
  reducer: {
    budgetSliceReducer,
    dashboardSliceReducer,
    userSliceReducer
  }
})

// Declare type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Configure useAppDispatch and useAppSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
