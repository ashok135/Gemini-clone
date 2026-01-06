import { ImagePlus, Mic, Send } from "lucide-react";
import React, { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addText } from "../slice/inputSlice";
 
import { useGetAnswer } from "../api/geminiAPI";

function Searchbar() {
 
    const dispatch = useDispatch()
    const inputData=useSelector((state:RootState)=>state.inputValue)
    const answerData=useSelector((state:RootState)=>state.recentChats)
 
    const data =  useGetAnswer ()
  console.log(data)
    const inputRef = useRef<HTMLInputElement>(null);

    
    
 
    console.log(inputData)
       console.log(answerData)

       function setinputvalue (e:React.ChangeEvent<HTMLInputElement>){
        const newValue = e.target.value
       
         dispatch(addText(newValue))

       }
  
    function handleChange(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
       
        if(!inputData){
            return 
        }
        data.mutate(inputData)
      
        dispatch(addText(""))
        
 
      

         
    
        

    }
     
        
 
  return (
    <div className="absolute bottom-4 inset-x-0 px-4">
       
      <form action="on" onSubmit={(e)=>handleChange(e)}>
        <div className=" shadow flex px-4 py-3 rounded-4xl border gap-4">
  
          <input   ref={inputRef} type="text" onChange={(e)=>setinputvalue(e)} value={inputData} className="w-full border-none outline-none focus:outline-none pl-4"  placeholder="Enter here..."/> <ImagePlus />
          <Mic />
          <button type="submit">
            <Send />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
