import type { TextEnhancementApiResponse } from "@/app/(text-enhancement)/lib/types";
import { API_CONFIG } from "@/lib/config/api";
import { apiFetch } from "@/lib/config/fetcher";

export async function fetchTextEnhancementData(
  asin: string
): Promise<TextEnhancementApiResponse> {
  const { baseUrl, endpoints, apiKeys } = API_CONFIG;

  if (!baseUrl || !endpoints.textEnhancement) {
    throw new Error("Text Enhancement API env variables are missing.");
  }

  return apiFetch<TextEnhancementApiResponse>(
    `${baseUrl}${endpoints.textEnhancement}`,
    apiKeys.textEnhancement,
    "POST",
    { asin }
  );
}