import React from "react";

async function geminiAPI(question: string) {
  const API_KEY = "AIzaSyCjlgb0HRi1RVIgwYF5W-gyUXrWByh5V2g";
  if (!question) {
    return "";
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }],
      }),
    }
  );
  const data = await res.json()
return data.candidates[0].content.parts[0].text;
}

export default geminiAPI;
