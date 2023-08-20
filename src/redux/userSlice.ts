import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IUser {
  id: string | null
  email: string | null
  username: string | null
}

const initialState = {
  user: {
    id: "",
    email: "",
    username: ""
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
