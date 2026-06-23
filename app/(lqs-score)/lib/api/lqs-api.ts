// Add these re-exports at the top, after the existing import
export type {
  LQSApiResponse,
  LQSResultEntry,
  LQSScores,
  LQSHealthFlag,
  LQSPriorityFix,
  LQSFeedback,
  LQSGapReport,
  LQSGapReportEntry,
  LQSScoreComparison,
  LQSDimensionGap,
  LQSExecutiveSummary,
  A9DimensionBreakdown,
  RufusDimensionBreakdown,
} from "@/app/(lqs-score)/types/api";

import { LQSApiResponse } from "@/app/(lqs-score)/types/api";

export async function fetchLQSData(asin: string): Promise<LQSApiResponse> {
  const baseUrl = process.env.API_BASE_URL;
  const endpoint = process.env.API_LQS_ENDPOINT ?? "/api/lqs";
  const apiKey = process.env.API_KEY_LQS ?? "";

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify({ asin }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`LQS API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<LQSApiResponse>;
}