import { createSlice } from "@reduxjs/toolkit";
 const initialState = ""
const inputSlice =createSlice({
    name:'inputValue',
    initialState,
    reducers:{
        addText:(state,action)=>{
           return state = action.payload
            
        }

    },
   
})
export const {addText} = inputSlice.actions
export default inputSlice.reducer