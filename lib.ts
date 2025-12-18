
import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const fetchAIInsight = async (prompt: string) => {
  const model = "gemini-3-flash-preview";
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: { tools: [{ googleSearch: {} }] }
    });
    return response.text;
  } catch (err) {
    console.error(err);
    return "Analysis unavailable at the moment.";
  }
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const clsx = (...classes: any[]) => classes.filter(Boolean).join(' ');
