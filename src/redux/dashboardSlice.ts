import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  showModal: false,
  showSidebar: false,
  activeSideMenu: ""
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
    }
  }
})

export const { setShowModal, setShowSidebar } = dashboardSlice.actions

export default dashboardSlice.reducer
