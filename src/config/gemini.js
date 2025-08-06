import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY; /* API KEY USED IN VITE APP */

if (!API_KEY) {
  throw new Error("API key not found!");
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = await response.text();
  console.log("AI response: ".text);
  return text;
}

export default runChat;
