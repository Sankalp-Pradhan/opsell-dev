import { KeywordGapData } from "@/app/components/keyword-gap/api";
import { API_CONFIG } from "@/lib/config/api";
import { apiFetch } from "@/lib/config/fetcher";


export async function fetchKeywordGapReport(
  asin: string
): Promise<KeywordGapData> {
  const { baseUrl, endpoints, apiKeys } = API_CONFIG;

  if (!baseUrl || !endpoints.keywordGap) {
    throw new Error("Keyword Gap API env variables are missing.");
  }

  return apiFetch<KeywordGapData>(
    `${baseUrl}${endpoints.keywordGap}`,
    apiKeys.keywordGap,
    "POST",
    { asin }
  );
}