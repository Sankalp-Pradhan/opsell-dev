// export const API_CONFIG = {
//   baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://54.225.17.181:5010",
//   endpoints: {
//     lqs: "/api/lqs",                        // keep as-is
//     competitor: "/api/competitors",          // ← updated path
//     keywordGap: "/api/keyword-gap",         // keep as-is
//   },
//   apiKeys: {
//     lqs: process.env.API_KEY_LQS ?? "",
//     competitor: process.env.API_KEY_COMPETITOR ?? "",
//     keywordGap: process.env.API_KEY_KEYWORD_GAP ?? "",
//   },
// };


export const API_CONFIG = {
  baseUrl: process.env.API_BASE_URL ?? "",
  endpoints: {
    lqs:        process.env.API_LQS_ENDPOINT        ?? "/lqs",
    competitor: process.env.API_COMPETITOR_ENDPOINT ?? "/competitors",
    keywordGap: process.env.API_KEYWORD_GAP_ENDPOINT ?? "/keyword-gap",
  },
  apiKeys: {
    lqs:        process.env.API_KEY_LQS        ?? "",
    competitor: process.env.API_KEY_COMPETITOR ?? "",
    keywordGap: process.env.API_KEY_KEYWORD_GAP ?? "",
  },
} as const;