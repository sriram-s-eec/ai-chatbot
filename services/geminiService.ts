
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResponse } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    rootCause: {
      type: Type.STRING,
      description: "A concise summary of the most likely root cause or causes of the issue.",
    },
    evidence: {
      type: Type.STRING,
      description: "The evidence, data points, or logical reasoning supporting the identified root cause. This should directly reference the user's input.",
    },
    recommendation: {
      type: Type.STRING,
      description: "Clear, actionable steps to fix the issue. This should be a professional recommendation for a factory engineer.",
    },
  },
  required: ["rootCause", "evidence", "recommendation"],
};

export async function analyzeIssue(issueDescription: string): Promise<AnalysisResponse> {
  const systemInstruction = `You are an AI Root Cause Analysis Assistant (AI RCA Bot) for factory engineers.
Your job is to analyze maintenance logs, PLC error data, and operation manuals to identify probable root causes and suggest effective fixes in clear, professional language.
Follow these steps:
1. Understand the issue from the user's description.
2. Match it with known fault patterns or technical reasoning.
3. Output your answer ONLY in the structured JSON format defined by the schema.
Use logical reasoning and industrial knowledge (e.g., sensor readings, PLC codes, machine manuals) to make your diagnosis realistic.
If the input is unclear, state that more information is needed within the JSON response fields.
Do not respond in any format other than the requested JSON.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: issueDescription,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2, // Lower temperature for more deterministic, factual responses
      },
    });

    const text = response.text.trim();
    const parsedResponse = JSON.parse(text);

    return parsedResponse as AnalysisResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a valid response from the AI model.");
  }
}
