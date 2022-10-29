import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: 'Tridev Sharma',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        email: 'sendmailtotridev@gmail.com'
    },
    token: null,
    isLoggedIn: true
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
export const getAuth = state => state.auth

export default AuthSlice.reducer