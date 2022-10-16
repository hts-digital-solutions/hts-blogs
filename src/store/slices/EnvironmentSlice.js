import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    alertInfo: null
}

const EnvironmentSlice = createSlice({
    name: "environment",
    initialState,
    reducers: {
        setAlertInfo(state, action) {
            state.alertInfo = action.payload.data
        },
        clearAlertInfo(state) {
            state.alertInfo = null
        }
    }
})

export const { setAlertInfo, clearAlertInfo } = EnvironmentSlice.actions

export const getAlertInfo = state => state.environment.alertInfo

export default EnvironmentSlice.reducer