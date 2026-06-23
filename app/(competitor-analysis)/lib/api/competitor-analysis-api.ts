// import {
//   CompetitorAnalysisData,
//   CompetitorApiResponse,
//   KeywordGapApiResponse,
//   LQSApiResponse,
// } from "../../types/api";

// import { API_CONFIG } from "@/lib/config/api";

// import { mockCompetitorAnalysisData } from "./mock-data";
// import { apiFetch } from "@/lib/config/fetcher";

// /* -------------------------------------------------------------------------- */
// /* Helpers */
// /* -------------------------------------------------------------------------- */

// function buildUrl(
//   baseUrl: string,
//   endpoint: string,
//   asin: string
// ) {
//   const url = new URL(
//     `${baseUrl}${endpoint}`
//   );

//   url.searchParams.set("asin", asin);

//   return url.toString();
// }

// /* -------------------------------------------------------------------------- */
// /* LQS */
// /* -------------------------------------------------------------------------- */

// export async function fetchLQSData(
//   asin: string
// ): Promise<LQSApiResponse> {
//   const baseUrl = API_CONFIG.baseUrl;
//   const endpoint = API_CONFIG.endpoints.lqs;
//   const apiKey = API_CONFIG.apiKeys.lqs;

//   if (!baseUrl || !endpoint) {
//     throw new Error(
//       "LQS API env variables are missing."
//     );
//   }

//   return apiFetch<LQSApiResponse>(
//     buildUrl(baseUrl, endpoint, asin),
//     apiKey
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* Competitor */
// /* -------------------------------------------------------------------------- */

// export async function fetchCompetitorData(
//   asin: string
// ): Promise<CompetitorApiResponse> {
//   const baseUrl = API_CONFIG.baseUrl;
//   const endpoint = API_CONFIG.endpoints.competitor;
//   const apiKey = API_CONFIG.apiKeys.competitor;

//   if (!baseUrl || !endpoint) {
//     throw new Error("Competitor API env variables are missing.");
//   }

//   const url = `${baseUrl}${endpoint}`;

//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
//     },
//     body: JSON.stringify({ asin }),
//   });

//   if (!res.ok) {
//     throw new Error(`Competitor API error: ${res.status} ${res.statusText}`);
//   }

//   return res.json() as Promise<CompetitorApiResponse>;
// }
// /* -------------------------------------------------------------------------- */
// /* Keyword Gap */
// /* -------------------------------------------------------------------------- */

// export async function fetchKeywordGapData(
//   asin: string
// ): Promise<KeywordGapApiResponse> {
//   const baseUrl = API_CONFIG.baseUrl;
//   const endpoint = API_CONFIG.endpoints.keywordGap;
//   const apiKey = API_CONFIG.apiKeys.keywordGap;

//   if (!baseUrl || !endpoint) {
//     throw new Error(
//       "Keyword Gap API env variables are missing."
//     );
//   }

//   return apiFetch<KeywordGapApiResponse>(
//     buildUrl(baseUrl, endpoint, asin),
//     apiKey
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* Combined */
// /* -------------------------------------------------------------------------- */

// export async function fetchCompetitorAnalysisData(
//   asin: string
// ): Promise<CompetitorAnalysisData> {
//   try {
//     const [lqs, competitor, keywordGap] =
//       await Promise.all([
//         fetchLQSData(asin),
//         fetchCompetitorData(asin),
//         fetchKeywordGapData(asin),
//       ]);

//     return {
//       lqs,
//       competitor,
//       keywordGap,
//     };
//   } catch (error) {
//     console.error(error);

//     return mockCompetitorAnalysisData;
//   }
// }




import {
  CompetitorAnalysisData,
  CompetitorApiResponse,
  KeywordGapApiResponse,
  LQSApiResponse,
} from "../../types/api";
import { API_CONFIG } from "@/lib/config/api";
import { apiFetch } from "@/lib/config/fetcher";

/* --- Helpers -------------------------------------------------------------- */

function buildGetUrl(baseUrl: string, endpoint: string, asin: string) {
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.set("asin", asin);
  return url.toString();
}

function buildPostUrl(baseUrl: string, endpoint: string) {
  return `${baseUrl}${endpoint}`;
}

/* --- LQS — GET ------------------------------------------------------------ */

export async function fetchLQSData(asin: string): Promise<LQSApiResponse> {
  const { baseUrl, endpoints, apiKeys } = API_CONFIG;
  if (!baseUrl || !endpoints.lqs) throw new Error("LQS API env variables are missing.");

  return apiFetch<LQSApiResponse>(
    `${baseUrl}${endpoints.lqs}`,
    apiKeys.lqs,
    "POST",
    { asin }
  );
}

/* --- Competitor — POST ---------------------------------------------------- */

export async function fetchCompetitorData(asin: string): Promise<CompetitorApiResponse> {
  const { baseUrl, endpoints, apiKeys } = API_CONFIG;
  if (!baseUrl || !endpoints.competitor) throw new Error("Competitor API env variables are missing.");

  return apiFetch<CompetitorApiResponse>(
    buildPostUrl(baseUrl, endpoints.competitor),
    apiKeys.competitor,
    "POST",
    { asin }
  );
}

/* --- Keyword Gap — GET ---------------------------------------------------- */

export async function fetchKeywordGapData(asin: string): Promise<KeywordGapApiResponse> {
  const { baseUrl, endpoints, apiKeys } = API_CONFIG;
  if (!baseUrl || !endpoints.keywordGap) throw new Error("Keyword Gap API env variables are missing.");

  return apiFetch<KeywordGapApiResponse>(
    `${baseUrl}${endpoints.keywordGap}`,
    apiKeys.keywordGap,
    "POST",
    { asin }
  );
}

/* --- Combined ------------------------------------------------------------- */

export async function fetchCompetitorAnalysisData(asin: string): Promise<CompetitorAnalysisData> {
  // No try/catch — errors propagate to errocr.tsx. Mock data is never returned here.
  const [lqs, competitor, keywordGap] = await Promise.all([
    fetchLQSData(asin),
    fetchCompetitorData(asin),
    fetchKeywordGapData(asin),
  ]);

  return { lqs, competitor, keywordGap };
}