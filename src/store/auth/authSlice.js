import { createSlice } from '@reduxjs/toolkit'

const status = {
	CHECKING: "checking",
	NOT_AUTHENTICATED: "not-authenticated",
	AUTHENTICATED: "authenticated",
}

const initialState = {
  status: status.NOT_AUTHENTICATED,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("login")
    },
    logout: (state, payload) => {
      console.log("logout")

    },
    checkingCredentials: (state) => {
      console.log("checkingCredentials")
      state.status = status.CHECKING;
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions