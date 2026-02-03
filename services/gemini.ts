import { GoogleGenAI, Type } from "@google/genai";
import { ContentIdea } from "../types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockStrategy = (niche: string, platform: string): ContentIdea[] => {
  const baseHashtags = niche
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .slice(0, 3);

  return [1, 2, 3].map((n) => ({
    day: `Day ${n}`,
    topic: `${niche} growth tip #${n}`,
    caption: `Share a short ${platform} post about ${niche} focusing on tip ${n}. Add a quick CTA and ask a question to boost engagement.`,
    hashtags: baseHashtags
      .concat([platform.toLowerCase().replace(/[^a-z0-9]+/g, "")])
      .slice(0, 5),
    visualSuggestion: `Close-up lifestyle shot or short vertical clip highlighting the ${niche} product or idea with on-screen text for the hook.`,
  }));
};

export const generateContentStrategy = async (
  niche: string,
  platform: string,
): Promise<ContentIdea[]> => {
  // Prefer server-side API key: Vite exposes client env via import.meta.env.VITE_*
  const viteKey =
    typeof import.meta !== "undefined" && (import.meta as any).env
      ? (import.meta as any).env.VITE_API_KEY
      : undefined;
  const nodeKey =
    typeof process !== "undefined" && process.env
      ? process.env.API_KEY
      : undefined;
  const apiKey = viteKey || nodeKey;

  // If there's no API key available (or we're in the browser), return a mocked strategy with simulated delay
  if (!apiKey || typeof window !== "undefined") {
    await sleep(2000); // Simulate 2-second API latency
    return mockStrategy(niche, platform);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a high-engagement 3-day social media content plan for a ${niche} brand on ${platform}. Include a unique topic, an engaging caption, relevant hashtags, and a visual suggestion for each day.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.STRING },
              topic: { type: Type.STRING },
              caption: { type: Type.STRING },
              hashtags: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              visualSuggestion: { type: Type.STRING },
            },
            required: [
              "day",
              "topic",
              "caption",
              "hashtags",
              "visualSuggestion",
            ],
          },
        },
      },
    });

    const text = (response as any).text ?? JSON.stringify(response);
    return JSON.parse(text);
  } catch (error) {
    console.error(
      "Failed to fetch/parse Gemini response, falling back to mock:",
      error,
    );
    return mockStrategy(niche, platform);
  }
};
