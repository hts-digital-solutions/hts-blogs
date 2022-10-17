import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        clearAuth(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null
        }
    }
})

export const { setAuth, clearAuth } = AuthSlice.actions

export const getUser = state => state.auth.user
export const isLoggedIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token

export default AuthSlice.reducer