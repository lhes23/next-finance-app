import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  showModal: false,
  showSidebar: false,
  activeSideMenu: "Dashboard",
  showNotifications: false,
  showProfileMenu: false,
  isButtonLoading: false
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
    },
    setIsButtonLoading: (state, action: PayloadAction<boolean>) => {
      state.isButtonLoading = action.payload
    },
    setActiveSideMenu: (state, action: PayloadAction<string>) => {
      state.activeSideMenu = action.payload
    }
  }
})

export const {
  setShowModal,
  setShowSidebar,
  setShowNotifications,
  setShowProfileMenu,
  setIsButtonLoading,
  setActiveSideMenu
} = dashboardSlice.actions

export default dashboardSlice.reducer
