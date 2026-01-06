import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../slice/inputSlice"
import recentChatReducer from '../slice/RecentChatSlice'


export const store = configureStore({
    reducer:{
        inputValue: inputReducer,
        recentChats:recentChatReducer

    }
})

 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch