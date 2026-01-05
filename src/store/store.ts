import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../slice/inputSlice"


export const store = configureStore({
    reducer:{
        inputValue: inputReducer

    }
})

 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch