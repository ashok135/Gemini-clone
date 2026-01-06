import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addAnswer } from "../slice/RecentChatSlice";
import { useMutation } from "@tanstack/react-query";

async function geminiAPI(question: string) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  
 

if (!question) return "";

  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    }),
  });

  const data = await res.json();

  console.log(data);

  // ✅ return ONLY the answer text
  return data.choices?.[0]?.message?.content ?? "";
}

export const useGetAnswer = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (inputData: string) => geminiAPI(inputData),
     onSuccess: (answer:any,inputData: string) => {
      console.log(answer)
      dispatch(addAnswer({
        qustion:inputData,answer:answer
      }));
    },
  });
};

export default geminiAPI;
