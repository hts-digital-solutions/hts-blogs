import { configureStore } from "@reduxjs/toolkit"

import EnvironmentReducer from "./slices/EnvironmentSlice"
import AuthReducer from "./slices/AuthSlice"

const store = configureStore({
    reducer: {
        environment: EnvironmentReducer,
        auth: AuthReducer
    }
})

export default store