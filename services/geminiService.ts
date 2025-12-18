
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMatchAnalysis = async (matchDescription: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a deep tactical analysis and prediction for this football match: ${matchDescription}. Include key players to watch and expected scoreline. Use professional sports analyst tone. Keep it concise for a mobile app.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "Failed to load analysis. Please try again.", sources: [] };
  }
};

export const getPlayerScouting = async (playerName: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Scout report for ${playerName}. Include playing style, recent form, and career highlights. Format with markdown.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Player scout report unavailable.";
  }
};
