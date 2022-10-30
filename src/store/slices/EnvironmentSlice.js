import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    alertInfo: null,
    sidebarVisible: false
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
        },
        toggleSidebar(state, action) {
            state.sidebarVisible = action?.payload?.state === 'close' ? false : !state.sidebarVisible
        }
    }
})

export const { setAlertInfo, clearAlertInfo, toggleSidebar } = EnvironmentSlice.actions

export const getAlertInfo = state => state.environment.alertInfo
export const isSidebarVisible = state => state.environment.sidebarVisible

export default EnvironmentSlice.reducer