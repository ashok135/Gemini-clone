import { createSlice } from "@reduxjs/toolkit";

interface ChatProps {
    id:number,
    qustion:string
    answer:string
}

const initialState:ChatProps[] =  [
    {
        id:0,
        qustion:"",
        answer:""
    }
]

const recentChat=createSlice({
    name:"recentChats",
    initialState,
    reducers:{
        addAnswer:(state,action)=>{
             state.push({id:state[0].id+1,qustion:action.payload.qustion,answer :action.payload.answer})
             
            
        }

    }
})

export default recentChat.reducer
export const {addAnswer}=recentChat.actions