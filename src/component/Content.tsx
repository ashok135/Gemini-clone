import React, { use } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useMutation } from "@tanstack/react-query";
import geminiAPI from "../api/geminiAPI";


function Content() {
  const textdata = useSelector((state: RootState) => state.inputValue);
   const chatData = useSelector((state:RootState)=>state.recentChats)
   console.log(chatData)


 
   
   
  return (
    <div className="pt-20 overflow-y-auto h-[calc(100vh-120px)] ">
      {chatData.length < 2  ? (
        <div>
          <h1 className="gemini-text text-[30px] md:text-[50px] font-semibold">
            Hello,Dev.
          </h1>
          <h2 className="text-[22px] md:text-[60px] text-gray-400 capitalize">
            how can i help you today ?
          </h2>
        </div>
      ) : 

        chatData.map((data)=>{
          return  <div className="max-w-3xl mx-auto">
          <h2 className="text-right">
            <span className="inline-block bg-gray-200 px-2 py-1 rounded-xl">

             { data.qustion}
            </span>
          </h2>

          <p> { data.answer}</p>
        </div>
        })
       
      }
    </div>
  );
}

export default Content;
