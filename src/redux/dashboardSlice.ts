import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  showModal: false,
  showSidebar: false,
  activeSideMenu: "",
  showNotifications: false,
  showProfileMenu: false
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
    setShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload
    },
    setShowNotifications: (state, action: PayloadAction<boolean>) => {
      state.showNotifications = action.payload
    },
    setShowProfileMenu: (state, action: PayloadAction<boolean>) => {
      state.showProfileMenu = action.payload
    }
  }
})

export const {
  setShowModal,
  setShowSidebar,
  setShowNotifications,
  setShowProfileMenu
} = dashboardSlice.actions

export default dashboardSlice.reducer
