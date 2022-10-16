import { configureStore } from "@reduxjs/toolkit"

import EnvironmentReducer from "./slices/EnvironmentSlice"

const store = configureStore({
    reducer: {
        environment: EnvironmentReducer
    }
})

export default store