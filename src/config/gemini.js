import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  throw new Error("API key not found!");
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);
    return text; // Zwróć tekst, aby móc go użyć w komponencie React
  } catch (error) {
    console.error("Error", error);
    return "Error";
  }
}

export default runChat;
