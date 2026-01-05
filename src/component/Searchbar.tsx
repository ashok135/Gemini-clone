import { ImagePlus, Mic, Send } from "lucide-react";
import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addText } from "../slice/inputSlice";
import geminiAPI from "../api/geminiAPI";
import { useMutation } from "@tanstack/react-query";

function Searchbar() {

    const [value,setValue]= useState("")
    const dispatch = useDispatch()
    const inputData=useSelector((state:RootState)=>state.inputValue)
    const mutation =useMutation({mutationFn:geminiAPI,})
    console.log(inputData)
    function handleChange(e:any){
        e.preventDefault()
        dispatch(addText(value))
        if(!inputData){
            return 
        }
        mutation.mutate(inputData)
        
         
        

    }

 
  return (
    <div className="absolute bottom-4 inset-x-0 px-4">
       
      <form action="" onClick={(e)=>handleChange(e)}>
        <div className=" shadow flex px-4 py-3 rounded-4xl border gap-4">
             {mutation.isPending && <p>Thinking...</p>}
      {mutation.isError && <p>Something went wrong</p>}
      {mutation.data && <p>{mutation.data}</p>}
          <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} className="w-full border-none outline-none focus:outline-none pl-4"  placeholder="Enter here..."/> <ImagePlus />
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
